import { Outlet } from "react-router-dom";
import { DashboardSidebar } from "./DashboardSidebar";
import { motion } from "framer-motion";
import { SidebarProvider, useSidebarContext } from "@/contexts/SidebarContext";
import { cn } from "@/lib/utils";

function DashboardContent() {
  const { collapsed, isMobileOpen, setMobileOpen } = useSidebarContext();

  return (
    <div className="min-h-screen bg-background">
      <DashboardSidebar />
      
      {/* Mobile overlay */}
      {isMobileOpen && (
        <div
          className="fixed inset-0 z-30 bg-black/50 lg:hidden"
          onClick={() => setMobileOpen(false)}
        />
      )}
      
      <motion.main
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className={cn(
          "min-h-screen transition-all duration-300",
          collapsed ? "lg:ml-20" : "lg:ml-64",
          "ml-0"
        )}
      >
        <Outlet />
      </motion.main>
    </div>
  );
}

export function DashboardLayout() {
  return (
    <SidebarProvider>
      <DashboardContent />
    </SidebarProvider>
  );
}
