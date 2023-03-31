import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../navbar';

// basic layout
const Layout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
      <br />
      <br />
    </>
  );
};

export default Layout;
