const express = require('express');

const app = express();

const PORT = process.env.PORT || 8080;

app.get("/", (req, res, next) => {
    res.send("It's working awesome cool")
})

app.get('/data', (req, res, next) => {
    res.send([
        {
          id: 1,
          name: "johny"
        },
        {
            id: 2,
            name: "smitchy"
        },
        {
            id: 3,
            name: "modi"
        }
    ])
})

app.listen(PORT, () => {
    console.log(`App liesting at ${PORT}`)
})