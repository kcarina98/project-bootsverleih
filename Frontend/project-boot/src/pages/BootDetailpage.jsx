import { useEffect, useState } from "react";
import { useParams, Link, NavLink } from "react-router-dom";
import "./css/Detailpage.css";

export default function BootDetailpage() {
  const [detailBoot, setDetailBoot] = useState(null);
  const { id } = useParams();

  async function deleteBoot() {
    console.log("Boot löschen");
    const response = await fetch(
      import.meta.env.VITE_BACKEND + "/api/boote/" + id,
      {
        method: "DELETE",
      }
    );
    if (response.ok) {
      console.log("hat geklappt");
    }
  }

  useEffect(() => {
    fetch(import.meta.env.VITE_BACKEND + "/api/boote/" + id)
      .then((response) => response.json())
      .then((data) => setDetailBoot(data[0]));
    console.log(detailBoot);
  }, []);

  console.log("Detailboot: ", detailBoot);

  if (detailBoot) {
    return (
      <>
        <h1>BOOT DETAILS</h1>
        <section className="detailpage">
          {detailBoot.imgUrl && (
            <img
              src={import.meta.env.VITE_BACKEND + "/" + detailBoot.imgUrl}
              alt=""
            />
          )}

          <div className="detailboot">
            <h2>{detailBoot.art}</h2>
            <p>
              Material: <span>{detailBoot.material}</span>{" "}
            </p>
            <p>
              Baujahr: <span>{detailBoot.baujahr}</span>{" "}
            </p>
            <p>
              Serien-Nummer: <span>{detailBoot.seriennr}</span>{" "}
            </p>
            <div className="detail-button">
              <button onClick={deleteBoot}>BOOT LÖSCHEN</button>
              <Link to={`/edit/${id}`}>BOOT BEARBEITEN</Link>
              <Link to="/boote">zurück</Link>
            </div>
          </div>
        </section>
      </>
    );
  } else {
    return <p>loading...</p>;
  }
}
