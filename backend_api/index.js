const express = require('express');
const bodyParser = require("body-parser");
const app = express();
const port = 5000;

app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/get',(req, res) => {
    res.json({
        name: "code"
    });
});

app.listen(port, () => {
    console.log(`Now listening on port ${port}`); 
});