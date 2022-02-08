import "./menu.css";
import { Link } from "react-router-dom";
export default function Menu(props) {
  const menu = [
    { nombre: "Inicio", url: "/" },
    { nombre: "Series", url: "/series" },
    { nombre: "Peliculas", url: "/peliculas" },
  ];
  return (
    <div className="c-menu">
      {menu.map((value, i) => (
        <div key={i} className="menu">
          {<Link to={value.url}>{value.nombre}</Link>}
        </div>
      ))}
    </div>
  );
}
