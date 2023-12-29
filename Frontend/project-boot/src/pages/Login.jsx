import { useState } from "react";

export default function Login() {
  const [user, setUser] = useState(null);
  const [userpassword, setPassword] = useState(null);

  const base64encodedData = Buffer.from(`${email}:${password}`).toString(
    "base64"
  );

  async function senden(e) {
    e.preventDefault();
    console.log("User anmelden");
    const form = new FormData(e.target);
    await fetch(import.meta.env.VITE_BACKEND + "/api/login/user", {
      method: "POST",
      body: form,
      Authorization: `Basic ${base64encodedData}`,
    });
  }

  //   console.log(user, password);

  return (
    <>
      <form onSubmit={senden}>
        <label htmlFor="">Username</label>
        <input type="email" name="email" />
        <label htmlFor="">password</label>
        <input type="password" name="password" />
        <input type="submit" value="log in" />
      </form>
    </>
  );
}
