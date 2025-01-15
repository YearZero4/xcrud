const express = require('express');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(express.json());

const msg = [];

app.get('/msg', (req, res) => res.json(msg));

app.post('/msg', (req, res) => {
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

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Servidor ejecutándose en el puerto ${PORT}`));
