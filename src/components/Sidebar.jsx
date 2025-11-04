import { Link } from "react-router-dom";

export default function Sidebar({ collapsed }) {
  return (
    <aside
      className={`${
        collapsed ? "w-16" : "w-56"
      } bg-gray-800 text-white flex flex-col transition-all duration-300`}>
        
      {!collapsed && (
        <h2 className="text-xl font-semibold text-center py-4 border-b border-gray-700">
          Menu
        </h2>
      )}

      {/* Navigation Links */}
      <nav className="flex flex-col mt-4 space-y-2">
        <Link to="/dashboard" className="p-3 hover:bg-gray-700">
          Dashboard
        </Link>
        <Link to="/meals" className="p-3 hover:bg-gray-700">
          Meals
        </Link>
        <Link to="/workouts" className="p-3 hover:bg-gray-700">
          Workouts
        </Link>
        <Link to="/profile" className="p-3 hover:bg-gray-700">
          Profile
        </Link>
      </nav>
    </aside>
  );
}
