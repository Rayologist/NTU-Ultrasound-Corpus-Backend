import express from "express";
import helmet from "helmet";
import cors from "cors";
import { config } from "dotenv";
import { getImage } from "./routes/getImage.js";
import { downloadImage } from "./routes/downloadImage.js";
import compression from 'compression';
config();

const { PORT } = process.env;

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(helmet());
app.use(compression())
app.use("/images", express.static("public"));
app.use("/getImage", getImage);
app.use("/downloadImage", downloadImage);
// TODO: use app.all("/download/images/*", downloadImage)


app.get("/", (req, res) => {
  return res.status(200).json({ status: "success" });
});

app.listen(PORT, () => {
  console.log(`${process.env.NODE_ENV} Server listening on port ${PORT}`);
});
