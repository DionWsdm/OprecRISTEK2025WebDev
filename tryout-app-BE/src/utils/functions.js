const checkSubmission = async (tryOutId) => {
    const [[submission], dump] = await dbpool.execute(`SELECT jumlah_submisi FROM tryouts WHERE id=${tryOutId}`);
    return submission.jumlah_submisi
}

const getDateString = (dateString) => {
    return `${dateString.getFullYear()}-${dateString.getMonth()+1}-${dateString.getDate()}`;
}

module.exports = {
    getDateString,
    checkSubmission,
}