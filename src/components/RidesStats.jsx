// import React from "react";

// const RideStats = () => {
//   return (
//     <div className="relative w-64 h-32">
//       {/* Semi-circle border */}
//       <div className="absolute w-120 h-60 border-4 border-yellow-300 bottom-30 rotate-90 rounded-t-full overflow-hidden">
//         {/* Center line */}
//         <div className="absolute top-1/2 left-0 right-0 h-px bg-gray-300"></div>
        
//         {/* Land element - top center */}
//         <div className="absolute top-4 left-1/2 transform -translate-x-1/2 text-center">
//           <div className="text-gray-700 font-medium ">Land</div>
//           <div className="text-gray-900 font-bold text-xl">72 Rides</div>
//         </div>
        
//         {/* Water element - bottom left */}
//         <div className="absolute bottom-2 left-4 text-center">
//           <div className="text-gray-700 font-medium">Water</div>
//           <div className="text-gray-900 font-bold text-xl">54 Rides</div>
//         </div>
        
//         {/* Kids element - bottom right */}
//         <div className="absolute bottom-2 right-4 text-center">
//           <div className="text-gray-700 font-medium">Kids</div>
//           <div className="text-gray-900 font-bold text-xl">33 Rides</div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default RideStats;


// import React from "react";

// const RideStats = () => {
//   return (
//     <div className="relative h-64 w-32">
//       {/* Rotated semi-circle border (flat side on left) */}
//       <div className="absolute z-10 w-100 h-150 left-[-310px] border-90 bottom-[-180px] border-yellow-300 rounded-r-full overflow-hidden">
//         {/* Center line (vertical) */}
//         <div className="absolute left-1/2 top-0 bottom-0 w-px "></div>
        
//         {/* Land element - top right */}
//         <div className="absolute top-4 right-4 h-32 w-32 rounded-full z-50 border-8 border-yellow-300 bg-amber-50  items-center  text-center">
//           <div className="text-gray-700 font-medium">Land</div><br />
//           <div className="text-gray-900 font-bold text-xl">72 Rides</div>
//         </div>
        
//         {/* Water element - bottom right */}
//         <div className="absolute bottom-4 right-4 text-center">
//           <div className="text-gray-700 font-medium">Water</div>
//           <div className="text-gray-900 font-bold text-xl">54 Rides</div>
//         </div>
        
//         {/* Kids element - middle left (on the flat side) */}
//         <div className="absolute top-1/2 left-2 transform -translate-y-1/2 text-center">
//           <div className="text-gray-700 font-medium">Kids</div>
//           <div className="text-gray-900 font-bold text-xl">33 Rides</div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default RideStats;




// import { Umbrella, Ship, FerrisWheel } from "lucide-react"

// const RideStats = () => {
//   const categories = [
//     {
//       name: "Land",
//       count: 72,
//       icon: <FerrisWheel className="h-10 w-10 text-blue-800" />,
//       position: { top: "60px",right:"-200px" },
//     },
//     {
//       name: "Water",
//       count: 54,
//       icon: <Ship className="h-10 w-10 text-blue-800" />,
//       position: { top: "230px", left:"-200px"},
//     },
//     {
//       name: "Kids",
//       count: 35,
//       icon: <Umbrella className="h-10 w-10 text-blue-800" />,
//       position: { top: "390px" },
//     },
//   ]

//   return (
//     <div className="relative h-screen w-55 bg-navy-900 top-[-150px]">
//       {/* Semi-circular yellow band */}
//       <div className="absolute h-[600px] w-[550px] left-[-450px] border-[90px] border-yellow-300 rounded-r-full overflow-visible">
//         {categories.map((category, index) => (
//           <div key={index} className="absolute right-[-30px]" style={{ top: category.position.top }}>
//             <div className="relative top-[-80px] left-10">
//               <div className="bg-white h-34 w-34 rounded-full border-8 border-yellow-300 flex items-center justify-center shadow-md">
//                 {category.icon}
//               </div>
//               <div className="absolute left-[70px] top-1/2 -translate-y-1/2 text-left">
//                 <div className="text-gray-200 relative left-25 font-medium">{category.name}</div>
//                 <div className="bg-indigo-400 text-white text-sm px-5 py-[3px] relative left-25 flex rounded-full mt-1">
//                   {category.count} <div>Rides</div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   )
// }

// export default RideStats


import { Umbrella, Ship, FerrisWheel } from "lucide-react";

const RideStats = () => {
  return (
    <div className="relative h-screen w-50 bg-navy-900 flex items-center justify-center">
      {/* Semi-circular yellow arc - Shifted further left */}
      <div className="absolute h-[600px] w-[600px] left-[-510px] bottom-65 border-[90px] border-yellow-300 rounded-full clip-circle z-0"></div>

      {/* Land Ride */}
      <div className="absolute top-[-145px] left-[-150px] flex flex-col items-center">
        <div className="bg-white h-36 w-36 rounded-full border-8 border-yellow-300 flex hover:scale-105 items-center justify-center shadow-lg">
          <FerrisWheel className="h-16 w-16  text-blue-800" />
        </div>
        <div className="absolute top-5 left-[180px] text-left">
          <div className="text-gray-200 font-medium">Land</div>
          <div className="bg-indigo-400 text-white text-sm px-5 py-[3px] flex rounded-full mt-1">
            72 <span className="ml-1">Rides</span>
          </div>
        </div>
      </div>

      {/* Water Ride */}
      <div className="absolute top-[62px] left-[-29px] flex flex-col items-center">
        <div className="bg-white h-36 w-36 rounded-full border-8 border-yellow-300 flex items-center justify-center hover:scale-105 shadow-lg">
          <Ship className="h-16 w-16 text-blue-800" />
        </div>
        <div className="absolute top-10 left-[160px] text-left">
          <div className="text-gray-200 font-medium">Water</div>
          <div className="bg-indigo-400 text-white text-sm px-5 py-[3px] flex rounded-full mt-1">
            54 <span className="ml-1">Rides</span>
          </div>
        </div>
      </div>

      {/* Kids Ride */}
      <div className="absolute top-[290px] left-[-150px] flex flex-col items-center">
        <div className="bg-white h-36 w-36 rounded-full border-8 border-yellow-300 flex items-center hover:scale-105 justify-center shadow-lg">
          <Umbrella className="h-16 w-16 text-blue-800" />
        </div>
        <div className="absolute top-10 left-[180px] text-left">
          <div className="text-gray-200 font-medium">Kids</div>
          <div className="bg-indigo-400 text-white text-sm px-5 py-[3px] flex rounded-full mt-1">
            35 <span className="ml-1">Rides</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RideStats;
