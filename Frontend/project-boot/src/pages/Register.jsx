import { Link } from "react-router-dom";

export default function Register() {
  async function senden(e) {
    e.preventDefault();
    console.log("User anlegen");
    const form = new FormData(e.target);
    await fetch(import.meta.env.VITE_BACKEND + "/api/login", {
      method: "POST",
      body: form,
    });
  }

  return (
    <section className="register">
      <h1>User registrieren</h1>
      <form onSubmit={senden}>
        <label>Vorname</label>
        <input type="text" name="vorname" />
        <label>Nachname</label>
        <input type="text" name="nachname" />
        <label>Username/Mail</label>
        <input type="email" name="email" id="" />
        <label>password</label>
        <input type="password" name="password" />
        <input type="submit" value="Registrieren" />
      </form>

      <Link to="/login/user">LOG IN</Link>
    </section>
  );
}
