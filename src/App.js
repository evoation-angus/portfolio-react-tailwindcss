
import "./App.css";
import Navbar from "./Nav.js";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Home from "./components/Home/Home"
import Playground from "./components/Playground/Playground";
import Courses from "./components/Courses/Courses";
import Projects from "./components/Projects/Projects";

function App() {
  return (
    <div id="app" className="App">
      <div className="bg-slate-100 dark:bg-neutral-900">
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route element={<Home/>} path="/" ></Route>
            <Route element={<Playground/>} path="/playground" ></Route>
            <Route element={<Projects/>} path="/projects" ></Route>
            <Route element={<Courses/>} path="/courses" ></Route>
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
