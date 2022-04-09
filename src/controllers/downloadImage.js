import { __dirname } from "../constants/constants.js";
import * as path from "path";
import { promises as fs } from "fs";

const handleDowloadImage = async (req, res) => {
  const { imageUrl } = req.query;
  const fileLocation = path.join(__dirname, "..", "public", imageUrl);
  const img = await fs.lstat(fileLocation);
  if (!img.isFile()) {
    return res.status(404).json({ status: "failed" });
  }
  res.download(fileLocation, imageUrl.replace(/\//g, "-"));
};

export default handleDowloadImage;
