const getDateString = (dateString: string) => {
    const [year, month, date] = dateString.substring(0, 10).split("-");
    return `${date}-${month}-${year}`
}

const deleteTryOut = () => {
    
}

export default getDateString