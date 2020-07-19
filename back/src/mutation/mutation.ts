import {objectType, stringArg} from "@nexus/schema";

export const Mutation = objectType({
	name: 'Mutation',
	definition(t) {
		// ? User crud
		t.crud.createOneUser({ alias: 'createUser' });
		t.crud.updateOneUser({ alias: 'updateUser' });
		t.crud.deleteOneUser({ alias: 'deleteUser' });

		// ? Role crud
		t.crud.createOneRole({ alias: 'createRole' });
		t.crud.updateOneRole({ alias: 'updateRole' });
		t.crud.deleteOneRole({ alias: 'deleteRole' });

		// ? Project crud
		t.crud.createOneProject({ alias: 'createProject' });
		t.crud.updateOneProject({ alias: 'updateProject' });
		t.crud.deleteOneProject({ alias: 'deleteProject' });

		t.list.field('LinkUserToRole', {
			type: 'User',
			args: { userId: stringArg({ nullable: false }), roleId: stringArg({ nullable: false }) },
			resolve: async (_, { userId, roleId }, ctx) => {
				return [await ctx.prisma.user.update({
					where: { id: userId },
					data: {
						roles: { connect: { id: roleId } }
					}
				})];
			}
		});

		t.list.field('LinkUserToProject', {
			type: 'User',
			args: { userId: stringArg({ nullable: false }), projectId: stringArg({ nullable: false }) },
			resolve: async (_, { userId, projectId }, ctx) => {
				return [await ctx.prisma.user.update({
					where: { id: userId },
					data: {
						projects: { connect: { id: projectId } }
					}
				})];
			}
		});
	}
});
