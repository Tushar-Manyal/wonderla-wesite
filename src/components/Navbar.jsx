// import NavItem from "./NavItems";

// const Navbar = () => {
//   return (
//     <div className="bg-white rounded-5xl py-4 px-8 shadow-md">
//       <div className="max-w-6xl mx-auto flex items-center justify-between">
//         <div className="w-40">
//           <img 
//             src="https://wonderla.komquest.com/images/logo.svg" 
//             alt="Wonderla Logo" 
//             className="h-12 object-contain"
//           />
//         </div>

//         <div className="flex items-center space-x-8">
//           <NavItem label="LOCATIONS" hasDropdown={true} />
//           <NavItem label="OFFERS" />
//           <NavItem label="RIDES" />
//           <NavItem label="RESTAURANTS" />
//           <NavItem label="EVENTS" />

//           <button className="bg-yellow-400 text-blue-900 font-bold py-2 px-4 rounded">
//             BOOK TICKETS
//           </button>

//           <div className="text-blue-900">
//             <div className="w-8 h-1 bg-blue-900 mb-1"></div>
//             <div className="w-8 h-1 bg-blue-900 mb-1"></div>
//             <div className="w-8 h-1 bg-blue-900"></div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Navbar;

// import NavItem from "./NavItems";

// const Navbar = () => {
//   return (
//     <div className="bg-white rounded-2xl relative top-6 z-10 py-4 px-8 shadow-lg ">
//       <div className="max-w-6xl mx-auto flex items-center justify-between">
//         <div className="w-40">
//           <img 
//             src="https://wonderla.komquest.com/images/logo.svg" 
//             alt="Wonderla Logo" 
//             className="h-12 object-contain"
//           />
//         </div>

//         <div className="flex items-center space-x-8">
//           <NavItem label="LOCATIONS" hasDropdown={true} />
//           <NavItem label="OFFERS" />
//           <NavItem label="RIDES" />
//           <NavItem label="RESTAURANTS" />
//           <NavItem label="EVENTS" />

//           <button className="bg-yellow-400 text-blue-900 font-bold py-2 px-4 rounded">
//             BOOK TICKETS
//           </button>

//           <div className="text-blue-900">
//             <div className="w-8 h-1 bg-blue-900 mb-1"></div>
//             <div className="w-8 h-1 bg-blue-900 mb-1"></div>
//             <div className="w-8 h-1 bg-blue-900"></div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Navbar;

////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// import { useState } from "react";
// import NavItem from "./NavItems";

// const Navbar = () => {
//   // State to handle dropdown visibility
//   const [showLocations, setShowLocations] = useState(false);
//   const [showOffers, setShowOffers] = useState(false);

//   // Toggle functions for Locations and Offers dropdowns
//   const toggleLocations = () => setShowLocations((prev) => !prev);
//   const toggleOffers = () => setShowOffers((prev) => !prev);

//   return (
//     <div className="bg-white rounded-2xl relative top-6 z-10 py-4 px-8 shadow-lg ">
//       <div className="max-w-6xl mx-auto flex items-center justify-between">
//         <div className="w-40">
//           <img 
//             src="https://wonderla.komquest.com/images/logo.svg" 
//             alt="Wonderla Logo" 
//             className="h-12 object-contain"
//           />
//         </div>

//         <div className="flex items-center space-x-8">
//           <div className="relative">
//             <NavItem 
//               label="LOCATIONS" 
//               hasDropdown={true} 
//               onClick={toggleLocations} // Toggle visibility on click
//             />
//             {showLocations && (
//               <div className="absolute bg-white shadow-lg mt-2 p-4 rounded-lg w-48">
//                 <p className="font-bold">Location Details:</p>
//                 <ul className="space-y-2">
//                   <li>Kochi</li>
//                   <li>Bengaluru</li>
//                   <li>Hyderabad</li>
//                   <li>Bhubaneswar</li>
//                 </ul>
//               </div>
//             )}
//           </div>

//           <div className="relative">
//             <NavItem 
//               label="OFFERS" 
//               onClick={toggleOffers} // Toggle visibility on click
//             />
//             {showOffers && (
//               <div className="absolute bg-white shadow-lg mt-2 p-4 rounded-lg w-48">
//                 <p className="font-bold">Special Offers:</p>
//                 <ul className="space-y-2">
//                   <li>20% off on ticket booking</li>
//                   <li>Free meals with rides</li>
//                   <li>Seasonal discounts</li>
//                 </ul>
//               </div>
//             )}
//           </div>

