import './App.css';
import { BrowserRouter, Route, Routes} from 'react-router-dom';
import Register from './pages/register';
import Login from './pages/login';
import React from 'react';
import Home from './pages/Dashboard/home.tsx';

export default function App() {


  return (
   
    <div className="App bg-transparent">
       <BrowserRouter >
          <Routes>
        <Route path='/' Component={Login} > </Route>
        <Route path='pages/register'  Component={Register}></Route>
        
        <Route path='pages/Dashboard' Component={Home}></Route>
    </Routes>
       </BrowserRouter>
</div>
   

  );
}

