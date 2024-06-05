import React from 'react';
import { Navigate, useNavigate } from 'react-router-dom';

const NotFound = () => {
  const navigate = useNavigate();

  return (
    // <Navigate to= '/' />

    <>
      <div>Not Found</div>
      <button onClick={() => navigate('/')}>Back To Home</button>
    </>
  );
};

export default NotFound;

//? Note: penggunaan useNavigate itu untuk handle session login, jadi kalau waktu 60 menit dia diarahkan ke login lagi
