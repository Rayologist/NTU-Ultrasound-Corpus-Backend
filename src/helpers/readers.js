import { promises as fs } from "fs";

const readJSON = async (file_path) => {
  const res = await fs.readFile(file_path);
  return JSON.parse(res);
};

export { readJSON };
