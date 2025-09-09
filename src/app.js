const express = require('express');
const {generateContent} = require('./services/ai.service');
const app = express();


app.use(express.json());


app.get('/', async(req, res) => {
    res.json({
        message: "Welcome to the AI Backend!"
        , data: data
    })
});

app.post('/generate', async(req, res) => {
    const {language,prompt} = req.body;
    const data = await generateContent(prompt);
    res.json({
        message: "Content generated successfully"
        , data: data
    })
});

module.exports = app;