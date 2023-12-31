const express = require('express');
const imageupload = require('express-fileupload');

const app = express();
const pdfParse = require('pdf-parse');
const cors = require('cors');

const openai = require('./openai');
const prompt = require('./prompts/analysisPrompt');

app.use(express.json());
app.use(cors());

app.post('/api/v1/upload', imageupload(), async (req, res, next) => {
  try {
    const result = await pdfParse(req.files.statement);

    const completion = await openai.createChatCompletion({
      messages: [
        {
          role: 'system',
          content: '[Object]"Your output as JavaScript Object:"',
        },
        { role: 'user', content: prompt(result.text.slice(0, 2000)) },
      ],
      model: 'gpt-3.5-turbo',
    });

    // const { data } = completion.data.choices[0].message;
    // console.log('data', completion.data.choices[0].message.content);

    const data = completion.data.choices[0].message.content;

    res.status(200).json({
      status: 'success',
      data: JSON.parse(data),
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      status: 'error',
      error,
    });
  }
});

module.exports = app;
