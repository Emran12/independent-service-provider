import "./App.css";
import Header from "./Pages/Shared/Header/Header";
import "bootstrap/dist/css/bootstrap.min.css";
import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home/Home/Home";
import Services from "./Pages/Home/Services/Services";
import Blog from "./Pages/Blog/Blog";
import NotFound from "./Pages/Shared/NotFound/NotFound";
import About from "./Pages/About/About";
import SignIn from "./Pages/SignIn/SignIn/SignIn";
import SignUp from "./Pages/SignIn/SignUp/SignUp";
import RequireAuth from "./Pages/SignIn/RequireAuth/RequireAuth";
import ProceedOut from "./Pages/ProceedOut/ProceedOut";
import Greetings from "./Pages/Greetings/Greetings";

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/home" element={<Home></Home>}></Route>
        <Route path="/services" element={<Services></Services>}></Route>
        <Route path="/blog" element={<Blog></Blog>}></Route>
        <Route path="/about" element={<About></About>}></Route>
        <Route path="/signin" element={<SignIn></SignIn>}></Route>
        <Route path="/signup" element={<SignUp></SignUp>}></Route>
        <Route
          path="/proceedout"
          element={
            <RequireAuth>
              <ProceedOut></ProceedOut>
            </RequireAuth>
          }
        ></Route>
        <Route path="/greetings" element={<Greetings></Greetings>}></Route>
        <Route path="*" element={<NotFound></NotFound>}></Route>
      </Routes>
    </div>
  );
}

export default App;
