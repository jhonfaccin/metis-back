const express = require("express");
const cors = require('cors');
const bodyParser = require('body-parser');
const app = express();
const port = 9000;

app.use(cors());
app.use(bodyParser.json());
app.use("/metis",require("./server/route/metisRoute"));


app.listen(port, () => {
    console.log(`listeninn on port ${9000}`)
});
