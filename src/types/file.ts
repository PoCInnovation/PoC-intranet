import { objectType } from "@nexus/schema";
import { GraphQLUpload} from "graphql-upload"

export const Upload = GraphQLUpload;

export const File = objectType({
  name: "File",
  definition(t) {
    t.id("id");
    t.string("path");
    t.string("filename");
    t.string("mimetype");
    t.string("encoding");
  }
});