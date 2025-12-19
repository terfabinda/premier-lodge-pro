import { Outlet } from "react-router-dom";
import { DashboardSidebar } from "./DashboardSidebar";
import { motion } from "framer-motion";

export function DashboardLayout() {
  return (
    <div className="min-h-screen bg-background">
      <DashboardSidebar />
      <motion.main
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="ml-64 min-h-screen"
      >
        <Outlet />
      </motion.main>
    </div>
  );
}
