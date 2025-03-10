import { data, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import TryOut from "../data/data";
import getDateString from "../utils/functions";

function TryOutsList() {
  const [tryouts, setTryOuts] = useState<TryOut []>([]);
  useEffect(() => {
    fetch("http://localhost:4000/tryOuts").then((response) => response.json())
    .then((data) => setTryOuts(data.tryOutList)).catch((error) => console.error("Error mengambil data: ", error))
  }, [])
  console.log("tryoutlist =", tryouts)
  
  return (
    <>
      <header className="header">
        <nav>
          <Link to={"/"} className="try-outs">
            <h1>Try Outs</h1>
          </Link>

          <div className="cud">
            <a href="">Create</a>
          </div>
        </nav>
      </header>

      <main className="main">
        <div className="daftar-try-out">
          <h1>Daftar Try Out:</h1>
          {tryouts.map((tryout) => (
            <>
              {console.log(tryout)}
              <Link to={`/tryOuts/${tryout.id}`} className="try-out">
                <div className="try-out-container">
                  <div className="try-out-container-general-info">
                    <h2>{tryout.judul}</h2>
                    <p>{tryout.mapel}</p>
                    <p>{getDateString(tryout.tanggal_dilaksanakan)}</p>
                    <p id="detail">Click to see detail</p>
                  </div>
                  <div className="try-out-container-another-info">
                    <p>{tryout.waktu_pelaksanaan}</p>
                    <p>{`${tryout.jumlah_soal}`} Questions</p>
                  </div>
                </div>
              </Link>
            </>
          ))}
        </div>
      </main>

      <footer>
        <h4>Try Out platform</h4>
      </footer>
    </>
  );
}

export default TryOutsList;
