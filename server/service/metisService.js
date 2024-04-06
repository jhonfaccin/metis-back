const metisData = require("../data/metisData");

exports.getDiaries = async () =>{
    return metisData.getDiaries();
}

exports.saveDiary = async (diary) => {
    return metisData.saveDiary(diary);
}

exports.deleteDiary = async (id) => {
    return metisData.deleteDiary(id);
}

exports.updateDiary = async (id, diary) => {
    return metisData.updateDiary(id,diary);
} 

exports.getDiary = async (id) => {
    return metisData.getDiary(id);
}
