import express from "express";
import helmet from "helmet";
import cors from "cors";
import { config } from "dotenv";
import compression from 'compression';
config();

const { PORT } = process.env;

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(helmet());
app.use(compression())


app.get("/", (req, res) => {
  return res.status(200).json({ status: "success" });
});

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
