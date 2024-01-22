import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import DogList from './DogList';
import DogDetails from './DogDetails';
import Nav from './Nav';

async function App() {
  const dogData = await makeRequest();
  console.log("Dog data in App", dogData)
  // const arrObj=[{a:"a", b:"b"}, {a:"a", b:"b"}]

  return (
    <BrowserRouter>
      <Nav dogs={1}/>
      <Routes>
        <Route element={<DogList dogs={1}/>} path="/dogs" />
        <Route element={<DogDetails />} path="/dogs/:name" />
      </Routes>
    </BrowserRouter>
  );
}

async function makeRequest(){
  const response = await fetch(`http://localhost:5001/dogs`);
  const dogData = await response.json();

  console.log("DogData:", dogData)
  return dogData;
}

export default App;
