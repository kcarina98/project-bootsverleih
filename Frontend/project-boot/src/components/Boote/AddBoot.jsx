import "../css/AddBoot.css";

export default function AddBoot() {
  async function addBoot(e) {
    e.preventDefault();
    const form = new FormData(e.target);
    await fetch(import.meta.env.VITE_BACKEND + "/api/boote", {
      method: "POST",
      body: form,
    });
  }

  return (
    <>
      <h1 className="form-headline">BOOT ANLEGEN</h1>
      <form className="boot-form" onSubmit={addBoot}>
        <div>
          <label htmlFor="">Baujahr</label>
          <input type="number" min={1900} max={2023} required name="baujahr" />
        </div>
        <div>
          <label htmlFor="">Seriennummer</label>
          <input type="number" min={0} required name="seriennr" />
        </div>
        <div>
          <label htmlFor="">Material</label>
          <select id="" required name="material">
            <option value="GFK">GFK</option>
            <option value="Holz">Holz</option>
            <option value="Metall">Metall</option>
            <option value="Pappe">Pappe</option>
            <option value="Seelen">Seelen</option>
          </select>
        </div>
        <div>
          <label htmlFor="">Bootsart</label>
          <select name="art" id="" required>
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
        <input className="button" type="submit" />
      </form>
    </>
  );
}
