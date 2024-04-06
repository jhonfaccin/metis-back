const express = require("express");
const cors = require('cors');
const bodyParser = require('body-parser');
const app = express();
const port = 9000;

app.use(cors());
app.use(bodyParser.json());
app.use("/metis",require("./server/route/metisRoute"));
// app.use((err, req, res, next) => {
//     const statusCode = err.status || 500;
//     res.status(statusCode).json({
//         status: 'error',
//         message: err.message,
//         statusCode: statusCode
//     });
// });


app.listen(port, () => {
    console.log(`listeninn on port ${9000}`)
});
