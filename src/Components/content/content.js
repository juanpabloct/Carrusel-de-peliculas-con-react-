import { useEffect, useState } from "react";

import lessThan from "../../assets/img/less-than.svg";
import moreThan from "../../assets/img/more-than.svg";
import "./content.css";

async function ConsumirApi(api) {
  const res = await fetch(`${api}`);
  const data = await res.json();
  return data;
}

export default function Content(props) {
  const pelicula = props.pelicula;
  const url = props.url;
  const [data, setData] = useState([]);
  useEffect(() => {
    const run = async () => {
      const valores = await ConsumirApi(`${url}${pelicula}`);
      setData(valores.Search);
    };
    run();
  }, []);
  const busqueda = data
    ? data.map((pelicula) => (
        <div key={pelicula.imdbID} className="contenedor">
          <img src={pelicula.Poster} alt={data[0].Title} />
          <h3>{pelicula.Title}</h3>
        </div>
      ))
    : "";
  console.log(busqueda);
  return (
    <div className="c-content">
      <div className="carousel">{busqueda}</div>
      <div className="botones">
        <svg
          width="40"
          height="30"
          viewBox="0 0 24 24"
          fill="white"
          className="atras"
        >
          <path d="M18.5,4.14L19.5,5.86L8.97,12L19.5,18.14L18.5,19.86L5,12L18.5,4.14Z" />
        </svg>
        <svg
          width="40"
          height="30"
          viewBox="0 0 24 24"
          fill="white"
          className="adelante"
        >
          <path d="M5.5,4.14L4.5,5.86L15,12L4.5,18.14L5.5,19.86L19,12L5.5,4.14Z" />
        </svg>
      </div>
    </div>
  );
}
