const dbpool = require("../config/config.js");
const errors = require("../utils/errors.js");
const functions = require("../utils/functions.js")

// const checkSubmission = async (tryOutId) => {
//     const [[submission], dump] = await dbpool.execute(`SELECT jumlah_submisi FROM tryouts WHERE id=${tryOutId}`);
//     return submission.jumlah_submisi
// }

const createQuestion = async (body, tryOutId) => {
    const question_text = body.question_text;
    const answer = body.answer;
    if (await functions.checkSubmission(tryOutId))
        throw new errors.BadRequestError("Try out sudah memiliki submisi!");
    else if (!(question_text && answer!=undefined))
        throw new errors.BadRequestError("Data tidak lengkap!");
    const SQLQuery = `  INSERT INTO questions (tryout_id,question_text,answer) 
                        VALUE (${tryOutId},'${question_text}',${answer})`;
    return dbpool.execute(SQLQuery);
}

const getQuestions = (tryOutId) => {
    const SQLQuery = ` SELECT * FROM questions WHERE tryout_id=${tryOutId}`
    return dbpool.execute(SQLQuery);
}

const editQuestion = async (body, questionId, tryOutId) => {
    const [questionData, dump] = await dbpool.execute(`SELECT * FROM questions WHERE id=${questionId} AND tryout_id=${tryOutId}`);
    if (await functions.checkSubmission(tryOutId))
        throw new errors.BadRequestError("Try out sudah memiliki submisi!");
    else if (!questionData.length)
        throw new errors.NotFoundError("Question tidak ditemukan!");
    const question = questionData[0][0];
    const SQLQuery = `  UPDATE questions SET question_text='${body.question_text || question.question_text}',
                        answer=${body.answer || question.answer} WHERE id=${questionId} AND tryout_id=${tryOutId}`;
    return dbpool.execute(SQLQuery);
}

const deleteQuestion = async (questionId, tryOutId) => {
    if (await functions.checkSubmission(tryOutId))
        throw new errors.BadRequestError("Try Out sudah memiliki submisi!");
    const SQLQuery = ` DELETE FROM questions WHERE id=${questionId}`;
    return dbpool.execute(SQLQuery);
}

module.exports = {
    createQuestion,
    getQuestions,
    editQuestion,
    deleteQuestion,
}