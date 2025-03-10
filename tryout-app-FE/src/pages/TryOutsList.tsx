import { Link } from "react-router-dom";
import { tryouts } from "../data/data";

function TryOutsList() {
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
              <Link to={`/tryOuts/${tryout.id}`} className="try-out">
                <div className="try-out-container">
                  <div className="try-out-container-general-info">
                    <h2>{tryout.judul}</h2>
                    <p>{tryout.mapel}</p>
                    <p>{tryout.tanggal_pelaksanaan}</p>
                    <p id="detail">Click to see detail</p>
                  </div>
                  <div className="try-out-container-another-info">
                    <p>{tryout.waktu}</p>
                    <p>{tryout.jumlahSoal} Questions</p>
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
