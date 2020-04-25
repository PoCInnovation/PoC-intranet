import Joi from "@hapi/joi";

const userSchema = Joi.object().keys({
    mail: Joi.string().email().required(),
    token: Joi.string().required()
});

const projectSchema = Joi.object().keys({
    name: Joi.string().required(),
    airtable: Joi.string().optional(),
    github: Joi.string().optional(),
    status: Joi.string().valid('Todo', 'In progress', 'Done')
});

const roleSchema = Joi.object().keys({
    name: Joi.string().required(),
    admin: Joi.boolean().required(),
    add_role: Joi.boolean().required(),
    recommend: Joi.boolean().required(),
    write: Joi.boolean().required(),
    add_member: Joi.boolean().required(),
    create_project: Joi.boolean().required()
});

export { userSchema, projectSchema, roleSchema };