import { motion } from "framer-motion";
import { DashboardHeader } from "@/components/layout/DashboardHeader";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import {
  Plus,
  Search,
  Filter,
  Calendar,
  Clock,
  DollarSign,
  ArrowRight,
  CheckCircle,
  XCircle,
} from "lucide-react";
import { bookings, guests, rooms, hotels } from "@/data/mockData";

const statusColors: Record<string, "success" | "info" | "warning" | "secondary"> = {
  "checked-in": "success",
  confirmed: "info",
  "checked-out": "secondary",
  cancelled: "warning",
};

export default function BookingsPage() {
  return (
    <div className="min-h-screen bg-background">
      <DashboardHeader title="Bookings & Reservations" subtitle="Manage all bookings and check-ins" />

      <div className="p-6 space-y-6">
        {/* Actions Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4"
        >
          <div className="flex items-center gap-4 w-full sm:w-auto">
            <div className="relative flex-1 sm:w-80">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <Input placeholder="Search bookings..." className="pl-10 bg-secondary border-border" />
            </div>
            <Button variant="outline" size="icon">
              <Filter className="w-4 h-4" />
            </Button>
          </div>
          <div className="flex items-center gap-3">
            <Button variant="outline">
              <Calendar className="w-4 h-4 mr-2" />
              Reserve Room
            </Button>
            <Button variant="hero">
              <Plus className="w-4 h-4 mr-2" />
              New Booking
            </Button>
          </div>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="grid grid-cols-1 md:grid-cols-4 gap-4"
        >
          {[
            { label: "Today's Check-ins", value: 12, icon: ArrowRight, color: "text-success" },
            { label: "Today's Check-outs", value: 8, icon: ArrowRight, color: "text-info" },
            { label: "Pending Payments", value: "$23,450", icon: DollarSign, color: "text-warning" },
            { label: "Active Bookings", value: 89, icon: Calendar, color: "text-primary" },
          ].map((stat) => (
            <Card key={stat.label} variant="glass">
              <CardContent className="p-4 flex items-center gap-4">
                <div className={`w-12 h-12 rounded-xl bg-secondary flex items-center justify-center ${stat.color}`}>
                  <stat.icon className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-2xl font-bold text-foreground">{stat.value}</p>
                  <p className="text-sm text-muted-foreground">{stat.label}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </motion.div>

        {/* Bookings Table */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <Card>
            <CardHeader className="flex flex-row items-center justify-between">
              <CardTitle className="text-lg">All Bookings</CardTitle>
              <div className="flex items-center gap-2">
                <Button variant="ghost" size="sm">Today</Button>
                <Button variant="ghost" size="sm">This Week</Button>
                <Button variant="ghost" size="sm">This Month</Button>
              </div>
            </CardHeader>
            <CardContent>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-border">
                      <th className="text-left py-3 px-4 text-sm font-medium text-muted-foreground">Guest</th>
                      <th className="text-left py-3 px-4 text-sm font-medium text-muted-foreground">Room</th>
                      <th className="text-left py-3 px-4 text-sm font-medium text-muted-foreground">Check-in</th>
                      <th className="text-left py-3 px-4 text-sm font-medium text-muted-foreground">Check-out</th>
                      <th className="text-left py-3 px-4 text-sm font-medium text-muted-foreground">Amount</th>
                      <th className="text-left py-3 px-4 text-sm font-medium text-muted-foreground">Status</th>
                      <th className="text-left py-3 px-4 text-sm font-medium text-muted-foreground">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {bookings.map((booking) => {
                      const guest = guests.find((g) => g.id === booking.guestId);
                      const room = rooms.find((r) => r.id === booking.roomId);
                      const hotel = hotels.find((h) => h.id === booking.hotelId);
                      return (
                        <tr key={booking.id} className="border-b border-border/50 hover:bg-secondary/30 transition-colors">
                          <td className="py-4 px-4">
                            <div className="flex items-center gap-3">
                              <img
                                src={guest?.avatar}
                                alt={guest?.name}
                                className="w-10 h-10 rounded-full object-cover"
                              />
                              <div>
                                <p className="font-medium text-foreground">{guest?.name}</p>
                                <p className="text-sm text-muted-foreground">{guest?.email}</p>
                              </div>
                            </div>
                          </td>
                          <td className="py-4 px-4">
                            <p className="font-medium text-foreground">Room {room?.roomNumber}</p>
                            <p className="text-sm text-muted-foreground">{hotel?.name}</p>
                          </td>
                          <td className="py-4 px-4">
                            <div className="flex items-center gap-2">
                              <Calendar className="w-4 h-4 text-muted-foreground" />
                              <span className="text-sm text-foreground">{booking.checkIn}</span>
                            </div>
                          </td>
                          <td className="py-4 px-4">
                            <div className="flex items-center gap-2">
                              <Calendar className="w-4 h-4 text-muted-foreground" />
                              <span className="text-sm text-foreground">{booking.checkOut}</span>
                            </div>
                          </td>
                          <td className="py-4 px-4">
                            <p className="font-semibold text-foreground">${booking.totalAmount}</p>
                            <p className="text-xs text-muted-foreground">Paid: ${booking.paidAmount}</p>
                          </td>
                          <td className="py-4 px-4">
                            <Badge variant={statusColors[booking.status]}>{booking.status}</Badge>
                          </td>
                          <td className="py-4 px-4">
                            <div className="flex items-center gap-2">
                              {booking.status === "confirmed" && (
                                <Button variant="success" size="sm">
                                  <CheckCircle className="w-4 h-4 mr-1" />
                                  Check-in
                                </Button>
                              )}
                              {booking.status === "checked-in" && (
                                <Button variant="outline" size="sm">
                                  <Clock className="w-4 h-4 mr-1" />
                                  Check-out
                                </Button>
                              )}
                              <Button variant="ghost" size="sm">
                                <XCircle className="w-4 h-4" />
                              </Button>
                            </div>
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  );
}
