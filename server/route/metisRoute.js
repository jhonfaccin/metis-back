const express = require('express');
const router = express.Router();
const metisService = require("../service/metisService");


router.get("/diarios", async (req, res) => {
    const diaries = await metisService.getDiaries();
    res.status(200).json(diaries);
});

router.post("/cadastrarDiario", async (req, res) => {
    const diary = req.body;
    const diarySaved = await metisService.saveDiary(diary);
    res.status(201).json(diarySaved);

});

router.put("/atualizarDiario/:id", async (req, res) => {
    const diary = req.body;
    await metisService.updateDiary(req.params.id, diary);
    res.status(204).end();
});

router.delete("/excluirDiario/:id", async (req, res) => {
    await metisService.deleteDiary(req.params.id);
    res.status(204).end();
});


module.exports = router;