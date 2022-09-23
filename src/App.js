import "./App.css";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import ParseExcel from "./components/ParseExcel";
import GetRows from "./components/GetRows";
import GetHeaders from "./components/GetHeaders";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ParseExcel />} />
        <Route path="/parse-excel" element={<ParseExcel />} />
        <Route path="/get-rows" element={<GetRows />} />
        <Route path="/get-headers" element={<GetHeaders />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
