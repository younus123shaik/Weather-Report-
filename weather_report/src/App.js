
import "./App.css";
import AddCity from "./components/AddCity";
import Localcities from "./components/Localcities";
import UpdateCity from "./components/UpdateCity";
import Login from "./services/Login";
import Signup from "./services/Signup";

import UserAccout from "./services/UserAccout";
import Weatherapp from "./services/Weatherapp";
import { BrowserRouter, Route, Routes } from "react-router-dom"
function App() {


  return (
      <div>
        <BrowserRouter>
        <Routes>
          <Route path="/" element={<UserAccout/>}/>
          <Route path="/weatherapp" element={<Weatherapp/>}/>
          <Route path="/signup" element={<Signup/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/localcities" element={<Localcities/>}/>
          <Route path="/localcities/addcity" element={<AddCity/>}/>
          <Route path="/localcities/updatecity/:city" element={<UpdateCity/>}/>
        </Routes>
        </BrowserRouter>
        
      </div>
  );
}

export default App;
