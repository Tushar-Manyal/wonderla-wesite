import { ChevronLeft, ChevronRight, ChevronDown} from "lucide-react";

const NavItem = ({ label, hasDropdown = false }) => {
  return (
    <div className="relative flex items-center text-gray-600 font-medium cursor-pointer hover:text-blue-700 transition-colors">
      {label}
      {hasDropdown && <ChevronDown className="ml-1 w-4 h-4" />}
    </div>
  );
};

export default NavItem;
