import "./menu.css";
import { Link } from "react-router-dom";
import { useState } from "react";
export default function Menu(props) {
  const menu = [{ nombre: "Inicio", url: "/" }];
  const [entrada, setEntrada] = useState("");
  console.log(entrada);
  return (
    <div className="c-menu">
      {menu.map((value, i) => (
        <div key={i} className="menu">
          {<Link to={value.url}>{value.nombre}</Link>}
          <div id="buscador">
            <form onSubmit={(e) => e.preventDefault()}>
              <input
                type="search"
                onChange={(e) => setEntrada(e.target.value)}
              />
              <input type="submit" />
            </form>
          </div>
        </div>
      ))}
    </div>
  );
}
