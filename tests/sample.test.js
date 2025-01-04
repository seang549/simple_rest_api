const request = require('supertest');
const express = require('express');

const app = express();
app.get('/status', (req, res) => {
    res.json({
        status: "Server is running!",
        date: "test-date"
    });
});

test('GET /status returns status and date', async () => {
    const res = await request(app).get('/status');
    expect(res.statusCode).toBe(200);
    expect(res.body.status).toBe("Server is running!");
    expect(res.body.date).toBe("test-date");
});
