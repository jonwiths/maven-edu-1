import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../../landing-page/footer/Footer';
import MNavbar from '../navbar/Navbar';
import MLeftbar from '../leftbar/MLeftbar';

const MentorLayout = () => {
  return (
    <>
      <MNavbar />
      <div className=" h-screen overflow-scroll w-full bg-gray-100 flex flex-col md:flex-row justify-between ">
        <MLeftbar />
        <div className="w-full max-w-[1000px] max-h-[91vh]  mx-auto md:p-4 p-0 ">
          <Outlet />
        </div>
      </div>
    </>
  );
};

export default MentorLayout;
