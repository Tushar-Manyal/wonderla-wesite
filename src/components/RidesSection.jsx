import { useState } from "react";
import RideCard from "./RideCard";
import CategoryButton from "./CategoryButton";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { motion } from "framer-motion";
import RideStats from "./RidesStats";


const ridesData = [
  { id: 1, title: "Sky Ring", location: "Kochi", description: "Shoot up a sky-high tower...", image: "https://i.ytimg.com/vi/yp3B7hdot_U/maxresdefault.jpg" },
  { id: 2, title: "Recoil", location: "Bengaluru", description: "India's first reverse looping roller coaster!", image: "https://www.godigit.com/content/dam/godigit/directportal/en/contenthm/amusement-park-hyderabad.jpg" },
  { id: 3, title: "Mission ", location: "Hyderabad", description: "Blast through cosmic chaos...", image: "https://images.moneycontrol.com/static-mcnews/2020/11/Wonderla-770x433.png?impolicy=website&width=770&height=431" },
  { id: 4, title: "Equinox", location: "Bhubaneswar", description: "A thrill monster that spins 360 degrees!", image: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/2e/2f/e1/d9/wonder-splash-at-wonderla.jpg?w=1200&h=-1&s=1" },
  { id: 5, title: "Flash Tower", location: "Chennai", description: "Drop from the sky at high speed!", image: "https://static.toiimg.com/thumb/msid-104712749,width-1280,height-720,resizemode-72/104712749.jpg" },
  { id: 6, title: "Tsunami", location: "Mumbai", description: "A thrilling water ride with massive waves!", image: "https://www.tripsavvy.com/thmb/ulwZBoKFl73KPgi4FfK4m6VR39s=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/Wonderlabang-57a87f395f9b58974a146c39.jpg" }
];

const RidesSection = () => {
    const [activeCategory, setActiveCategory] = useState('Land');
    const [currentIndex, setCurrentIndex] = useState(0);
    const itemsPerPage = 4;

    const handleNext = () => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % (ridesData.length - itemsPerPage + 1));
    };
  
    const handlePrev = () => {
      setCurrentIndex((prevIndex) => (prevIndex - 1 + ridesData.length - itemsPerPage + 1) % (ridesData.length - itemsPerPage + 1));
    };
    
    const visibleRides = ridesData.slice(currentIndex, currentIndex + itemsPerPage);
  
    return (
      <div className=" text-white p-4 relative overflow-hidden">
        {/* <div className="absolute top-0 left-0 w-1/3 h-full bg-yellow-300 rounded-r-full -z-10"></div> */}
        
        {/* Main content container */}
        <div className="max-w-6xl mx-auto ">
          {/* Heading */}
          
          <h2 className="text-6xl font-extrabold tracking-tight text-center relative left-[-38px] top-6 mb-5 mt-8">OUR ICONIC RIDES</h2>
          
          {/* Carousel Controls Positioned Below Navbar */}
          <div className="flex justify-end relative top-[-60px] left-32 mt-8 space-x-4">
            <motion.button 
              className="bg-yellow-300 p-4 rounded-full hover:bg-yellow-200 hover:scale-105 transition-colors"
              onClick={handlePrev}
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <ChevronLeft className="w-6 h-6 text-gray-800" />
            </motion.button>
            <motion.button 
              className="bg-yellow-300 p-4 rounded-full hover:bg-yellow-200 hover:scale-105 transition-colors"
              onClick={handleNext}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <ChevronRight className="w-6 h-6 text-gray-800" />
            </motion.button>
          </div>
          
          <div className="flex">
          <RideStats/>
            {/* Left sidebar for categories  */}
            {/* <div className="w-1/6 pr-10 h-5">
              <CategoryButton className=""
                icon={<svg viewBox="0 0 24 24" className="w-12 h-8 text-blue-700" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="12" cy="12" r="10" />
                  <path d="M12 2 L12 22 M2 12 L22 12" />
                </svg>}
                label="Land" 
                count="72" 
                isActive={activeCategory === 'Land'}
                onClick={() => setActiveCategory('Land')}
              />
              
              <CategoryButton 
                icon={<svg viewBox="0 0 24 24" className="w-12 h-12 text-blue-700" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M3 18c2.5 0 5-2 5-2s2.5 2 5 2 5-2 5-2 2.5 2 5 2" />
                  <path d="M3 12c2.5 0 5-2 5-2s2.5 2 5 2 5-2 5-2 2.5 2 5 2" />
                  <path d="M3 6c2.5 0 5-2 5-2s2.5 2 5 2 5-2 5-2 2.5 2 5 2" />
                </svg>}
                label="Water" 
                count="54" 
                isActive={activeCategory === 'Water'}
                onClick={() => setActiveCategory('Water')}
              />
              
              <CategoryButton 
                icon={<svg viewBox="0 0 24 24" className="w-12 h-12 text-blue-700" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="12" cy="5" r="3" />
                  <path d="M12 8 L12 16 M8 12 L16 12" />
                  <path d="M6 18 A6 6 0 0 0 18 18" />
                </svg>}
                label="Kids" 
                count="35" 
                isActive={activeCategory === 'Kids'}
                onClick={() => setActiveCategory('Kids')}
              />
            </div> */}
            
            {/* Right side for rides carousel */}
            <div className="w-29/30 left-30 mx-[-40px]  relative">
              <div className="flex justify-center space-x-4 mb-8">
                {visibleRides.map(ride => (
                  <RideCard key={ride.id} ride={ride} />
                ))}
              </div>
            </div>
          </div>
          
          {/* Explore All Rides button */}
          <div className=" ml-10 mb-20 flex justify-center mt-12 ">
          <motion.button 
              className="bg-yellow-300 text-blue-900 py-3 px-18 rounded-full text-lg font-bold hover:bg-yellow-300 transition-colors relative bottom-80 left-5 "
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              Explore All Rides!
            </motion.button>
          </div>
        </div>
      </div>
    );
  };
   
  export default RidesSection;








