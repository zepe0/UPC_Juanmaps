import { Route, Routes } from "react-router-dom";
import Home from "../src/pages/Home";

import "./App.css";

function App() {
  return (
    <>
      <Routes>
        <Route index element={<Home />} />
        {/*       
        <Route path="/login" element={} />
        <Route path="/register" element={} />
         */}
      </Routes>
    </>
  );
}

export default App;
