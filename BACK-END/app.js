const express = require('express');
const cors = require('cors');
const app = express();
const port = 5000

app.use(cors());
app.get('/', (req, res) => {
    const { translate } = require('bing-translate-api');
    translate('Who Are you?', null, 'hi').then(data => {
        res.send(data.translation);
    }).catch(err => {
        console.error(err);
    });
})

app.post('/translate', (req, res) => {
    const text = req.query.msg;
    const language = req.query.lang;
    const { translate } = require('bing-translate-api');
    translate(text, null, language).then(data => {
        res.json(
            {
                'originalText': text,
                'translatedText': data.translation,
            }
        );
    }).catch(err => {
        console.error(err);
    });
})









app.listen(port, () => {
    console.log("Server is running");
})


