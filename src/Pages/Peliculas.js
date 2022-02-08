import Content from "../Components/content/content";
import Menu from "../Components/menu/menu";
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
    <>
      <Menu />
      <Content />;
    </>
  );
}
