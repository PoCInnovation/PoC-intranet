import { arg, mutationField } from "@nexus/schema";
import fs from 'fs'
/*
export const uploadFile = mutationField("uploadFile", {
  type: "File",
  args: {
    file: arg({ type: "Upload", required: true })
  },
  resolve: async (parent, { file }, ctx) => {
    return file.then(file => {
      const {createReadStream, filename, mimetype} = file;

      const fileStream = createReadStream();
      fileStream.pipe(fs.createWriteStream(__dirname + '../../front/public/'))
    })
  }
});
$/
 */
