import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./css/index.css";
import { Home, View, Update, Create } from "./screens";

type Props = {};
function App(props: Props) {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/view/:id" element={<View />} />
        <Route path="/update/:id" element={<Update />} />
        <Route path="/create" element={<Create />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
