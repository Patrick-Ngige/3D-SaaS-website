import express from "express";
import * as dotenv from "dotenv";
// import { OpenAIApi} from 'openai';

dotenv.config();

const router = express.Router();

const config = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});

const openai = new OpenAiApi(config);

router.route("/").get((req, res) => {
  res.status(200).json({ message: "Hello from Kim" });
});

export default router;