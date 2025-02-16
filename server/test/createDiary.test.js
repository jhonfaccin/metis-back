const crypto = require("crypto");
const axios = require("axios");
const metisService = require("../service/metisService");
const database = require("../infra/database")

const baseURL = "http://localhost:9000/metis";

const generate = function () {
    return crypto.randomBytes(20).toString('hex');
};


const request = (url, method, data) => {
    return axios({ url, method, data })
}

afterAll(() => {
    database.$pool.end();
});

test("Should save diary", async () => {
    const diary = { dayReport: generate(), gratitude: generate(), dayRegister: new Date() };
    const response = await request(`${baseURL}/cadastrarDiario`, "post", diary);
    const diarySaved = response.data;
    expect(response.status).toBe(201);
    expect(diarySaved.dayReport).toBe(diary.dayReport);
    expect(diarySaved.gratitude).toBe(diary.gratitude);
    expect(new Date(diarySaved.dayRegister)).toEqual(diary.dayRegister);
    await metisService.deleteDiary(diarySaved.id);
});

test('Should get diaries', async function () {
    const diary1 = await metisService.saveDiary({ dayReport: generate(), gratitude: generate(), dayRegister: new Date() });
    const diary2 = await metisService.saveDiary({ dayReport: generate(), gratitude: generate(), dayRegister: new Date() });
    const diary3 = await metisService.saveDiary({ dayReport: generate(), gratitude: generate(), dayRegister: new Date() });
    const response = await request(`${baseURL}/diarios`, 'get');
    const diaries = response.data;
    expect(response.status).toBe(200);
    expect(diaries).toHaveLength(3);
    await metisService.deleteDiary(diary1.id);
    await metisService.deleteDiary(diary2.id);
    await metisService.deleteDiary(diary3.id);
});

test("Should update diary", async () => {
    const diary = await metisService.saveDiary({ dayReport: generate(), gratitude: generate(), dayRegister: new Date() });
    diary.dayReport = generate();
    diary.gratitude = generate();
    diary.dayRegister = new Date();
    const response = await request(`${baseURL}/atualizarDiario/${diary.id}`, "put", diary);
    const updateDiary = await metisService.getDiary(diary.id);
    expect(response.status).toBe(204);
    expect(updateDiary.dayReport).toBe(diary.dayReport);
    expect(updateDiary.gratitude).toBe(diary.gratitude);
    expect(new Date(updateDiary.dayRegister)).toEqual(diary.dayRegister);
    await metisService.deleteDiary(updateDiary.id);
});

test("Should delete diary", async () => {
    const diary = await metisService.saveDiary({ dayReport: generate(), gratitude: generate(), dayRegister: new Date() });
    const response = await request(`${baseURL}/excluirDiario/${diary.id}`, "delete");
    const diaries = await metisService.getDiaries();
    expect(response.status).toBe(204);
    expect(diaries).toHaveLength(0);
});


