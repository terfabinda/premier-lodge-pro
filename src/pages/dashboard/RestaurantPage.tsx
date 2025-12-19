import { motion } from "framer-motion";
import { DashboardHeader } from "@/components/layout/DashboardHeader";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import {
  Plus,
  Search,
  ShoppingCart,
  UtensilsCrossed,
  Wine,
  Coffee,
  DollarSign,
  Package,
} from "lucide-react";
import { menuItems } from "@/data/mockData";

export default function RestaurantPage() {
  const foodItems = menuItems.filter((item) => item.category === "food");
  const drinkItems = menuItems.filter((item) => item.category === "drink");

  return (
    <div className="min-h-screen bg-background">
      <DashboardHeader title="Restaurant & Bar" subtitle="Manage menu items, orders, and inventory" />

      <div className="p-6 space-y-6">
        {/* Actions Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4"
        >
          <div className="relative w-full sm:w-80">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            <Input placeholder="Search menu items..." className="pl-10 bg-secondary border-border" />
          </div>
          <div className="flex items-center gap-3">
            <Button variant="outline">
              <Package className="w-4 h-4 mr-2" />
              Manage Stock
            </Button>
            <Button variant="hero">
              <Plus className="w-4 h-4 mr-2" />
              Add Item
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
            { label: "Today's Sales", value: "$4,580", icon: DollarSign, color: "text-success" },
            { label: "Active Orders", value: 12, icon: ShoppingCart, color: "text-primary" },
            { label: "Food Items", value: foodItems.length, icon: UtensilsCrossed, color: "text-warning" },
            { label: "Drink Items", value: drinkItems.length, icon: Wine, color: "text-info" },
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

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Menu Items */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="lg:col-span-2"
          >
            <Card>
              <CardHeader className="flex flex-row items-center justify-between">
                <CardTitle className="text-lg">Menu Items</CardTitle>
                <div className="flex items-center gap-2">
                  <Button variant="ghost" size="sm">All</Button>
                  <Button variant="ghost" size="sm">
                    <UtensilsCrossed className="w-4 h-4 mr-1" />
                    Food
                  </Button>
                  <Button variant="ghost" size="sm">
                    <Wine className="w-4 h-4 mr-1" />
                    Drinks
                  </Button>
                </div>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {menuItems.map((item) => (
                    <Card key={item.id} variant="elevated" className="p-4 flex gap-4 hover-lift">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-20 h-20 rounded-lg object-cover"
                      />
                      <div className="flex-1">
                        <div className="flex items-start justify-between">
                          <div>
                            <h3 className="font-semibold text-foreground">{item.name}</h3>
                            <p className="text-sm text-muted-foreground line-clamp-1">{item.description}</p>
                          </div>
                          <Badge variant={item.category === "food" ? "warning" : "info"}>
                            {item.category}
                          </Badge>
                        </div>
                        <div className="flex items-center justify-between mt-3">
                          <span className="text-lg font-bold text-primary">${item.price}</span>
                          <Badge variant={item.inStock ? "success" : "destructive"}>
                            {item.inStock ? "In Stock" : "Out of Stock"}
                          </Badge>
                        </div>
                      </div>
                    </Card>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* POS / Cart */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            <Card className="sticky top-24">
              <CardHeader>
                <CardTitle className="text-lg flex items-center gap-2">
                  <ShoppingCart className="w-5 h-5" />
                  Current Order
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {/* Sample Cart Items */}
                  {[
                    { name: "Grilled Salmon", qty: 2, price: 64 },
                    { name: "Caesar Salad", qty: 1, price: 18 },
                    { name: "Signature Cocktail", qty: 2, price: 32 },
                  ].map((item) => (
                    <div key={item.name} className="flex items-center justify-between py-2 border-b border-border/50">
                      <div>
                        <p className="font-medium text-foreground">{item.name}</p>
                        <p className="text-sm text-muted-foreground">Qty: {item.qty}</p>
                      </div>
                      <span className="font-semibold text-foreground">${item.price}</span>
                    </div>
                  ))}

                  <div className="pt-4 border-t border-border">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-muted-foreground">Subtotal</span>
                      <span className="font-semibold text-foreground">$114</span>
                    </div>
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-muted-foreground">Tax (10%)</span>
                      <span className="font-semibold text-foreground">$11.40</span>
                    </div>
                    <div className="flex items-center justify-between text-lg">
                      <span className="font-semibold text-foreground">Total</span>
                      <span className="font-bold text-primary">$125.40</span>
                    </div>
                  </div>

                  <div className="space-y-2 pt-4">
                    <Button variant="hero" className="w-full">
                      <DollarSign className="w-4 h-4 mr-2" />
                      Process Payment
                    </Button>
                    <Button variant="outline" className="w-full">
                      <Coffee className="w-4 h-4 mr-2" />
                      Charge to Room
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
