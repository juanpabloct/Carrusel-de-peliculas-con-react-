import "./series.css";

export default function Series() {
  const data = [
    { tipo: "Pelicula", nombre: "Jhon wick", genero: "accion", año: "2018" },
    {
      tipo: "Serie",
      nombre: "La casa de carton",
      genero: "accion",
      año: "2021",
    },
  ];
  return (
    <div className="series">
      <div>1</div>
      <div>2</div>
      <div>3</div>
      <div>4</div>
    </div>
  );
}
