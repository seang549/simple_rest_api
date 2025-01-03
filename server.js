const express = require('express');
const app = express();
const PORT = 3000;

app.get('/status', (req, res) => {
    res.json({
        status: "Server is running!",
        date: new Date().toISOString()
    });
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
