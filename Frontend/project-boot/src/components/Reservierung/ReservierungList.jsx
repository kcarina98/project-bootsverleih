import { Link } from "react-router-dom";
import ReservierungItem from "./ReservierungItem";
import { useEffect, useState } from "react";
import "../css/BootItem.css";

export default function ReservierungList() {
  const [reservierungen, setReservierungen] = useState([]);

  useEffect(() => {
    async function getReservierungen() {
      const response = await fetch(
        import.meta.env.VITE_BACKEND + "/api/reservierungen"
      );
      const data = await response.json();
      setReservierungen(data);
    }
    getReservierungen();
    console.log(reservierungen);
  }, []);

  return (
    <section>
      <h1>ALLE RESERVIERUNGEN</h1>
      <Link className="addBoot" to="/reservierungform">
        Add Reservierung
      </Link>
      <section className="reservierung">
        {reservierungen.map((newReservierung) => (
          <ReservierungItem
            newReservierung={newReservierung}
            key={newReservierung._id}
          />
        ))}
      </section>
    </section>
  );
}
