const data = require("../config/config.js")
const tryOutsModels = require("../models/tryOuts.js");

const getListTryOut = async (req, res) => {
    const data = await tryOutsModels.getListTryOut();
    res.json({
        tryOutList: data[0],
    })
}

const getTryOutDetail = async (req, res) => {
    const data = await tryOutsModels.getTryOutDetail(req.params.tryOutId);
    res.json({
        tryOutDetail: data[0],
    })
}

const getFilteredTryOuts = async (req, res) => {
    const query = req.query;
    const data = await tryOutsModels.getFilteredTryOuts(query);
    // console.log(query);
    res.json({
        filteredTryOuts: data[0],
        // message: "OK",
    })
}

const createTryOut = async (req, res) => {
    try
    {
        await tryOutsModels.createTryOut(req.body);
        res.status(201).json({
            message: 'Berhasil membuat try out.',
            data: null,
        })
    }
    catch (error)
    {
        res.status(400).json({
            message: 'Error Brayy',
            serverMessage: error,
        })
    }
}

const editTryOut = async (req, res) => {
    const {tryOutId} = req.params;
    const changes = req.body;
    await tryOutsModels.editTryOut(changes, tryOutId);
    res.json({
        message: 'Berhasil mengedit try out.',
        data: req.body,
    })
}

const deleteTryOut = async (req, res) => {
    try
    {
        const {tryOutId} = req.params;
        await tryOutsModels.deleteTryOut(tryOutId)
        res.json({
            message: "Berhasil menghapus try out.",
            data: null
        })
    }
    catch (error)
    {
        res.json({
            message: "Error occured",
            serverMessage: error,
        })
    }
}

module.exports = {
    getListTryOut,
    getTryOutDetail,
    createTryOut,
    editTryOut,
    deleteTryOut,
    getFilteredTryOuts,
}