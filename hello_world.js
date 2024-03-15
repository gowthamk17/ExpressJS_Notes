const express = require('express');
const app = express();
const port = 2999;

app.get('/', (req, res) => {
    res.send("ohayo");
});

app.listen(port, () => {
    console.log('hello world app is running on port: ' + port);
});