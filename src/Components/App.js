import React from 'react';
import logo from './logo.svg';
import './App.css';
import Calendar from 'react-calendar';
import Home from '../Components/Home/Home';


function App() {

  // const carQuery = new CarQuery();
  // carQuery.getMakes(2018)
  //   .then(makes => {
      
  //   });

  return (
    
    <div className="App">
      <body>
        <h1>Hello </h1>
        <Home />
        <Calendar />
      </body>
    </div>
  );
}

export default App;
