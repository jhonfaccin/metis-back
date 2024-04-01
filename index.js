const express = require("express");
const cors = require('cors');
const app = express();
const port = 9000;

app.use(cors());
app.use("/metis",require("./server/route/metisRoute"));


app.listen(port, () => {
    console.log(`listeninn on port ${9000}`)
});
