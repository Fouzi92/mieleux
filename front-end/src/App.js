import { BrowserRouter, Route, Routes } from "react-router-dom";
import Accueil from "./pages/Accueil";
import BonneJourner from "./pages/BonneJourner";
import Chom from "./pages/Chom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/accueil" element={<Accueil />} />
        <Route path="/chom" element={<Chom />} />
        <Route path="/bonne" element={<BonneJourner />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
