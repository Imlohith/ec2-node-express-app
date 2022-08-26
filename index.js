const express = require('express');

const app = express();

const PORT = process.env.PORT || 8080;

app.get("/", (req, res, next) => {
    res.send("It's working awesome")
})

app.listen(PORT, () => {
    console.log(`App liesting at ${PORT}`)
})