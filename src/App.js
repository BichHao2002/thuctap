//import logo from './logo.svg';
//import './App.css';
import React from 'react';
import './App.css';
import './index.css';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Home from './pages/Home';
import Country from './pages/Country';
import Add from "./actions/Add";
import Edit from "./actions/Edit";



const App = () => {
  return (
    <div className='container-fluid'>
      <div className='row'>
          <BrowserRouter>
            <Sidebar>
              <Routes>
                  <Route path="/" element={<Home/>} /> 
                  <Route path="/home" element={<Home/>} />
                  <Route path="/country" element={<Country/>} /> 
                  <Route path="/create" element={<Add/>} /> 
                  <Route path="/edit" element={<Edit/>} />
              </Routes>
            </Sidebar>
          </BrowserRouter>
        </div>
    </div>
    
  );
};

export default App;
