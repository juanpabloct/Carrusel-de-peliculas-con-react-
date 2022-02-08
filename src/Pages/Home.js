import Menu from "../Components/menu/menu";
import Content from "../Components/content/content";
export default function Inicio() {
  return (
    <div>
      <Menu />
      <Content
        url={"http://www.omdbapi.com/?i=tt3896198&apikey=acd23471&s="}
        pelicula="Batman"
      />
    </div>
  );
}
