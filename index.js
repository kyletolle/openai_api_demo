// Following example at https://platform.openai.com/docs/libraries

import dotenv from "dotenv";
import { Configuration, OpenAIApi } from "openai";

dotenv.config();

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);
const BULLETPOINTS_PROMPT = 'Convert this video transcript into a summarized set of bullet points for an easy to read overview of the text, and be brief.';
const textToSummarize = `
00:00 I need to do some work.
`;
const promptText = `${BULLETPOINTS_PROMPT}\n${textToSummarize.trim()}`
const response = await openai.createCompletion({
  model: "text-davinci-003",
  prompt: promptText,
  temperature: 0,
  max_tokens: 256,
});

console.info(response.data);
console.info(response.data.choices[0].text.trim());
