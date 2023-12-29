import { Link } from "react-router-dom";
import BootItem from "./BootItem";
import { useEffect, useState } from "react";
import "../css/BootItem.css";

export default function BootList() {
  const [boote, setBoote] = useState([]);

  useEffect(() => {
    async function getBoote() {
      const response = await fetch(import.meta.env.VITE_BACKEND + "/api/boote");
      const data = await response.json();
      setBoote(data);
    }
    getBoote();
    console.log(boote);
  }, []);

  return (
    <section className="boot-section">
      <h1>ALLE BOOTE</h1>
      <Link className="addBoot" to="/bootform">
        Add Boot
      </Link>
      <section className="boot-list">
        {boote.map((newBoot) => (
          <BootItem newBoot={newBoot} key={newBoot._id} />
        ))}
      </section>
    </section>
  );
}
