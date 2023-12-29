import "../css/AddBoot.css";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function EditBoot() {
  const [detailBoot, setDetailBoot] = useState(null);
  const { id } = useParams();

  async function updateBoot(e) {
    e.preventDefault();
    const form = new FormData(e.target);
    await fetch(import.meta.env.VITE_BACKEND + "/api/boote/" + id, {
      method: "PUT",
      body: form,
    });
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
        <h1 className="form-headline">BOOT BEARBEITEN</h1>
        <form className="boot-form" onSubmit={updateBoot}>
          <div>
            <label htmlFor="">Baujahr</label>
            <input
              type="number"
              min={1900}
              max={2023}
              required
              name="baujahr"
              defaultValue={detailBoot.baujahr}
            />
          </div>
          <div>
            <label htmlFor="">Seriennummer</label>
            <input
              type="number"
              min={0}
              required
              name="seriennr"
              defaultValue={detailBoot.seriennr}
            />
          </div>
          <div>
            <label htmlFor="">Material</label>
            <select
              id=""
              required
              name="material"
              defaultValue={detailBoot.material}
            >
              <option value="GFK">GFK</option>
              <option value="Holz">Holz</option>
              <option value="Metall">Metall</option>
              <option value="Pappe">Pappe</option>
              <option value="Seelen">Seelen</option>
            </select>
          </div>
          <div>
            <label htmlFor="">Bootsart</label>
            <select name="art" id="" required defaultValue={detailBoot.art}>
              <option value="Tretboot">Tretboot</option>
              <option value="Segelboot">Segelboot</option>
              <option value="Luftkissenboot">Luftkissenboot</option>
              <option value="Geisterschiff">Geisterschiff</option>
              <option value="Containerschiff">Containerschiff</option>
            </select>
          </div>
          <div>
            <label htmlFor="">Bild vom Boot</label>
            <input type="file" name="img" id="" />
          </div>
          <input
            className="button"
            type="submit"
            value="Änderungen speichern"
          />
        </form>
      </>
    );
  }
}
