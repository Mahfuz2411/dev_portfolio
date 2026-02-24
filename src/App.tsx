import { Outlet } from "react-router-dom";
import Sidebar from "@/components/Sidebar";
import MobileNav from "@/components/MobileNav";

function App() {
  return (
    <div className="min-h-screen bg-linear-to-br from-slate-50 via-purple-50 to-indigo-50">
      <MobileNav />
      <div className="hidden lg:block">
        <Sidebar />
      </div>
      <main className="lg:ml-64 transition-all duration-300">
        <Outlet />
      </main>
    </div>
  );
}

export default App;
