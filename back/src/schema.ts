import { nexusSchemaPrisma } from 'nexus-plugin-prisma/schema';
import { makeSchema } from '@nexus/schema';
import * as path from 'path';

/**
 * @description Graphql object import
 */
import { User } from './types/user';
import { Role } from './types/role';
import { Project } from './types/project';
import { Query } from './query/query';
import { Mutation } from './mutation/mutation';

/**
 * @description Schema used to generate all nexus
 */
export const schema = makeSchema({
	types: [ Query, Mutation, Project, User, Role ],
	plugins: [ nexusSchemaPrisma({
		experimentalCRUD: true
	}) ],
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

