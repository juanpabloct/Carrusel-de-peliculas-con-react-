import Inicio from "./Pages/Home";
import Series from "./Pages/Series";
import Peliculas from "./Pages/Peliculas";

import { BrowserRouter, Routes, Route } from "react-router-dom";
//Importar Componentes
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="/series" element={<Series />} />
          <Route path="/peliculas" element={<Peliculas />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
