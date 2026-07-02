import { BrowserRouter, Routes, Route } from "react-router-dom";
import ScrollToTop from "../components/layout/ScrollToTop";
import Home from "../pages/Home";

import NuevaColeccion from "../pages/NuevaColeccion";
import CampanaCue from "../pages/CampanaCue";
import Rebajas from "../pages/Rebajas";

function AppRouter() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        
        <Route
        path="/actualidad/nueva-coleccion"
        element={<NuevaColeccion />}
      />
       <Route
        path="/actualidad/campana-cue"
        element={<CampanaCue />}
      /> 

      <Route
        path="/actualidad/rebajas"
        element={<Rebajas />} 
      />
      </Routes>
    </BrowserRouter>
  );
}

export default AppRouter;