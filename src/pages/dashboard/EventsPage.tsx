import { motion } from "framer-motion";
import { DashboardHeader } from "@/components/layout/DashboardHeader";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Plus, Search, PartyPopper, Calendar, Clock, Users, DollarSign, MapPin } from "lucide-react";
import { events, eventHalls } from "@/data/mockData";

const statusColors: Record<string, "info" | "success" | "secondary" | "destructive"> = {
  upcoming: "info",
  ongoing: "success",
  completed: "secondary",
  cancelled: "destructive",
};

export default function EventsPage() {
  return (
    <div className="min-h-screen bg-background">
      <DashboardHeader title="Event Center" subtitle="Manage event halls and bookings" />

      <div className="p-6 space-y-6">
        {/* Actions Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4"
        >
          <div className="relative w-full sm:w-80">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            <Input placeholder="Search events..." className="pl-10 bg-secondary border-border" />
          </div>
          <Button variant="hero">
            <Plus className="w-4 h-4 mr-2" />
            Book Event
          </Button>
        </motion.div>

        {/* Event Halls */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
        >
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Event Halls</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {eventHalls.map((hall) => (
                  <Card key={hall.id} variant="gold" className="p-6 hover-lift">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                        <PartyPopper className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-foreground">{hall.name}</h3>
                        <div className="flex items-center gap-1 text-sm text-muted-foreground">
                          <Users className="w-3 h-3" />
                          Up to {hall.capacity} guests
                        </div>
                      </div>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="p-3 rounded-lg bg-secondary/50">
                        <p className="text-xs text-muted-foreground">Hourly</p>
                        <p className="text-lg font-bold text-primary">${hall.hourlyRate}</p>
                      </div>
                      <div className="p-3 rounded-lg bg-secondary/50">
                        <p className="text-xs text-muted-foreground">Daily</p>
                        <p className="text-lg font-bold text-primary">${hall.dailyRate}</p>
                      </div>
                    </div>
                    <Button variant="outline" className="w-full mt-4">Check Availability</Button>
                  </Card>
                ))}
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Upcoming Events */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <Card>
            <CardHeader className="flex flex-row items-center justify-between">
              <CardTitle className="text-lg">Event Bookings</CardTitle>
              <div className="flex items-center gap-2">
                <Button variant="ghost" size="sm">All</Button>
                <Button variant="ghost" size="sm">Upcoming</Button>
                <Button variant="ghost" size="sm">Past</Button>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {events.map((event) => {
                  const hall = eventHalls.find((h) => h.id === event.hallId);
                  return (
                    <Card key={event.id} variant="elevated" className="p-4 hover-lift">
                      <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
                        <div className="flex items-start gap-4">
                          <div className="w-16 h-16 rounded-xl gold-gradient flex flex-col items-center justify-center text-primary-foreground">
                            <span className="text-lg font-bold">
                              {new Date(event.startDate).getDate()}
                            </span>
                            <span className="text-xs">
                              {new Date(event.startDate).toLocaleString("default", { month: "short" })}
                            </span>
                          </div>
                          <div>
                            <div className="flex items-center gap-2 mb-1">
                              <h3 className="font-semibold text-foreground">{event.eventType}</h3>
                              <Badge variant={statusColors[event.status]}>{event.status}</Badge>
                            </div>
                            <p className="text-sm text-muted-foreground mb-2">{event.clientName}</p>
                            <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
                              <div className="flex items-center gap-1">
                                <MapPin className="w-4 h-4" />
                                {hall?.name}
                              </div>
                              <div className="flex items-center gap-1">
                                <Calendar className="w-4 h-4" />
                                {event.startDate} - {event.endDate}
                              </div>
                              <div className="flex items-center gap-1">
                                <Clock className="w-4 h-4" />
                                {event.chargeType}
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="flex items-center gap-4">
                          <div className="text-right">
                            <p className="text-sm text-muted-foreground">Total Amount</p>
                            <p className="text-xl font-bold text-primary">${event.totalAmount.toLocaleString()}</p>
                          </div>
                          <Button variant="outline">View Details</Button>
                        </div>
                      </div>
                    </Card>
                  );
                })}
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  );
}
