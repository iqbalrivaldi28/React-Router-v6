import './App.css';
import Navigation from './components/Navigation';
import { Route, Routes, useRoutes } from 'react-router-dom';
import Home from './pages/Home';
import Cars from './pages/Cars';
import Contact from './pages/Contact';
import About from './pages/About';
import CarDetail from './pages/CarDetail';
import SecondCar from './pages/SecondCar';
import CarLayout from './CarLayout';
import CarsRoute from './CarsRoute';
import NotFound from './pages/NotFound';

function App() {

  // const elementUseRoutes = useRoutes([
  //   {
  //     path: '/',
  //     element: <Home />
  //   },
  //   {
  //     path: '/contact',
  //     element: <Contact />
  //   },
  //   {
  //     path: '/about',
  //     element: <About />
  //   },
  //   {
  //     path: '/cars',
  //     // element: <CarLayout />,
  //     children: [
  //       {
  //         index: true,
  //         element: <Cars />
  //       },
  //       {
  //         path: ':id',
  //         element: <CarDetail />
  //       },
  //       {
  //         path: 'second',
  //         element: <SecondCar />
  //       }
  //     ]

  //   }
  // ])

  return (
    <>
      <Navigation />
      {/* {elementUseRoutes} */}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />

        <Route path="/cars/*" element={<CarsRoute />} />
        <Route path='/*' element={<NotFound />} />
      </Routes>

      <Routes>
        <Route path='/about' element={<div>Render elemen lain</div>}></Route>
      </Routes>
    </>
  );
}

export default App;
