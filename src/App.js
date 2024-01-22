import { BrowserRouter } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route element={<DogList />} path="/" />
        <Route element={<DogDetails />} path="/dogs/:name" />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
