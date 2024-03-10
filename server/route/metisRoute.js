const express = require('express');
const router = express.Router();
const metisService = require("../service/metisService");

router.get("/tests", async (req, res) => {
    const exemplo = await metisService.getExemplo();
    res.json(exemplo);
});

module.exports = router;