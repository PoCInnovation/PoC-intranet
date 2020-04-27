import { nexusPrismaPlugin } from 'nexus-prisma';
import { intArg, makeSchema, objectType, stringArg } from '@nexus/schema';

const User = objectType({
    name: 'User',
    definition(t) {
        t.model.id();
        t.model.mail();
        t.model.token();
        t.model.roles({
            pagination: false,
        });
        t.model.projects({
            pagination: false
        });
    },
});

const Roles = objectType({
    name: 'Role',
    definition(t) {
        t.model.id();
        t.model.name();
        t.model.admin();
        t.model.add_role();
        t.model.recommend();
        t.model.write();
        t.model.add_member();
        t.model.create_pro();
        t.model.users();
    },
});

const Projects = objectType({
    name: 'Project',
    definition(t) {
        t.model.id();
        t.model.name();
        t.model.status();
        t.model.airtable();
        t.model.github();
        t.model.users();
    }
});

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
            type: 'User',
            args: { searchRole: stringArg() },
            resolve: (_, { searchRole }, ctx) => {
                return ctx.prisma.user.findMany({
                    where: { roles: { name: searchRole } }
                });
            }
        });
    }
});

const Mutation = objectType({
    name: 'Mutation',
    definition(t) {
        t.crud.createOneUser({ alias: 'createUser' });
        t.crud.createOneRole({ alias: 'createRole' });
        t.crud.createOneProject({ alias: 'createProject' });

        t.list.field('LinkUserToRole', {
            type: 'User',
            args: { userId: stringArg({ nullable: false }), roleId: stringArg({ nullable: false }) },
            resolve: (_, { userId, roleId }, ctx) => {
                return ctx.prisma.user.update({
                    where: { id: userId },
                    data: {
                        roles: { connect: { id: roleId } }
                    }
                });
            }
        });
    }
});

export const schema = makeSchema({
    types: [Query, Mutation, Projects, User, Roles],
    plugins: [nexusPrismaPlugin()],
    outputs: {
        schema: __dirname + '/../schema.graphql',
        typegen: __dirname + '/generated/nexus.ts',
    },
    typegenAutoConfig: {
        contextType: 'Context.Context',
        sources: [
            {
                source: '@prisma/client',
                alias: 'prisma',
            },
            {
                source: require.resolve('./context'),
                alias: 'Context',
            },
        ],
    },
});


