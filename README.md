# OpenAI API Demo

A few HTML pages that can hit a Node API that will in turn use the OpenAI API for text completion to perform some various actions on text.

A lot of the code for the server and client was generated by ChatGPT as a way to help get the scaffolding built so I could focus on exploring the more interesting topics.

Looks like this text completion endpoint is already legacy, so this might not run today. See https://platform.openai.com/docs/api-reference/completions.

## Installing

```
npm install
```

## Running

```
node index.js
```

## Using

There are several different pages you can use that will all take in some text and then use the AI to perform some operation on it.

### Sentiment

http://localhost:3000/sentiment.html

Takes a message and determines the sentiment of it.

### Sentiment Chart

http://localhost:3000/sentiment-chart.html

Given some text, return a chart of sentiment over time. For each entry, it will return a timestamp, the emotion/sentiment detected, and an emoji that represents that sentiment.

### Summarize

http://localhost:3000/summarize.html

Given some text, it can summarize the points into a bulleted list.

### Pirate

http://localhost:3000/pirate.html

Given some text, it will modify it to be in pirate speech.

### Chapters

http://localhost:3000/chapters.html

Can take a video transcript you provide and generate chapters from it.

### Emojify

http://localhost:3000/emojify.html

Given some text, return a series of emojis that represent the text.
