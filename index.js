const express = require("express");
const app = express();
const port = 9000;

app.use("/",require("./server/route/metisRoute"));


app.listen(port, () => {
    console.log(`listeninn on port ${9000}`)
});
