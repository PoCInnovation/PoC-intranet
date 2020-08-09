import Airtable from 'airtable';
import { MemberLogin, ProjectInformation, TaskModel } from './typesAirtable';
import { config } from '../../../config';

// TODO all routes into express server with middleware ect
class AirtableSDK extends Airtable {
	private pocBase: Airtable.Base;

	/**
	 * Construct a new SDK class from Airtable
	 *
	 * @param endpointUrl Airtable API endpoint
	 * @param apiKey API Private key
	 * @param megaListKey Key of the megaList
	 */
	constructor(endpointUrl: string, apiKey: string, megaListKey: string) {
		super({ endpointUrl, apiKey });
		this.pocBase = this.base(megaListKey);
	}

	/**
	 * Convert project into a typed Resource
	 *
	 * @param project
	 */
	static typeProject(project: any) {
		return {
			nom: project.Nom,
			description: project.Description,
			members: project['Members login'],
			respo: project['Responsable login'],
		};
	}

	/**
	 * Convert task into a valid record
	 *
	 * @todo Handle assigned Id
	 * @param task TaskModel type
	 */
	static async convertTaskToRecord(task: TaskModel) {
		const { taskName, status, assigned, weight, description, stepDone, priority } = task;

		/*
		const assignedId = await Promise.all(assigned.map(async (login: string) => {
			return (await this.getMemberLogin(login)).id;
		}))
		*/
		const record = {
			fields: {
				'Task name': taskName,
				Status: status,
				//	"Assigned to": assignedId,
				Weight: weight,
				Description: description,
				'Weight if s8': 'IF(AND(OR({Status} = "DONE", {Status} = "DOING"), {Sprint} = "Sprint 8"), {Weight}, 0)',
				Priority: priority,
				'Step Done': stepDone,
			},
		};
		return record;
	}

	/**
	 * Return an array of every projects
	 */
	async getProjectList() {
		return (
			await this.pocBase('Projets')
				.select({
					view: 'Grid view',
					fields: ['Members login', 'Responsable login', 'Nom', 'Description', 'Api key'],
				})
				.all()
		).map((value) => value.fields);
	}

	/**
	 * Return an ApiKey of the choosen project
	 *
	 * @param projectName Name of the project
	 */
	async getProjectKey(projectName: string): Promise<any> {
		return (await this.getProjectList()).filter((project: any) => {
			if (project.Nom === projectName) {
				return project;
			}
			return false;
		})[0];
	}

	/**
	 * Get project information
	 *
	 * @param projectName : Name of the project
	 */
	async getProject(projectName: string) {
		const projectKey: string = (await this.getProjectKey(projectName))['Api key'];

		return this.getProjectTasks(projectKey);
	}

	/**
	 * Return an array of all project's task
	 *
	 * @param projectKey ApiKey of the project
	 */
	async getProjectTasks(projectKey: string) {
		const projectBase = this.base(projectKey);

		return (
			await projectBase('Tasks')
				.select({
					view: 'All Tasks',
				})
				.all()
		).map((task) => {
			return {
				id: task.id,
				data: task.fields,
			};
		});
	}

	/**
	 * Get a selected task on the project
	 *
	 * @param projectKey Api key of the project
	 * @param taskName Name of the task
	 */
	async getProjectTask(projectKey: string, taskName: string) {
		const tasks = await this.getProjectTasks(projectKey);
		const selectTask = tasks.filter((task: any) => {
			if (task.data['Task name'] === taskName) {
				return task;
			}
			return false;
		})[0];
		return selectTask.id;
	}

	/**
	 * Get member data value from his login
	 *
	 * @return MemberLogin object
	 * @param login User email
	 */
	async getMemberLogin(login: string): Promise<MemberLogin> {
		const members = (
			await this.pocBase('Membres')
				.select({
					view: 'Grid view',
					fields: ['Login'],
				})
				.all()
		).map((value: any) => value);

		const member = members.filter((value: any) => {
			if (value.fields.Login && value.fields.Login.email === login) {
				return value;
			}
			return false;
		})[0];

		return {
			id: member.id,
			email: member.fields.Login.email,
			name: member.fields.Login.name,
		};
	}

	/**
	 * Get an Array of user's project information

	 * @param login select user email login
	 */
	async getMemberProjects(login: string): Promise<Array<ProjectInformation>> {
		const projects = await this.getProjectList();

		// Filter projects to get only selected login project
		const memberProjects = projects.filter((value: any) => {
			if (value['Members login']) {
				const isMemberOfProject = value['Members login'].filter((memberLogin: any) => {
					if (memberLogin.email === login) {
						return memberLogin;
					}
					return false;
				});
				if (isMemberOfProject.length) {
					return value;
				}
			}
			return false;
		});

		// Convert array to ty
		return memberProjects.map((value: any) => AirtableSDK.typeProject(value));
	}

	/**
	 * Create a new task on the given project
	 *
	 * @param projectName Name of the project
	 * @param newTask Model of the new task
	 */
	async createTask(projectName: string, newTask: TaskModel) {
		const projectKey: string = (await this.getProjectKey(projectName))['Api key'];
		const projectBase = this.base(projectKey);

		await projectBase('Tasks').create([await AirtableSDK.convertTaskToRecord(newTask)], undefined);
	}

	/**
	 * Update task project
	 *
	 * @param projectName Name of the project
	 * @param taskName Name of the task
	 * @param newTask New information about the task
	 */
	async updateTask(projectName: string, taskName: string, newTask: TaskModel) {
		const projectKey: string = (await this.getProjectKey(projectName))['Api key'];
		const projectBase = this.base(projectKey);
		const taskId = await this.getProjectTask(projectKey, taskName);

		await projectBase('Tasks').update([
			{
				id: taskId,
				...(await AirtableSDK.convertTaskToRecord(newTask)),
			},
		]);
	}

	/**
	 * Delete a selected task
	 *
	 * @param projectName Name of the project
	 * @param taskName Name of the task to delete
	 */
	async deleteTask(projectName: string, taskName: string) {
		const projectKey: string = (await this.getProjectKey(projectName))['Api key'];

		const projectTask = (await this.getProject(projectName)).filter((task: any) => {
			if (task.data['Task name'] === taskName) {
				return task.id;
			}
			return false;
		})[0];

		const projectBase = this.base(projectKey);
		return projectBase('Tasks').destroy(projectTask.id, (err: Error, deleteTask: any) => {
			if (err) {
				throw err;
			} else {
				return deleteTask;
			}
		});
	}
}

export default new AirtableSDK(config.airtableEndpoint, config.airtableApiKey, config.megalistKey);
