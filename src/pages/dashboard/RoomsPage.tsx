import { motion } from "framer-motion";
import { DashboardHeader } from "@/components/layout/DashboardHeader";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Plus, Search, Filter, BedDouble, MoreVertical, Edit, Trash } from "lucide-react";
import { rooms, roomCategories, hotels } from "@/data/mockData";

const statusVariants: Record<string, "available" | "occupied" | "reserved" | "maintenance"> = {
  available: "available",
  occupied: "occupied",
  reserved: "reserved",
  maintenance: "maintenance",
};

export default function RoomsPage() {
  return (
    <div className="min-h-screen bg-background">
      <DashboardHeader title="Room Management" subtitle="Manage all rooms and categories" />

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
              <Input placeholder="Search rooms..." className="pl-10 bg-secondary border-border" />
            </div>
            <Button variant="outline" size="icon">
              <Filter className="w-4 h-4" />
            </Button>
          </div>
          <div className="flex items-center gap-3">
            <Button variant="outline">
              <Plus className="w-4 h-4 mr-2" />
              Add Category
            </Button>
            <Button variant="hero">
              <Plus className="w-4 h-4 mr-2" />
              Add Room
            </Button>
          </div>
        </motion.div>

        {/* Room Categories */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
        >
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Room Categories</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                {roomCategories.map((category) => (
                  <Card key={category.id} variant="glass" className="p-4">
                    <div className="flex items-start justify-between mb-3">
                      <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                        <BedDouble className="w-5 h-5 text-primary" />
                      </div>
                      <Button variant="ghost" size="icon" className="h-8 w-8">
                        <MoreVertical className="w-4 h-4" />
                      </Button>
                    </div>
                    <h3 className="font-semibold text-foreground mb-1">{category.name}</h3>
                    <p className="text-sm text-muted-foreground mb-3 line-clamp-2">
                      {category.description}
                    </p>
                    <div className="flex items-center justify-between">
                      <span className="text-lg font-bold text-primary">${category.basePrice}</span>
                      <span className="text-sm text-muted-foreground">
                        Max {category.maxOccupancy} guests
                      </span>
                    </div>
                  </Card>
                ))}
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Rooms Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <Card>
            <CardHeader className="flex flex-row items-center justify-between">
              <CardTitle className="text-lg">All Rooms</CardTitle>
              <div className="flex items-center gap-2">
                <Badge variant="available">
                  Available: {rooms.filter((r) => r.status === "available").length}
                </Badge>
                <Badge variant="occupied">
                  Occupied: {rooms.filter((r) => r.status === "occupied").length}
                </Badge>
              </div>
            </CardHeader>
            <CardContent>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-border">
                      <th className="text-left py-3 px-4 text-sm font-medium text-muted-foreground">Room</th>
                      <th className="text-left py-3 px-4 text-sm font-medium text-muted-foreground">Hotel</th>
                      <th className="text-left py-3 px-4 text-sm font-medium text-muted-foreground">Category</th>
                      <th className="text-left py-3 px-4 text-sm font-medium text-muted-foreground">Floor</th>
                      <th className="text-left py-3 px-4 text-sm font-medium text-muted-foreground">Price</th>
                      <th className="text-left py-3 px-4 text-sm font-medium text-muted-foreground">Status</th>
                      <th className="text-left py-3 px-4 text-sm font-medium text-muted-foreground">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {rooms.map((room) => {
                      const category = roomCategories.find((c) => c.id === room.categoryId);
                      const hotel = hotels.find((h) => h.id === room.hotelId);
                      return (
                        <tr key={room.id} className="border-b border-border/50 hover:bg-secondary/30 transition-colors">
                          <td className="py-4 px-4">
                            <div className="flex items-center gap-3">
                              <img
                                src={room.image}
                                alt={`Room ${room.roomNumber}`}
                                className="w-12 h-12 rounded-lg object-cover"
                              />
                              <div>
                                <p className="font-medium text-foreground">Room {room.roomNumber}</p>
                                {room.isPromoted && (
                                  <Badge variant="default" className="text-xs mt-1">Featured</Badge>
                                )}
                              </div>
                            </div>
                          </td>
                          <td className="py-4 px-4 text-sm text-muted-foreground">{hotel?.name}</td>
                          <td className="py-4 px-4 text-sm text-foreground">{category?.name}</td>
                          <td className="py-4 px-4 text-sm text-muted-foreground">Floor {room.floor}</td>
                          <td className="py-4 px-4 text-sm font-semibold text-foreground">${room.price}</td>
                          <td className="py-4 px-4">
                            <Badge variant={statusVariants[room.status]}>{room.status}</Badge>
                          </td>
                          <td className="py-4 px-4">
                            <div className="flex items-center gap-2">
                              <Button variant="ghost" size="icon" className="h-8 w-8">
                                <Edit className="w-4 h-4" />
                              </Button>
                              <Button variant="ghost" size="icon" className="h-8 w-8 text-destructive">
                                <Trash className="w-4 h-4" />
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
