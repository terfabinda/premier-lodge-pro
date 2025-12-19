import { motion } from "framer-motion";
import { DashboardHeader } from "@/components/layout/DashboardHeader";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Plus, Search, Shirt, Package, Clock, CheckCircle, DollarSign } from "lucide-react";
import { laundryOrders } from "@/data/mockData";

const statusColors: Record<string, "info" | "warning" | "success" | "secondary"> = {
  received: "info",
  processing: "warning",
  ready: "success",
  delivered: "secondary",
};

export default function LaundryPage() {
  return (
    <div className="min-h-screen bg-background">
      <DashboardHeader title="Laundry Services" subtitle="Track and manage all laundry orders" />

      <div className="p-6 space-y-6">
        {/* Actions Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4"
        >
          <div className="relative w-full sm:w-80">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            <Input placeholder="Search orders..." className="pl-10 bg-secondary border-border" />
          </div>
          <Button variant="hero">
            <Plus className="w-4 h-4 mr-2" />
            New Order
          </Button>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="grid grid-cols-1 md:grid-cols-4 gap-4"
        >
          {[
            { label: "Pending Orders", value: 8, icon: Clock, color: "text-warning" },
            { label: "In Processing", value: 12, icon: Shirt, color: "text-info" },
            { label: "Ready for Pickup", value: 5, icon: CheckCircle, color: "text-success" },
            { label: "Today's Revenue", value: "$420", icon: DollarSign, color: "text-primary" },
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

        {/* Orders */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <Card>
            <CardHeader className="flex flex-row items-center justify-between">
              <CardTitle className="text-lg">Laundry Orders</CardTitle>
              <div className="flex items-center gap-2">
                <Button variant="ghost" size="sm">All</Button>
                <Button variant="ghost" size="sm">In-House</Button>
                <Button variant="ghost" size="sm">External</Button>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {laundryOrders.map((order) => (
                  <Card key={order.id} variant="elevated" className="p-4 hover-lift">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                          <Shirt className="w-6 h-6 text-primary" />
                        </div>
                        <div>
                          <div className="flex items-center gap-2">
                            <h3 className="font-semibold text-foreground">{order.customerName}</h3>
                            <Badge variant={order.guestId ? "default" : "secondary"}>
                              {order.guestId ? "Guest" : "External"}
                            </Badge>
                          </div>
                          <p className="text-sm text-muted-foreground">
                            {order.items.map((i) => `${i.quantity}x ${i.name}`).join(", ")}
                          </p>
                        </div>
                      </div>

                      <div className="flex items-center gap-4">
                        <div className="text-right">
                          <p className="font-semibold text-foreground">${order.totalAmount}</p>
                          <p className="text-sm text-muted-foreground capitalize">{order.paymentMethod}</p>
                        </div>
                        <Badge variant={statusColors[order.status]}>{order.status}</Badge>
                        <Button variant="outline" size="sm">Update</Button>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Pricing */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Laundry Pricing</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
                {[
                  { item: "Shirts", price: 5 },
                  { item: "Pants", price: 10 },
                  { item: "Suits", price: 25 },
                  { item: "Dresses", price: 15 },
                  { item: "Jackets", price: 20 },
                  { item: "Bed Sheets", price: 12 },
                ].map((item) => (
                  <Card key={item.item} variant="glass" className="p-4 text-center">
                    <Package className="w-8 h-8 mx-auto mb-2 text-primary" />
                    <p className="font-medium text-foreground">{item.item}</p>
                    <p className="text-lg font-bold text-primary">${item.price}</p>
                  </Card>
                ))}
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  );
}