//           <NavItem label="RIDES" />
//           <NavItem label="RESTAURANTS" />
//           <NavItem label="EVENTS" />

//           <button className="bg-yellow-400 text-blue-900 font-bold py-2 px-4 rounded">
//             BOOK TICKETS
//           </button>

//           <div className="menu text-blue-900">
//             <div className="w-8 h-1 bg-blue-900 mb-1"></div>
//             <div className="w-8 h-1 bg-blue-900 mb-1"></div>
//             <div className="w-8 h-1 bg-blue-900"></div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Navbar;

/////////////////////////////////////////////////////////////////////////////////////correct


// import { useState } from "react";
// import NavItem from "./NavItems";

// const Navbar = () => {
//   const [isLocationsDropdownOpen, setIsLocationsDropdownOpen] = useState(false);

//   const handleDropdownToggle = () => {
//     setIsLocationsDropdownOpen((prevState) => !prevState);
//   };

//   return (
//     <div className="bg-white rounded-2xl relative top-6 z-10 py-4 px-8 shadow-lg">
//       <div className="max-w-6xl mx-auto flex items-center justify-between">
//         <div className="w-40">
//           <img
//             src="https://wonderla.komquest.com/images/logo.svg"
//             alt="Wonderla Logo"
//             className="h-12 object-contain"
//           />
//         </div>

//         <div className="flex items-center space-x-8">
//           {/* Location NavItem with dropdown */}
//           <div className="relative">
//             <button
//               onClick={handleDropdownToggle}
//               className="text-blue-900 font-semibold"
//             >
//               LOCATIONS
//             </button>
//             {isLocationsDropdownOpen && (
//               <div className="absolute top-full left-0 mt-2 bg-white text-blue-900 border border-gray-300 shadow-lg rounded-lg w-48">
//                 <ul className="p-2">
//                   <li className="hover:bg-yellow-400 p-2 cursor-pointer">Bangalore</li>
//                   <li className="hover:bg-yellow-400 p-2 cursor-pointer">Kochi</li>
//                   <li className="hover:bg-yellow-400 p-2 cursor-pointer">Hyderabad</li>
//                   <li className="hover:bg-yellow-400 p-2 cursor-pointer">Chennai</li>
//                 </ul>
//               </div>
//             )}
//           </div>

//           {/* Other NavItems */}
//           <NavItem label="OFFERS" />
//           <NavItem label="RIDES" />
//           <NavItem label="RESTAURANTS" />
//           <NavItem label="EVENTS" />

//           <button className="bg-yellow-400 text-blue-900 font-bold py-2 px-4 rounded">
//             BOOK TICKETS
//           </button>

//           {/* Menu Icon */}
//           <div className="text-blue-900">
//             <div className="w-8 h-1 bg-blue-900 mb-1"></div>
//             <div className="w-8 h-1 bg-blue-900 mb-1"></div>
//             <div className="w-8 h-1 bg-blue-900"></div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Navbar;


import { motion } from "framer-motion";
import { useState } from "react";
import NavItem from "./NavItems";

const Navbar = () => {
  const [dropdownVisible, setDropdownVisible] = useState(false);

  const toggleDropdown = () => {
    setDropdownVisible(!dropdownVisible);
  };

  return (
    <motion.div
      className="bg-white rounded-2xl relative top-6 z-10 py-4 px-8 shadow-lg"
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-6xl mx-auto flex items-center justify-between">
        <div className="w-40">
          <img
            src="https://wonderla.komquest.com/images/logo.svg"
            alt="Wonderla Logo"
            className="h-12 object-contain"
          />
        </div>

        <div className="flex items-center space-x-8">
          {/* Locations NavItem with Dropdown */}
          <div className="relative">
            <button
              onClick={toggleDropdown}
              className="font-bold text-blue-900"
            >
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

          <NavItem label="OFFERS" />
          <NavItem label="RIDES" />
          <NavItem label="RESTAURANTS" />
          <NavItem label="EVENTS" />
          <button className="bg-yellow-400 text-blue-900 font-bold py-2 px-4 rounded">
            BOOK TICKETS
          </button>
          <div className="text-blue-900">            
            <div className="w-8 h-1 bg-blue-900 mb-1"></div>
            <div className="w-8 h-1 bg-blue-900 mb-1"></div>
            <div className="w-8 h-1 bg-blue-900"></div>
        </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Navbar;
