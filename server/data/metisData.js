const database = require("../infra/database");

exports.getDiaries = () => {
    return database.query('select id, day_report AS "dayReport", gratitude, day_register AS "dayRegister" from metis.diary');
}

exports.saveDiary = (diary) => {
    return database.oneOrNone(
        'INSERT INTO metis.diary (day_report, gratitude, day_register) VALUES ($1, $2, $3) ' +
        'RETURNING id, day_report AS "dayReport", gratitude, day_register AS "dayRegister"',
        [diary.dayReport, diary.gratitude, diary.dayRegister]
    );
};

exports.deleteDiary = (id) => {
    return database.none('delete from metis.diary where id = $1', [id]);
}

exports.updateDiary = (id, diary) => {
    return database.none('update metis.diary set day_report = $1, gratitude = $2, day_register = $3 where id = $4',
        [diary.dayReport, diary.gratitude, diary.dayRegister, id]);
}

exports.getDiary = (id) => {
    return database.oneOrNone('select id, day_report AS "dayReport", gratitude, day_register AS "dayRegister" from metis.diary where id = $1', [id]);
}