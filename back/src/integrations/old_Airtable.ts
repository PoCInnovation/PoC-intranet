import Airtable from 'airtable';

const endpoint = 'https://api.airtable.com';
const key = 'keyPYPKWuv4u7F7lK';

let test = new Airtable({endpointUrl: 'https://api.airtable.com', apiKey: 'keyPYPKWuv4u7F7lK'})

/*
interface Project {
	projectName: string;
	projectDescription: string;
	members: Array<string>;
	respo: Array<string>;
}

class AirtableSDK extends Airtable {
	/**
	 * Construct a new SDK class from Airtable
	 *
	 * @param endpointUrl Airtable API endpoint
	 * @param apiKey API Private key
	 */
/*	constructor(endpointUrl: string, apiKey: string) {
		super({endpointUrl, apiKey});
	}

	async getProjectInfo(base: Airtable.Base, login: string, projectName: string, projectDescription: string, respo: Array<string>): Promise<Project> {
		let members: Array<string> = [];

		return new Promise((resolve, reject) => {
			base('Members')
			.select({view: "Grid view"})
			.eachPage((records => {
				records.forEach((record: any) => {
					const user = record.get('Airtable Name');

					if (!user || user.email !== login) {
						reject('Not members');
					}
					members.push(user.name);

					resolve({
						projectName,
						projectDescription,
						members,
						respo
					});
				});
			}));
		});
	};

	readProject(login: string) {
		console.log('a');
		const base = this.base('appIXavTSmO9mLC18');

		base('Projets').select({view: "Grid view"})
			.eachPage(async (records: any)=> {
			const project: Array<Project> = [];
			for (let i = 0; i < records.length; i++) {
				console.log(i);
				if (records[i].get('Status') === 'En cours' && records[i].get('Nom')) {
					const projectName = records[i].get('Nom');
					const projectDescription = records[i].get('Description');
					try {
						const resp = (await Promise.all(records[i].get('Responsable').map((r: string) => base('Membres').find(r)))).map((r: any): string => r?.fields?.Name);
						/*const projectInfo = await this.getProjectInfo(base, login, projectName, projectDescription, resp);
						project.push(projectInfo);*/
/*						console.log(project)
					} catch (e) {
						console.log('pute', e);
					}
				}
			}
		}).catch(e => console.log(e));

	}
}

let mySdk = new AirtableSDK(endpoint, key);

mySdk.readProject('tom.chauveau@epitech.eu');*/

class airtable {
	static getProjectInfo(apiKey: string, login: string, projectName: string, description: string, resp: string[]): Object {
		return new Promise((resolve: any, reject: any) => {
			const base = test.base(apiKey)
			let res: Object;
			let Members: Array<string> = [];
			let Membershere: boolean = false;

			base('Members').select({
				view: "Grid view"
			}).eachPage(function page(records: any) {
				records.forEach(function(record: any) {
					const user = record.get('Airtable Name');

					if (user && user.email) {
						if (user.email === login)
							Membershere = true;
						Members.push(user.name)
					}
				})
				if ( Membershere === true) {
					res = {
						'Project': projectName,
						'Description': description,
						'Members': Members,
						'resp': resp
					};
					resolve(res);
				}
				else reject('Not members')
			})
		})
	}

	readProject(login: string) {
		return new Promise((resolve: any) => {
			const base = test.base(('appIXavTSmO9mLC18'))

			base('Projets').select({
				view: "Grid view"
			}).eachPage(async function page(records: any) {
				let res: any = [];
				for (let i = 0; i < records.length; i++) {
					let key: any;
					let projectInfo: Object;
					let projectName: string;
					let ProjectDesciption: string;
					let resp: Array<string> = [];

					if (records[i].get('Status') === 'En cours' && records[i].get('Nom')){
						key = records[i].get('Api key')
						projectName = records[i].get('Nom')
						ProjectDesciption = records[i].get('Description')
						try {
							resp = (await Promise.all(records[i].get('Responsable').map((r: string) => base('Membres').find(r)))).map((r: any): string => r?.fields?.Name);
							projectInfo = await airtable.getProjectInfo(key, login, projectName, ProjectDesciption, resp);
							res.push(projectInfo);
						} catch (error) {
							console.log(error)
						}
					}
				}
				resolve(res)
			})
		})
	}

	async deleteTask(tableID: string, taskName: string) {
		const base = test.base(tableID)
		await base('Tasks').select({
			view: "All Tasks"
		}).eachPage(function page(records: Airtable.Records<{}>) {
			return records.forEach(async function (record: any ) {
				const currentTask = record.get('Task name');
				const currentTaskID = record.id;

				if (taskName === currentTask) {
					await base('Tasks').destroy(currentTaskID, function (err: any, deleteRecords: any) {
						if (err) {
							console.log(err);
							return;
						}
						console.log(currentTask, 'deleted');
					});
				}
			});
		});
	}

	createTask(
		tableID: string,
		taskName: string,
		status: string,
		assigned: Array<string>,
		weight: string,
		description: string,
		priority: number,
		stepDone: string) {
		const base: any = test.base(tableID)

		base('Tasks').create([
			{
				"fields" : {
					"Task name": taskName,
					"Status": status? status: "TODO",
					"Assigned to": assigned ? assigned : [],
					"Weight": weight ? weight : '1',
					"Description": description,
					"Weight if s8": "IF(AND(OR({Status} = \"DONE\", {Status} = \"DOING\"), {Sprint} = \"Sprint 8\"), {Weight}, 0)",
					"Priority": priority ? priority : 0,
					"Step Done": stepDone ? stepDone : ""
				}
			}
		], function(err: any, records: Array<Object>) {
			if (err) {
				console.log(err)
				return;
			}
			records.forEach(function (record: any) {
				console.log(record.getId());
			});
		});
	}

	updateTask(
		tableID: string,
		taskID: string,
		taskName: string,
		status: string,
		assigned: Array<string>,
		weight: string,
		description: string,
		priority: number,
		stepDone: string) {

		const base: any = test.base(tableID);

		base('Tasks').update([
			{
				"id": taskID,
				"fields": {
					"Task name": taskName,
					"Status": status,
					"Assigned to": assigned,
					"Weight": weight,
					"Description": description,
					"Weight if s8": "IF(AND(OR({Status} = \"DONE\", {Status} = \"DOING\"), {Sprint} = \"Sprint 8\"), {Weight}, 0)",
					"Priority": priority,
					"Step Done": stepDone
				}
			}
		], function(err: any) {
			if (err) {
				console.error(err);
				return;
			}
		})
	}
}

const ouais = new airtable()

console.log(ouais.readProject('tom.chauveau@epitech.eu'))
