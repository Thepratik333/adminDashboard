import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
// import { IconType } from "react-icons";
import { AiFillFileText } from "react-icons/ai";
import {
    FaChartBar,
    FaChartLine,
    FaChartPie,
    FaGamepad,
    FaStopwatch,
} from "react-icons/fa";
import { HiMenuAlt4 } from "react-icons/hi";
import { IoIosPeople } from "react-icons/io";
import {
    RiCoupon3Fill,
    RiDashboardFill,
    RiShoppingBag3Fill,
} from "react-icons/ri";

import './dash.css'

function Dashboard() {

    const [showModal, setShowModal] = useState (false);
    const [phoneActive, setPhoneActive] = useState(
        window.innerWidth < 1100
    );

    const resizeHandler = () => {
        setPhoneActive(window.innerWidth < 1100);
      };
    
      useEffect(() => {
        window.addEventListener("resize", resizeHandler);
    
        return () => {
          window.removeEventListener("resize", resizeHandler);
        };
      }, []);
    

    return (
        <>
            {phoneActive && (
                <button id="hamburger" onClick={() => setShowModal(true)}>
                    <HiMenuAlt4 />
                </button>
            )}
            <aside 
            style={
                phoneActive
                  ? {
                      width: "20rem",
                      height: "100vh",
                      position: "fixed",
                      top: 0,
                      left: showModal ? "0" : "-20rem",
                      transition: "all 0.5s",
                    }
                  : {}
              }
            >
                {/* Sidebar */}
                <div className=" sidebar bg-white text-black flex flex-col justify-between h-full w-64">
                    {/* Logo */}
                    <div className="flex items-center justify-start h-16 bg-gray-200">
                        <span className="text-xl text-black px-4 py-[18px] font-semibold">Logo</span>
                    </div>

                    {/* Sidebar Links */}
                    <nav className="flex-1 ">
                        <h2 className=' m-4 text-[#808080]'>Dashboard</h2>
                        <ul className="space-y-2 mx-[20px] mt-[10px]">
                            <li><Link to="" className=" py-2 px-4 flex items-center hover:bg-gray-300 rounded-lg"><RiDashboardFill className=' mr-[4px]' />Dashboard</Link></li>
                            <li><Link to="/products" className=" py-2 px-4 hover:bg-gray-300 flex items-center rounded-lg"><RiShoppingBag3Fill className='mr-[4px]' />Products</Link></li>
                            <li><Link to="/customers" className=" py-2 px-4 hover:bg-gray-300 flex items-center rounded-lg"><IoIosPeople className='mr-[4px]' />Customers</Link></li>
                            <li><Link to="/transaction" className=" py-2 px-4 hover:bg-gray-300 flex items-center rounded-lg"><AiFillFileText className='mr-[4px]' />Transaction</Link></li>
                        </ul>
                        <h2 className=' m-4 text-[#808080]'>Charts</h2>
                        <ul className="space-y-2 mx-[20px] mt-[10px]">
                            <li><Link to="/barchart" className=" py-2 px-4 flex items-center hover:bg-gray-300 rounded-lg"><FaChartBar className=' mr-[4px]' />Bar</Link></li>
                            <li><Link to="/pie" className=" py-2 px-4 hover:bg-gray-300 flex items-center rounded-lg"><FaChartPie className='mr-[4px]' />Pie</Link></li>
                            <li><Link to="/line" className=" py-2 px-4 hover:bg-gray-300 flex items-center rounded-lg"><FaChartLine className='mr-[4px]' />Line</Link></li>
                        </ul>
                        <h2 className=' m-4 text-[#808080]'>Apps</h2>
                        <ul className="space-y-2 mx-[20px] mt-[10px]">
                            <li><Link to="/coupon" className=" py-2 px-4 flex items-center hover:bg-gray-300 rounded-lg"><RiCoupon3Fill className=' mr-[4px]' />Coupon</Link></li>
                            <li><Link to="/stopwatch" className=" py-2 px-4 hover:bg-gray-300 flex items-center rounded-lg"><FaStopwatch className='mr-[4px]' />StopWatch</Link></li>
                            <li><Link to="/Toss" className=" py-2 px-4 hover:bg-gray-300 flex items-center rounded-lg"><FaGamepad className='mr-[4px]' />Toss</Link></li>
                        </ul>
                    </nav>

                    {/* Sidebar Footer */}

                    {phoneActive && (
                        <button id="close-sidebar" onClick={() => setShowModal(false)}>
                            Close
                        </button>
                    )}
                </div>
            </aside>
        </>

    );
}

export default Dashboard;
