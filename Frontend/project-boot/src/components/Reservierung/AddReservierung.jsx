import { useState, useEffect } from "react";

export default function AddReservierung() {
  const [gesamteBoote, setGesamtBoote] = useState();
  const [selfmadeValue, setSelfmadeValue] = useState();

  useEffect(() => {
    fetch(import.meta.env.VITE_BACKEND + "/api/boote/").then((response) =>
      response.json().then((data) => setGesamtBoote(data))
    );
  }, []);

  async function addReservierung(e) {
    e.preventDefault();
    const form = new FormData(e.target);
    await fetch(import.meta.env.VITE_BACKEND + "/api/reservierungen", {
      method: "POST",
      body: form,
    });
  }

  if (gesamteBoote) {
    return (
      <>
        <h1 className="form-headline">BOOT</h1>
        <form className="boot-form" onSubmit={addReservierung}>
          <div>
            <label htmlFor="">Startdatum</label>
            <input type="date" required name="start" />
          </div>
          <div>
            <label htmlFor="">Enddatum</label>
            <input type="date" required name="end" />
          </div>

          <div>
            <label htmlFor="">welches Boot?</label>
            <select name="boot" id="" className="welches-boot">
              {gesamteBoote?.map((elt) => {
                return <option value={elt._id}>{elt.art}</option>;
              })}
            </select>
          </div>
          <input className="button" type="submit" value="reservieren" />
        </form>
      </>
    );
  }
}
