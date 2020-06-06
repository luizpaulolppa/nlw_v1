import express from 'express';

const app = express();

app.get('/users', (request, response) => {
    return response.json({ ok: false });
});

app.listen(3333, () => {
    console.log('Server start on port 3333!!!');
});