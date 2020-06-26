import { objectType } from "@nexus/schema";

export const Project = objectType({
  name: 'Project',
  definition(t) {
    t.model.id();
    t.model.name();
    t.model.description();
    t.model.image();
    t.model.status();
    t.model.airtable();
    t.model.github();
    t.model.users();
  }
});