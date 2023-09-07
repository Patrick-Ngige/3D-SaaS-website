import express from "express";
import * as dotenv from "dotenv";
import OpenAI from 'openai';

dotenv.config();

const app = express();

const openai = new OpenAI(process.env.OPENAI_API_KEY);

const dalleRoutes = express.Router();

app.use(express.json());

app.get("/", (req, res) => {
  res.status(200).json({ message: "Hello from Kim" });
});

app.post('/api/v1/dalle', async (req, res) => {
  try {
    const {prompt, maxTokens} = req.body;
    const response = await openai.complete({
      engine: 'davinci-codex',
      prompt,
      maxTokens,
    });

    res.setHeader('Content-Type', 'application/json');

    res.status(200).json({completion : response.data.choices[0].text});
  } catch (error) {
    console.error(error);

    res.setHeader('Content-Type', 'application/json');

    res.status(500).json({message: "Something went wrong"});
  }
});

// app.listen(process.env.PORT || 3000, () => {
//   console.log(`Server is running on port ${process.env.PORT || 3000}`);
// });

export default dalleRoutes;
