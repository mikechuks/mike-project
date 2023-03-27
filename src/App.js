import Home from "./pages/home/Home";
import Update from "./pages/update/Update";
import Dashboard from "./pages/dashboard/Dashboard";
import Login from "./pages/login/Login";
import Registration from "./pages/registration/Registration";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Profile from "./pages/profile/profile";
import  AuthState  from "./context/AuthState";
import Navbar from "./component/navbar/Navbar";
import Viewad from "./pages/viewAd/Viewad";
import Edit from "./pages/edit/Edit";
import CoverDash from "./pages/coverdash/CoverDash";
function App() {
  return (
      <BrowserRouter>
      <AuthState>
      <Routes>
        <Route path="/" element={<Registration/>} />
        <Route path='/login' element={<Login/>} />
        <Route element={<CoverDash/>}> 
        <Route path='/profile' element={<Profile/>} />
        <Route path='/shop' element={<Dashboard/>} />
        <Route path='/settings' element={<Update/>} />
        <Route path='/createad' element={<Edit/>} />
        <Route path='/viewad' element={<Viewad/>} />
        <Route>404 Not Found</Route>
        </Route>
      </Routes>
      </AuthState>
  </BrowserRouter>
  );
}

export default App;
