import React from 'react';
import Navbar from '../Components/Navbar/Navbar';
import { Outlet } from 'react-router';
import Footer from '../Components/Footer/Footer';
import RouteChangeSpinner from '../Components/Spiners/Spiners';

const Root = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <main className="flex-grow">
      <RouteChangeSpinner></RouteChangeSpinner>
        <Outlet />
      </main>

      <Footer />
    </div>
  );
};

export default Root;
