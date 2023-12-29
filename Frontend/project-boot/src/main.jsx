import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import BootList from "./components/Boote/BootList.jsx";
import ReservierungList from "./components/Reservierung/ReservierungList.jsx";
import Navbar from "./components/navbar";
import BootDetailpage from "./pages/BootDetailpage.jsx";
import ReservierungDetailpage from "./pages/ReservierungDetailpage.jsx";
import AddBoot from "./components/Boote/AddBoot.jsx";
import AddReservierung from "./components/Reservierung/AddReservierung.jsx";
import EditBoot from "./components/Boote/EditBoot.jsx";
import Register from "./pages/Register.jsx";
import Login from "./pages/Login.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/login" element={<Register />} />
        <Route path="/login/user" element={<Login />} />
        <Route path="/boote" element={<BootList />} />
        <Route path="/bootform" element={<AddBoot />} />
        <Route path="/reservierungen" element={<ReservierungList />} />
        <Route path="/reservierungform" element={<AddReservierung />} />
        <Route path="/boote/:id" element={<BootDetailpage />} />
        //* Detailpage
        <Route path="/edit/:id" element={<EditBoot />} /> //* Detailpage
        <Route
          path="/reservierungen/:id"
          element={<ReservierungDetailpage />}
        />
        //*Detailpage Reservierung
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
