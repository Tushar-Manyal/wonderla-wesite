const CategoryButton = ({ icon, label, count, isActive, onClick }) => {
    return (
      <div className="flex items-center mb-8 cursor-pointer" onClick={onClick}>
        <div className={`flex items-center justify-center w-32 h-32 rounded-full ${isActive ? "bg-yellow-400" : "bg-yellow-200"}`}>
          <div className="w-16 h-16">{icon}</div>
        </div>
        <div className="ml-4">
          <h3 className="text-white text-2xl font-medium">{label}</h3>
          <div className="mt-1 px-3 py-1 bg-blue-500 text-white rounded-full text-sm w-fit">{count} Rides</div>
        </div>
      </div>
    );
  };
  
  export default CategoryButton;
  