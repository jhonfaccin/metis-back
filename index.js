const express = require("express");
const app = express();
app.get("/", (req,resp) => {
    resp.send("BBB!!");
})
const port = process.env.PORT || 4000;
app.listen(port, () => {
    console.log(`listeninn on port ${400}`)
});
