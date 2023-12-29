import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import "./css/Detailpage.css";

export default function ReservierungDetailpage(props) {
  const [detailReservierung, setDetailReservierung] = useState();
  const [detailBoot, setDetailBoot] = useState(null);
  const { id } = useParams();

  async function deleteReservierung() {
    console.log("Reservierung löschen");
    const response = await fetch(
      import.meta.env.VITE_BACKEND + "/api/reservierungen/" + id,
      {
        method: "DELETE",
      }
    );
    if (response.ok) {
      console.log("hat geklappt");
    }
  }

  useEffect(() => {
    fetch(import.meta.env.VITE_BACKEND + "/api/reservierungen/" + id)
      .then((response) => response.json())
      .then((data) => setDetailReservierung(data));
  }, []);

  useEffect(() => {
    console.log(detailReservierung);
    if (detailReservierung) {
      async function getBoot() {
        const response = await fetch(
          import.meta.env.VITE_BACKEND +
            "/api/boote/" +
            detailReservierung[0]?.boot
        );
        const data = await response.json();
        setDetailBoot(data);
      }
      getBoot();
    }
  }, [detailReservierung]);

  console.log(detailBoot);

  if (detailReservierung && detailBoot) {
    return (
      <>
        <section className="reservierung-details">
          <h1>RESERVIERUNG DETAILS</h1>
          <p className="middle">{detailReservierung.boot}</p>
          <p>{detailBoot.art}</p>
        </section>
        <div className="detail-button">
          <button onClick={deleteReservierung}>RESERVIERUNG LÖSCHEN</button>
          <Link to="/reservierungen">zurück</Link>
        </div>
      </>
    );
  } else {
    return <p>loading...</p>;
  }
}
