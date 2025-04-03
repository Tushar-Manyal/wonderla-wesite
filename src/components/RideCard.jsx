// const RideCard = ({ ride }) => {
//     return (
//       <div className="w-64 bg-gray-800 rounded-lg overflow-hidden">
//         <img src={ride.image} alt={ride.title} className="w-full h-48 object-cover" />
//         <div className="p-4">
//           <h3 className="text-white text-xl font-bold">{ride.title}</h3>
//           <p className="text-white text-sm">{ride.location}</p>
//           <p className="text-gray-300 text-sm mt-2">{ride.description}</p>
//           <button className="mt-4 bg-yellow-400 text-blue-900 py-2 px-4 rounded-md text-sm">RIDE DETAILS</button>
//         </div>
//       </div>
//     );
//   };
  
//   export default RideCard;

// import { motion } from "framer-motion";
// import RideCard from "./RideCard";

// const RidesSection = ({ visibleRides }) => {
//   return (
//     <div className="flex justify-center space-x-4 mb-8">
//       {visibleRides.map((ride) => (
//         <motion.div
//           key={ride.id}
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           transition={{ duration: 0.5 }}
//         >
//           <RideCard ride={ride} />
//         </motion.div>
//       ))}
//     </div>
//   );
// };

// export default RidesSection;


// const RideCard = ({ ride }) => {
//     return (
//       <div className="relative w-full max-w-xs bg-white rounded-lg shadow-lg overflow-hidden">
//         <div className="relative">
//           <img 
//             src={ride.image} 
//             alt={ride.title} 
//             className="w-full h-60 object-cover"
//           />
//           <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
//         </div>
//         <div className="p-4">
//           <h3 className="text-lg font-bold text-white">{ride.title}</h3>
//           <p className="text-gray-300">{ride.description}</p>
//         </div>
//       </div>
//     );
//   };
  
//   export default RideCard;

// const RideCard = ({ ride }) => {
//     return (
//       <div className="relative w-full max-w-xs rounded-lg overflow-hidden shadow-lg">
//         <div className="relative w-full h-72">
//           <img 
//             src={ride.image} 
//             alt={ride.title} 
//             className="absolute inset-0 w-full h-full object-cover"
//           />
//           <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
//         </div>
//         <div className="absolute bottom-0 p-4 w-full text-white">
//           <h3 className="text-lg font-bold">{ride.title}</h3>
//           <p className="text-gray-300">{ride.description}</p>
//         </div>
//       </div>
//     );
//   };
  
//   export default RideCard;



// const RideCard = ({ ride }) => {
//     return (
//       <div className="relative w-full max-w-xs rounded-lg overflow-hidden shadow-lg">
//         <div className="relative w-full h-90">
//           <img 
//             src={ride.image} 
//             alt={ride.title} 
//             className="absolute inset-0 w-full h-full object-cover"
//           />
//           <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
//         </div>
//         <div className="absolute bottom-0 p-4 w-full text-white">
//           <h3 className="text-lg font-bold">{ride.title}</h3>
//           <p className="text-gray-300">{ride.description}</p>
//           <button className="mt-2 bg-yellow-400 text-blue-900 py-2 px-4 rounded-md text-sm font-bold hover:bg-yellow-300 transition-colors">
//             Ride Details
//           </button>
//         </div>
//       </div>
//     );
//   };
  
//   export default RideCard;



import { motion } from "framer-motion";

const RideCard = ({ ride }) => {
  return (
    <motion.div
      className="relative w-full max-w-xs rounded-t-4xl overflow-hidden  cursor-pointer"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      <div className="relative w-full gap-7 h-85">
        <img 
          src={ride.image} 
          alt={ride.title} 
          className="absolute inset-0 w-full h-full object-cover transition-transform duration-300 hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#22304A] via-transparent to-transparent"></div>
        {/* <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#22304A]"></div> */}
      </div>
      <div className="absolute bottom-0 p-4 w-full text-white">
        <h3 className="text-lg font-bold">{ride.title}</h3>
        <p className="text-gray-300">{ride.description}</p>
        <button className="h-10 w-40 mt-2 bg-yellow-300 text-blue-800 my-[-10px] py-2 px-4 rounded-md text-[13px] font-bold hover:scale-[1.h-5 transition-colors">
          RIDE DETAILS
        </button>
      </div>
    </motion.div>
  );
};

export default RideCard;

  
  
  

  