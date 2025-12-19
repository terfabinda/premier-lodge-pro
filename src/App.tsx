import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import { DashboardLayout } from "./components/layout/DashboardLayout";
import DashboardHome from "./pages/dashboard/DashboardHome";
import RoomsPage from "./pages/dashboard/RoomsPage";
import GuestsPage from "./pages/dashboard/GuestsPage";
import BookingsPage from "./pages/dashboard/BookingsPage";
import RestaurantPage from "./pages/dashboard/RestaurantPage";
import LaundryPage from "./pages/dashboard/LaundryPage";
import EventsPage from "./pages/dashboard/EventsPage";
import GymPage from "./pages/dashboard/GymPage";
import PoolPage from "./pages/dashboard/PoolPage";
import ReportsPage from "./pages/dashboard/ReportsPage";
import SettingsPage from "./pages/dashboard/SettingsPage";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/dashboard" element={<DashboardLayout />}>
            <Route index element={<DashboardHome />} />
            <Route path="rooms" element={<RoomsPage />} />
            <Route path="guests" element={<GuestsPage />} />
            <Route path="bookings" element={<BookingsPage />} />
            <Route path="restaurant" element={<RestaurantPage />} />
            <Route path="laundry" element={<LaundryPage />} />
            <Route path="events" element={<EventsPage />} />
            <Route path="gym" element={<GymPage />} />
            <Route path="pool" element={<PoolPage />} />
            <Route path="reports" element={<ReportsPage />} />
            <Route path="settings" element={<SettingsPage />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
