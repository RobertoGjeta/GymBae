export default function Navbar({ toggleSidebar }) {
  return (
    <nav className="flex justify-between items-center px-6 py-3 bg-gray-900 text-white">
      
      <button
        onClick={toggleSidebar}
        className="md:hidden text-xl focus:outline-none"
      >
        ☰
      </button>

      <h1 className="text-lg font-semibold">GymBae</h1>

      <p className="italic text-sm">
        Logged in as: <span className="font-medium">Overachiever</span> (today only)
      </p>
    </nav>
  );
}
