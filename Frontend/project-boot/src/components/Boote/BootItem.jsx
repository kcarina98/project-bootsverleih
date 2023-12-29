import { useEffect, useState } from "react";
import "../css/BootItem.css";
import { Link } from "react-router-dom";

export default function BootItem({ newBoot }) {
  const [refresh, setRefresh] = useState(false);

  useEffect(() => {
    fetch(import.meta.env.VITE_BACKEND + "/api/boote/" + newBoot._id).then(
      (response) => response.json().then((data) => console.log(data))
    );
  }, [refresh]);

  return (
    <Link className="boot-item" to={`/boote/${newBoot._id}`}>
      <div>
        <img
          className="boot-img"
          src={import.meta.env.VITE_BACKEND + "/" + newBoot.imgUrl}
          alt="Bild vom Boot"
        />
      </div>
      <h3>{newBoot.art}</h3>
    </Link>
  );
}
