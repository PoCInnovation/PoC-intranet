import { objectType, stringArg } from '@nexus/schema';

export default objectType({
	name: 'Query',
	definition(t) {
		t.crud.users();
		t.crud.user();
		t.crud.projects();
		t.crud.project();
		t.crud.roles();
		t.crud.role();

		t.list.field('GetUsersByRoles', {
			type: 'Role',
			args: { searchRole: stringArg() },
			resolve: (_, { searchRole }, ctx) => {
				return ctx.prisma.role.findMany({
					// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
					where: { name: searchRole! },
					include: { users: true },
				});
			},
		});

		t.list.field('GetUsersByProjects', {
			type: 'Project',
			args: { searchProject: stringArg() },
			resolve: (_, { searchProject }, ctx) => {
				return ctx.prisma.project.findMany({
					// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
					where: { name: searchProject! },
					include: { users: true },
				});
			},
		});
	},
});
