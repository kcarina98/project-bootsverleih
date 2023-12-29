import { useEffect, useState } from "react";
import "../css/BootItem.css";
import { Link } from "react-router-dom";

export default function ReservierungItem({ newReservierung }) {
  const [refresh, setRefresh] = useState(false);

  useEffect(() => {
    fetch(
      import.meta.env.VITE_BACKEND +
        "/api/reservierungen/" +
        newReservierung._id
    ).then((response) => response.json().then((data) => console.log(data)));
  }, [refresh]);

  return (
    <div className="reservierung-list">
      <Link to={`/reservierungen/${newReservierung._id}`}>
        <h3>
          {newReservierung.start} - {newReservierung.end} Art des Bootes:{" "}
        </h3>
      </Link>
    </div>
  );
}
