import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './components/public/Navbar';
import Login from './components/public/Login';







function App() {
  return (
    <div>
     <BrowserRouter>
     <Routes>
      <Route path='/' element={<Navbar/>}/>
      <Route path='/Login' element={<Login/>}/>
     </Routes>
     </BrowserRouter>
      
    </div>
  );
}

export default App;
