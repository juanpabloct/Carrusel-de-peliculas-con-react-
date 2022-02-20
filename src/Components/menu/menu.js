import { Link } from "react-router-dom";
import { useState } from "react";

import "./menu.css";

export default function Menu({ onChange }) {
  const menu = [{ nombre: "Inicio", url: "/" }];
  const [entrada, setEntrada] = useState("");
  const buscador = (
    <div id="buscador">
      <form onSubmit={(e) => e.preventDefault()}>
        <input type="search" onChange={(e) => setEntrada(e.target.value)} />
        <button
          type="submit"
          onClick={() => {
            onChange((value) => entrada);
          }}
        >
          Buscar
        </button>
      </form>
    </div>
  );
  return (
    <div className="c-menu">
      {menu.map((value, i) => (
        <Link to={value.url} key={i}>
          {value.nombre}
        </Link>
      ))}
      {buscador}
      <Link to="/series">Series</Link>
    </div>
  );
}
