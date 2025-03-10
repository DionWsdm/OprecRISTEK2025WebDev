import { useParams } from "react-router";
import TryOut from "../data/data";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import popUpDeleteBox from "./TryOutDelete";
import getDateString from "../utils/functions";

function getTryOutInfo(tryOutId: number) {
  const [tryout, setTryOut] = useState<TryOut>();
  useEffect(() => {
    fetch(`http://localhost:4000/tryOuts/${tryOutId}`)
      .then((response) => response.json())
      .then((data) => setTryOut(data.tryOutDetail[0]))
      .catch((error) => console.error("Error mengambil data: ", error));
  }, []);
  if (!tryout)
    return (
      <>
        <h1>No Data</h1>
      </>
    );

  return (
    <>
      <div className="try-out-detail">
        <h1 className="judul">{tryout.judul}</h1>
        <div className="general-info">
          <p>Judul :{tryout.judul}</p>
          <p>Mata Pelajaran : {tryout.mapel}</p>
          <p>Tanggal dibuat : {getDateString(tryout.tanggal_dibuat)}</p>
          <p>Tanggal pelaksanaan : {getDateString(tryout.tanggal_dilaksanakan)}</p>
          <p>Waktu Pelaksanaan : {tryout.waktu_pelaksanaan}</p>
          <p>Jumlah Soal : {tryout.jumlah_soal}</p>
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

function TryOutDetail() {
  const tryOutId: string = useParams()["tryOutId"] || "";
  const [showPopUpDelete, setPopUpDelete] = useState(false);
  console.log("tryout id =", tryOutId);

  return (
    <>
      <header className="header">
        <nav>
          <Link to={"/"} className="try-outs">
            <h1>Try Outs</h1>
          </Link>

          <div className="cud">
            <button onClick={() => setPopUpDelete(true)}>Delete</button>
          </div>
        </nav>
      </header>
      {getTryOutInfo(parseInt(tryOutId))}
      {showPopUpDelete && popUpDeleteBox(showPopUpDelete, setPopUpDelete)}
    </>
  );
}

export default TryOutDetail;
