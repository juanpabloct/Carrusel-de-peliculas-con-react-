import { useEffect, useState } from "react";

//Styles
import "./content.css";

//Components
import ConsumirApi from "../../consumoApi/api";
import Carrusel from "../Plantilla carrusel/carrusel";
export default function Content(props) {
  const [populares, setAllPeliculas] = useState([]);
  const getMoviesPopulars = async (params) => {
    const res = await ConsumirApi(
      `https://api.themoviedb.org/3/${params}?api_key=d3df1de421b08d3663ba51b220113e54`
    );
    setAllPeliculas(res);
  };
  useEffect(() => {
    getMoviesPopulars("movie/popular");
  }, []);
  const estado = populares?.status;
  return (
    <div className="peliculasPopulares">
      {estado === 200 ? <Carrusel data={populares.data} /> : "No hay datos"}
    </div>
  );
}
