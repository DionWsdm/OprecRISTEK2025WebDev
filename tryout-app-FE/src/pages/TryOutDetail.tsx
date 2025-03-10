import { useParams } from "react-router";
import { tryouts } from "../data/data";
import { Link } from "react-router-dom";
import { useState } from "react";
import popUpDeleteBox from "./TryOutDelete";
import React from "react";

function getTryOutInfo(tryOutId: String) {
  for (let tryout of tryouts) {
    if (tryout.id == tryOutId) {
      return (
        <>
          <div className="try-out-detail">
            <h1 className="judul">{tryout.judul}</h1>
            <div className="general-info">
              <p>Judul :{tryout.judul}</p>
              <p>Mata Pelajaran : {tryout.mapel}</p>
              <p>Tanggal dibuat : {tryout.tanggal_dibuat}</p>
              <p>Tanggal pelaksanaan : {tryout.tanggal_pelaksanaan}</p>
              <p>Waktu Pelaksanaan : {tryout.waktu}</p>
              <p>Jumlah Soal : {tryout.jumlahSoal}</p>
            </div>
            <div className="operations">
              <button>Edit</button>
            </div>
          </div>
          <div className="kerjakan">
            <p>Try out belum dimulai!</p>
            <p>Dimulai dalam: </p>
            <button>Kerjakan</button>
          </div>
        </>
      );
    }
  }
}

function TryOutDetail() {
  const [showPopUpDelete, setPopUpDelete] = useState(false)
    const tryOutId: string = useParams()["tryOutId"] || "";
    const handleClick = (event: React.MouseEvent) => {
      console.log(event);
    }


    return (
    <>
        <header className="header">
        <nav>
          <Link to={"/"} className="try-outs">
            <h1>Try Outs</h1>
          </Link>

          <div className="cud">
            <button onClick={(event) => setPopUpDelete(true)}>Delete</button>
          </div>
        </nav>
        </header>
        {getTryOutInfo(tryOutId)}
        {showPopUpDelete && popUpDeleteBox()}
    </>
    );
}

export default TryOutDetail;
