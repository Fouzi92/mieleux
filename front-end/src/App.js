import { BrowserRouter, Route, Routes } from "react-router-dom";
import Accueil from "./pages/Accueil";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/accueil" element={<Accueil />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
