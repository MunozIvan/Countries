import "./App.css"
import {Routes, Route} from "react-router-dom"
import Landing from "./components/Landing/Landing";
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";
import Detail from "./components/Detail/Detail";
import Activities from "./components/Activities/Activities";


function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route exact path={"/"} element={<Landing/>}/>
        <Route exact path={"/home"} element={<Home/>}/>
        <Route exact path={"/countries/:id"} element={<Detail/>}/>
        <Route exact path={"/activities"} element={<Activities/>}/>
      </Routes>
    </div>
  );
}

export default App;
