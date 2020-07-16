import { nexusSchemaPrisma } from "nexus-plugin-prisma/schema";
import { prisma } from "nexus-plugin-prisma";
import { PrismaClient } from 'nexus-plugin-prisma/client';
import { use } from 'nexus';
import { makeSchema, objectType, stringArg } from "@nexus/schema";
import * as path from 'path';

import { User } from "./types/user";
import { Role } from "./types/role";
import { Project } from "./types/project";

const Query = objectType({
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
					where: { name: searchRole! },
					include: { users: true }
				});
			}
		});

		t.list.field('GetUsersByProjects', {
			type: 'Project',
			args: { searchProject: stringArg() },
			resolve: (_, { searchProject }, ctx) => {
				return ctx.prisma.project.findMany({
					where: { name: searchProject! },
					include: { users: true }
				});
			}
		});
	}
});

const Mutation = objectType({
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

export const schema = makeSchema({
	types: [Query, Mutation, Project, User, Role],
	plugins: [nexusSchemaPrisma({
		experimentalCRUD: true
	})],
	outputs: {
		schema: path.join(__dirname + './../schema.graphql'),
		typegen: path.join(__dirname + '/generated/nexus.ts'),
	},
	typegenAutoConfig: {
		contextType: 'Context.context',
		sources: [
			{
				source: './node_modules/nexus-plugin-prisma/client',
				alias: 'prisma'
			},
			{
				source: require.resolve('./context'),
				alias: 'Context'
			}
		]
	}
});

