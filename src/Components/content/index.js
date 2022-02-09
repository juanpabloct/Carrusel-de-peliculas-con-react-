import { useEffect, useState } from "react";

import "./content.css";

async function ConsumirApi(api) {
  const res = await fetch(`${api}`);
  const data = await res.json();
  return data;
}

export default function Content(props) {
  const { pelicula, url } = props;
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [contador, setContador] = useState(0);
  useEffect(() => {
    const run = async () => {
      setLoading(true);
      const valores = await ConsumirApi(
        `${url}${pelicula ? pelicula : "123123"}`
      );
      setLoading(false);
      setData(valores.Search);
    };
    run();
  }, [pelicula, url]);
  if (loading) return <div>Cargando...</div>;
  if (!loading && !data?.length) {
    return (
      <div className="resultados">
        <h3>Busqueda: {pelicula}</h3>
        {pelicula}
      </div>
    );
  }
  return (
    <div className="c-content">
      <div className="carousel">
        {data?.map((pelicula, i) => (
          <div
            key={pelicula.imdbID}
            className={"contenedor " + (i === contador && "show")}
          >
            <img src={pelicula.Poster} alt={pelicula.Title} />
            <h3>{pelicula.Title}</h3>
          </div>
        ))}
      </div>
      <div className="botones">
        <svg
          width="40"
          height="30"
          viewBox="0 0 24 24"
          fill="white"
          className="atras"
          onClick={() => {
            if (contador) {
              setContador(contador - 1);
              if (contador < 0) {
                setContador(0);
              }
            }
          }}
        >
          <path d="M18.5,4.14L19.5,5.86L8.97,12L19.5,18.14L18.5,19.86L5,12L18.5,4.14Z" />
        </svg>
        <svg
          width="40"
          height="30"
          viewBox="0 0 24 24"
          fill="white"
          className="adelante"
          onClick={() => {
            if (contador >= data.length - 1) {
              setContador(0);
            } else {
              setContador(contador + 1);
              console.log(contador);
            }
          }}
        >
          <path d="M5.5,4.14L4.5,5.86L15,12L4.5,18.14L5.5,19.86L19,12L5.5,4.14Z" />
        </svg>
      </div>
    </div>
  );
}
