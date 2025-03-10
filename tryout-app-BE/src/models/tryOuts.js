const dbpool = require("../config/config.js")
const functions = require("../utils/functions.js")

const getListTryOut = () => {
    const SQLQuery = `SELECT * FROM tryouts`;
    return dbpool.execute(SQLQuery);
}

const getFilteredTryOuts = (query)=> {    
    let SQLQuery = `SELECT * FROM tryouts WHERE `;
    for(const key of Object.keys(query))
    {
        SQLQuery += `${key}='${query[key]}' AND `;
    }
    SQLQuery += `1`;
    return dbpool.execute(SQLQuery);
}

const getTryOutDetail = (tryOutId) => {
    const SQLQuery = `SELECT * FROM tryouts WHERE id=${tryOutId}`
    return dbpool.execute(SQLQuery);
}

const createTryOut = (body) => {
    const date = new Date();
    const SQLQuery = `  INSERT INTO tryouts (judul,mapel,tanggal_dibuat,tanggal_dilaksanakan,waktu_pelaksanaan,durasi_jam,jumlah_soal,jumlah_submisi) 
                        VALUE ('${body.judul}', '${body.mapel}', '${functions.getDateString(date)}', '${body.tanggal_dilaksanakan}', 
                        '${body.waktu_pelaksanaan}', ${body.durasi_jam},${body.jumlah_soal}, ${0})`
    return dbpool.execute(SQLQuery);
}

const editTryOut = async (body, tryOutId) => {
    const tryOutData = await getTryOutDetail(tryOutId);
    const tryOut = tryOutData[0][0];
    const SQLQuery = `  UPDATE tryouts SET judul='${body.judul || tryOut.judul}', mapel='${body.mapel || tryOut.mapel}', 
                        tanggal_dilaksanakan='${body.tanggal_dilaksanakan || functions.getDateString(tryOut.tanggal_dilaksanakan)}', 
                        waktu_pelaksanaan='${body.waktu_pelaksanaan || tryOut.waktu_pelaksanaan}', 
                        jumlah_soal=${body.jumlah_soal || tryOut.jumlah_soal} WHERE id=${tryOutId}`;
    return dbpool.execute(SQLQuery);
}

const deleteTryOut = (tryOutId) => {
    const SQLQuery = `DELETE FROM tryouts WHERE id=${tryOutId}`
    return dbpool.execute(SQLQuery);
}

module.exports = {
    getListTryOut,
    getTryOutDetail,
    createTryOut,
    editTryOut,
    deleteTryOut,
    getFilteredTryOuts,
}