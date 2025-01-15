const express = require('express');
const cors = require('cors');
const serverless = require('serverless-http');

const app = express();

app.use(cors());
app.use(express.json());

const msg = [];

app.get('/.netlify/functions/crud/msg', (req, res) => res.json(msg));

app.post('/.netlify/functions/crud/msg', (req, res) => {
    const msgx = {
        email: req.body.email,
        msg: req.body.msg
    };
    if (!msgx.email || !msgx.msg) {
        return res.status(400).json({ error: 'Email y mensaje son requeridos.' });
    }
    msg.push(msgx);
    res.status(201).json(msgx);
});

module.exports.handler = serverless(app);
