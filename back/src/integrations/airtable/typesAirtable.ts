export interface MemberLogin {
	id: string;
	email: string;
	name: string;
}

export interface ProjectInformation {
	nom: string;
	description: string;
	members: Array<MemberLogin>
	respo: Array<MemberLogin>
}

export enum TaskStatus {
	TODO = "TODO",
	DOING = "DOING",
	DONE = "DONE",
	WONT = "WON'T DO"
}

export enum TaskWeight {
	VERY_SHORT = "1",
	SHORT = "2",
	MEDIUM = "3",
	LONG = "5",
	VERY_LONG = "8",
	WEEK = "13"
}

export enum TaskPriority {
	MIN = 1,
	LOW = 2,
	MEDIUM = 3,
	HIGH = 4,
	MAX = 5
}

export interface TaskModel {
	taskName: string;
	status: TaskStatus;
	assigned: Array<string>;
	weight: TaskWeight;
	description: string;
	priority: TaskPriority;
	stepDone: string;
}
