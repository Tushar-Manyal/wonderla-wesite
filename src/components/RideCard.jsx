const RideCard = ({ ride }) => {
    return (
      <div className="w-64 bg-gray-800 rounded-lg overflow-hidden">
        <img src={ride.image} alt={ride.title} className="w-full h-48 object-cover" />
        <div className="p-4">
          <h3 className="text-white text-xl font-bold">{ride.title}</h3>
          <p className="text-white text-sm">{ride.location}</p>
          <p className="text-gray-300 text-sm mt-2">{ride.description}</p>
          <button className="mt-4 bg-yellow-400 text-blue-900 py-2 px-4 rounded-md text-sm">RIDE DETAILS</button>
        </div>
      </div>
    );
  };
  
  export default RideCard;
  