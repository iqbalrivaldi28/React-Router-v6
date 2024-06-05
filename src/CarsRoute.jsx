import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Cars from './pages/Cars';
import CarDetail from './pages/CarDetail';
import SecondCar from './pages/SecondCar';
import CarLayout from './CarLayout';

const CarsRoute = () => {
  return (
    <Routes>
      <Route path="/" element={<CarLayout />}>
        <Route index element={<Cars />} />
        <Route path=":id" element={<CarDetail />} />
        <Route path="second" element={<SecondCar />} />
      </Route>
    </Routes>
  );
};

export default CarsRoute;
