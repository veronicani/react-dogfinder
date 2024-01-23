import { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import DogList from './DogList';
import DogDetails from './DogDetails';
import Nav from './Nav';

function App() {
  const [dogData, setDogData] = useState(null);

  useEffect(() => {
    console.log("useEffect");
    async function makeRequest() {
      const response = await fetch(`http://localhost:5001/dogs`);
      const dogData = await response.json();
      console.log("dogData from fetch: ", dogData);
      setDogData(dogData);
    }
    makeRequest();
  }, []);

  console.log('dogData state: ', dogData);
  return (
    <BrowserRouter>
      <Nav dogs={dogData}/>
      <Routes>
        <Route element={<DogList dogs={dogData}/>} path="/dogs" />
        <Route element={<DogDetails />} path="/dogs/:name" />
      </Routes>
    </BrowserRouter>
  );
}

// async function makeRequest(){
//   const response = await fetch(`http://localhost:5001/dogs`);
//   const dogData = await response.json();

//   console.log("DogData:", dogData)
//   setDogData(dogData);
// }

export default App;
