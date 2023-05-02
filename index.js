// app.js
import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { Configuration, OpenAIApi } from 'openai';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

dotenv.config();

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.json()); // Enable JSON body parsing
app.use(express.static(__dirname)); // Serve static files from the current directory

app.post('/summarize', async (req, res) => {
  const textToSummarize = req.body.textToSummarize;
  if (!textToSummarize) {
    return res.status(400).json({ error: 'textToSummarize is required' });
  }

  const BULLETPOINTS_PROMPT = 'Convert this video transcript into a summarized set of bullet points for an easy to read overview of the text, and be brief.';
  const promptText = `${BULLETPOINTS_PROMPT}\n${textToSummarize.trim()}`;

  try {
    const response = await openai.createCompletion({
      model: 'text-davinci-003',
      prompt: promptText,
      temperature: 0,
      max_tokens: 256,
    });

    const summarizedText = response.data.choices[0].text.trim();
    res.json({ summarizedText });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'An error occurred while summarizing the text' });
  }
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
