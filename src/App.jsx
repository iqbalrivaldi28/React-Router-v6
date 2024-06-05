import './App.css';
import Navigation from './components/Navigation';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Cars from './pages/Cars';
import Contact from './pages/Contact';
import About from './pages/About';
import CarDetail from './pages/CarDetail';
import SecondCar from './pages/SecondCar';
import CarLayout from './CarLayout';

function App() {
  return (
    <>
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />

        <Route path="/cars" element={<CarLayout />}>
          <Route index element={<Cars />} />
          <Route path="/cars/:id" element={<CarDetail />} />
          <Route path="/cars/second" element={<SecondCar />} />
        </Route>

      </Routes>
    </>
  );
}

export default App;
