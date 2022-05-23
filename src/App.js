import Inicio from "./Pages/Home";
import Series from "./Pages/Series";

import { BrowserRouter, Routes, Route } from "react-router-dom";
//Importar Componentes
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="/serie" element={<Series />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
