import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Search from './components/Search';
import Signin from './components/Signin';
import Registration from './components/Registration';
import Home from './components/Home';
import App from './App'
//import { Home } from './components/Home';
export default function Routing(){
    return(
        <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route path="/" element={<Home />} />
          <Route path="/Home" element={<Home />} />
          <Route path="/Search" element={<Search />} />
          <Route path="/Signin" element={<Signin />} />
          <Route path="/Registration" element={<Registration/>} />
        </Route>
      </Routes>

    </BrowserRouter>
  </React.StrictMode>
    );

}