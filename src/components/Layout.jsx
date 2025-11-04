import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import { useState } from "react";

export default function Layout() {
  const [collapsed, setCollapsed] = useState(false);

  const toggleSidebar = () => setCollapsed(!collapsed);

  return (
    <div className="flex h-screen flex-col bg-gray-50">
      {/* Navbar */}
      <header className="sticky top-0 z-50 bg-gray-900 text-white">
        <Navbar toggleSidebar={toggleSidebar} />
      </header>

      {/* Sidebar + Page */}
      <div className="flex flex-1 overflow-hidden">
        <Sidebar collapsed={collapsed} />
        <main className="flex-1 overflow-y-auto p-6">
          <Outlet />
        </main>
      </div>

      {/* Footer */}
      <footer className="sticky bottom-0 bg-gray-900 text-center text-white py-2 text-sm">
        © 2025 GymBae
      </footer>
    </div>
  );
}
