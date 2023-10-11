import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./components/Home";
import Projects from "./components/Projects";

function App() {
  return (
        <>
      
          <div>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/Projects" element={<Projects />} />
            </Routes>
          </div>
        </>
  );
}

export default App;
