function popUpDeleteBox()
{
    return <>
    <div className="delete-box-container">
        <div className="delete-box-container-judul"><p>Are you sure?</p></div>
        <div className="delete-box-container-main">
            <p>Anda yakin ingin menghapus try out?<br />Klik Delete untuk menghapus try out.<br />Klik Cancel untuk membatalkan.</p>
            <div className="delete-box-container-buttons">
                <button className="delete-box-container-buttons-delete">Delete</button>
                <button className="delete-box-container-buttons-cancel">Cancel</button>
            </div>
        </div>
    </div>
    </>
}

export default popUpDeleteBox;