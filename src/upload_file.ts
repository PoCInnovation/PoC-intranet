import { createWriteStream } from "fs";
import { resolve } from "path";
import { sync } from "mkdirp";

/*

const uploadDir = resolve(__dirname, "../../front/public");

sync(uploadDir);

const storeUpload = async ({ (stream: any, filename }) => {
  const path = `${uploadDir}/${filename}`;

  return new Promise((resolve, reject) =>
    stream
      .pipe(createWriteStream(path))
      .on("finish", () => resolve({ path }))
      .on("error", reject)
  );
};

export async function processUpload(file) {
  const { stream, filename, mimetype, encoding } = await file;
  const path = await storeUpload({ stream, filename });
  return { filename, mimetype, encoding, path };
}

*/
