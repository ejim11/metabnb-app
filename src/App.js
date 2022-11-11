import Layout from "./components/Layout/Layout";
import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import PlaceToStay from "./Pages/PlaceToStay";
import "./App.scss";

function App() {
  return (
    <div className="App">
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/place-to-stay" element={<PlaceToStay />} />
        </Routes>
      </Layout>
    </div>
  );
}

export default App;
