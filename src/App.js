import "./App.css";
import Header from "./Pages/Shared/Header/Header";
import "bootstrap/dist/css/bootstrap.min.css";
import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home/Home/Home";
import Services from "./Pages/Home/Services/Services";
import Blog from "./Pages/Blog/Blog";

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/services" element={<Services></Services>}></Route>
        <Route path="/blog" element={<Blog></Blog>}></Route>
      </Routes>
    </div>
  );
}

export default App;
