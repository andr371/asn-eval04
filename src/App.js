import { Route, Routes } from "react-router-dom";
import "./App.css";
import Inicio from "./pages/Inicio";
import CalcularFactorial from "./pages/CalcularFactorial";
import CalcularFactorial2 from "./pages/CalcularFactorial2";
import Navbar from "./pages/Navbar";

function App() {
  return (
    <div className="App">
        <Routes>
          <Route path="/" element={<Navbar />}>
            <Route path="/" element={<Inicio />}/>
            <Route path="/calcular-factorial-box-text" element={<CalcularFactorial />}/>
            <Route path="/calcular-factorial-select" element={<CalcularFactorial2 />}/>
          </Route>
        </Routes>
    </div>
  );
}

export default App;
