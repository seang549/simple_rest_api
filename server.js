const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const PORT = 3000;

app.get('/status', (req, res) => {
    res.json({
        status: "Server is running!",
        date: new Date().toISOString()
    });
});


app.use(bodyParser.json());

app.post('/data', (req, res) => {
    console.log(req.body);
    res.json({ message: 'Data received', data: req.body });
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
