import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState } from "react";
import CardInfo from './Component/CardInfo'
import NavBar from './Component/Nav'
import Main from './Component/Main'
import Input from './Component/Input'
import {  BrowserRouter,Routes,Route } from 'react-router-dom';
import Trailer from './Component/Trailer'



function App() {
  const [movies, setMovies] = useState(CardInfo);
  const [myInput, setMyInput] = useState("");

  return (

   
<BrowserRouter>
      <div className="App">
    
        <div>

          <NavBar />
        </div>
      
        <div>
          <Input setMyInput={setMyInput} />

        </div>
        
        <div>
        <Routes>
          
      
      
            <Route   path="/"    element={<Main
              movies={movies.filter(
                (el) =>
                  el.titre.toLowerCase().includes(myInput.toLowerCase().trim()))} exact />} />
            
           

            
            
          </Routes>
         
          <Routes>
         <Route path='/Trailer/:100' element = { <Trailer CardInfo={CardInfo.find(pid => pid.id=101)}/>} />   
        </Routes>
         
       
         
       
        </div>
      </div>
      </BrowserRouter> 

  );
}

export default App;
