import { useEffect, useState } from "react";
import "./css/Landingpage.css";

export default function Landingpage() {
  const [gesamteBoote, setGesamtBoote] = useState();
  const [gesamteReservierungen, setGesamtReservierung] = useState();

  useEffect(() => {
    fetch(import.meta.env.VITE_BACKEND + "/api/boote/").then((response) =>
      response.json().then((data) => setGesamtBoote(data))
    );
  }, []);

  useEffect(() => {
    fetch(import.meta.env.VITE_BACKEND + "/api/reservierungen/").then(
      (response) => response.json().then((data) => setGesamtReservierung(data))
    );
  }, []);

  if (gesamteBoote && gesamteReservierungen) {
    return (
      <main className="landingpage">
        <div>
          <p>Gesamtanzahl Boote</p>
          <h2>{gesamteBoote.length}</h2>
        </div>
        <div>
          <p>Aktuelle Reservierungen</p>
          <h2>{gesamteReservierungen.length}</h2>
        </div>
        <div>
          <p>Verfügbare Boote</p>
          <h2>0</h2>
        </div>
      </main>
    );
  }
}
