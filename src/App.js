import { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import './App.css';
import DogList from './DogList';
import DogDetails from './DogDetails';
import Nav from './Nav';

/** App for Dogs.
 *
 * Renders nav and routes after request is resolved.
 *
 * Props: None
 *
 * State:
 * -dogData: array of objects of dog data [{id, name, src, facts}, ...]
 *
 *  App -> {Nav, Routes}
 */
function App() {
  const [dogData, setDogData] = useState(null);

  async function makeRequest() {
    const response = await fetch(`http://localhost:5001/dogs`);
    const data = await response.json();
    setDogData(data);
  }

  if(dogData === null){
    makeRequest();
  };

  console.log('dogData state: ', dogData);
  //move to first if statement
  if(dogData === null){
    return <p>Loading...</p>
  }

  return (
    <BrowserRouter>
      <Nav dogs={dogData} />
      <Routes>
        <Route element={<DogList dogs={dogData} />} path="/dogs" />
        <Route element={<DogDetails dogs={dogData}/>} path="/dogs/:name" />
        <Route element={<Navigate to="/dogs"/>} path="*"/>
        <Route element={<Navigate to="/dogs"/>} path="/dogs/*"/>

      </Routes>
    </BrowserRouter>
  );
}

export default App;
