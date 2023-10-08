import Header from "./components/home/layout/Header";
import { Routes, Route } from "react-router-dom";
import "./styles/app.scss";
import "./styles/header.scss";
import Home from "./components/home/Home";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
