import { motion } from "framer-motion";
import { useState } from "react";
import NavItem from "./NavItems";
import { div } from "framer-motion/client";
import { CiLocationOn } from "react-icons/ci";
import { BiSolidOffer } from "react-icons/bi";
import { TbHorseToy } from "react-icons/tb";
import { IoFastFoodOutline } from "react-icons/io5";
import { MdOutlineEmojiEvents } from "react-icons/md";
import { IoTicket } from "react-icons/io5";



const Navbar = () => {
  const [dropdownVisible, setDropdownVisible] = useState(false);

  const toggleDropdown = () => {
    setDropdownVisible(!dropdownVisible);
  };

  return ( 
         <>
          <div className="flex justify-center">
          <motion.div
      className="w-355  bg-white rounded-2xl h-17 relative flex justify-items-end top-6 z-10 py-4 px-8 shadow-lg"
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-6xl mx-auto flex items-center justify-items-start">
        <div className="w-40 flex justify-start relative left-[-110px]">
          <img
            src="https://wonderla.komquest.com/images/logo.svg"
            alt="Wonderla Logo"
            className="h-12 object-contain"
          />
        </div>

        <div className="flex items-center space-x-15">
          {/* Locations NavItem with Dropdown */}
          <div className="relative">
            <button
              onClick={toggleDropdown}
              className="font-extrabold text-gray-400 flex items-center"
            >
            <CiLocationOn className="text-xl text-gray-500 font-extrabold "/>
              LOCATIONS
            </button>

            {/* Dropdown Menu */}
            {dropdownVisible && (
              <motion.div
                className="absolute top-full left-0 mt-2 bg-white shadow-lg rounded-lg w-48"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
              >
                <ul className="py-2">
                  <li className="px-4 py-2 hover:bg-yellow-400 cursor-pointer">Bangalore</li>
                  <li className="px-4 py-2 hover:bg-yellow-400 cursor-pointer">Kochi</li>
                  <li className="px-4 py-2 hover:bg-yellow-400 cursor-pointer">Hyderabad</li>
                  <li className="px-4 py-2 hover:bg-yellow-400 cursor-pointer">Chennai</li>
                </ul>
              </motion.div>
            )}
          </div>


          <div className="flex items-center gap-1"><BiSolidOffer className="text-gray-400" /><h4 className="font-extrabold  text-gray-400 ">
          OFFERS</h4>
          </div>
          <div className="flex items-center gap-1"><TbHorseToy className="text-gray-400" /><h4 className="font-extrabold text-gray-400 ">
          RIDES</h4>
          </div>
          <div className="flex items-center gap-1"><IoFastFoodOutline  className="text-gray-400" /><h4 className="font-extrabold text-gray-400 ">
          RESTURANTS</h4>
          </div>
          <div className="flex items-center gap-1"><MdOutlineEmojiEvents className="text-gray-400" /><h4 className="font-extrabold text-gray-400 ">
          EVENTS</h4>
          </div>



          {/* <h4  className="font-extrabold text-gray-500 ">RIDES</h4>
          <h4  className="font-extrabold text-gray-500 ">RESTURANTS</h4>
          <h4  className="font-extrabold text-gray-500 ">EVENTS</h4> */}



          {/* <NavItem label="RIDES" />
          <NavItem label="RESTAURANTS" />
          <NavItem label="EVENTS" /> */}
          <button className="bg-yellow-300 h-10 flex w-30 justify-center text-blue-800 items-center text-[12px] font-extrabold py-1 px-2 rounded-[10px] relative left-29">BOOK TICKET
          <IoTicket className="relative gap-1"/>
          </button>
          <div className="text-blue-900 relative left-25">            
            <div className="w-8 h-1 bg-blue-900 mb-1"></div>
            <div className="w-8 h-1 bg-blue-900 mb-1"></div>
            <div className="w-8 h-1 bg-blue-900"></div>
        </div>
        </div>
      </div>
    </motion.div>

          </div>
         </>       
    
  );
};

export default Navbar;
