import { motion } from "framer-motion";
import { DashboardHeader } from "@/components/layout/DashboardHeader";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Plus, Waves, Users, DollarSign, Clock } from "lucide-react";

export default function PoolPage() {
  return (
    <div className="min-h-screen bg-background">
      <DashboardHeader title="Swimming Pool" subtitle="Manage pool access and memberships" />
      <div className="p-6 space-y-6">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="grid grid-cols-1 md:grid-cols-4 gap-4">
          {[
            { label: "Current Visitors", value: 24, icon: Users },
            { label: "Guest Access", value: 8, icon: Waves },
            { label: "Today's Revenue", value: "$320", icon: DollarSign },
            { label: "Avg. Duration", value: "1.5h", icon: Clock },
          ].map((stat) => (
            <Card key={stat.label} variant="glass">
              <CardContent className="p-4 flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-info/10 flex items-center justify-center text-info">
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
        <Card>
          <CardHeader className="flex flex-row items-center justify-between">
            <CardTitle>Access Control</CardTitle>
            <Button variant="hero"><Plus className="w-4 h-4 mr-2" />Grant Access</Button>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Card variant="gold" className="p-6">
                <h3 className="font-heading text-xl font-semibold mb-2">Guest Access</h3>
                <p className="text-muted-foreground mb-4">Included with room booking or paid separately</p>
                <p className="text-3xl font-bold text-primary mb-4">$15<span className="text-sm font-normal text-muted-foreground">/day</span></p>
                <Button variant="outline" className="w-full">Manage Pricing</Button>
              </Card>
              <Card variant="gold" className="p-6">
                <h3 className="font-heading text-xl font-semibold mb-2">External Access</h3>
                <p className="text-muted-foreground mb-4">For non-hotel guests</p>
                <p className="text-3xl font-bold text-primary mb-4">$25<span className="text-sm font-normal text-muted-foreground">/day</span></p>
                <Button variant="outline" className="w-full">Manage Pricing</Button>
              </Card>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
