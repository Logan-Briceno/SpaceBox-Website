import express from 'express';

const app = express();
const port = undefined;

//Error function
app.get('/', (req, res) => {
    res.send("Hello, World!");
});

app.listen(port!, () => {
    console.log("Server running on port: " + port);
});