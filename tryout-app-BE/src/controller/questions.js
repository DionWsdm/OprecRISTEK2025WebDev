const questionModels = require("../models/questions.js");
const errors = require("../utils/errors.js");

const createQuestion = async (req, res) => {
    try
    {
        await questionModels.createQuestion(req.body, req.params.tryOutId);
        return res.status(201).json({
            message: "Berhasil menambahkan question.",
        });
    }
    catch (error)
    {
        if (error instanceof errors.BadRequestError)
            return res.status(400).json({
                message: error.message,
            });

        return res.status(500).json({
            message: "Internal server error.",
            serverMessage: error,
        });
    }
}

const getQuestions = async (req, res) => {
    try
    {
        const data = await questionModels.getQuestions(req.params.tryOutId);
        if (!data[0].length)
            return res.status(404).json({
                message: "Data tidak ditemukan!"
            });

        return res.json({
            questions: data[0],
        });
    }
    catch (error)
    {
        return res.status(500).json({
            message: "Internal server error.",
        })
    }    
}

const editQuestion = async (req, res) => {
    try
    {
        await questionModels.editQuestion(req.body, req.params.questionId, req.params.tryOutId)
        return res.json({
            message: "Berhasil mengedit question.",
            data: null,
        })
    }
    catch (error)
    {
        if (error instanceof errors.NotFoundError)
            return res.status(404).json({
                message: error.message,
            });

        return res.status(500).json({
            message: "Internal server error.",
            serverMessage: error,
        });
    }
}

const deleteQuestion = async (req, res) => {
    try
    {
        await questionModels.deleteQuestion(req.params.questionId, req.params.tryOutId);
        return res.status(200).json({
            message: "Berhasil menghapus question.",
        })
    }
    catch (error)
    {
        if (error instanceof errors.BadRequestError)
            return res.status(400).json({
                message: error.message,
            })

        return res.status(500).json({
            message: "Internal server error.",
            serverMessage: error,
        })
    }
}

module.exports = {
    createQuestion,
    getQuestions,
    editQuestion,
    deleteQuestion,
}