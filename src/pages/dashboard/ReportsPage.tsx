import { motion } from "framer-motion";
import { DashboardHeader } from "@/components/layout/DashboardHeader";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { BarChart3, Download, FileText, TrendingUp, DollarSign, Users, BedDouble } from "lucide-react";

export default function ReportsPage() {
  return (
    <div className="min-h-screen bg-background">
      <DashboardHeader title="Reports & Analytics" subtitle="View detailed reports and export data" />
      <div className="p-6 space-y-6">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {[
            { label: "Total Revenue", value: "$145,680", change: "+12.3%", icon: DollarSign },
            { label: "Occupancy Rate", value: "78%", change: "+5.2%", icon: BedDouble },
            { label: "Total Guests", value: "1,245", change: "+8.1%", icon: Users },
            { label: "Avg. Stay", value: "3.2 nights", change: "+0.5", icon: TrendingUp },
          ].map((stat) => (
            <Card key={stat.label} variant="elevated">
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <stat.icon className="w-8 h-8 text-primary" />
                  <span className="text-success text-sm font-medium">{stat.change}</span>
                </div>
                <p className="text-3xl font-bold text-foreground">{stat.value}</p>
                <p className="text-muted-foreground">{stat.label}</p>
              </CardContent>
            </Card>
          ))}
        </motion.div>
        <Card>
          <CardHeader>
            <CardTitle>Available Reports</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {["Revenue Report", "Occupancy Report", "Guest Statistics", "Restaurant Sales", "Laundry Services", "Event Bookings"].map((report) => (
                <Card key={report} variant="glass" className="p-4 flex items-center justify-between hover-lift cursor-pointer">
                  <div className="flex items-center gap-3">
                    <FileText className="w-5 h-5 text-primary" />
                    <span className="font-medium">{report}</span>
                  </div>
                  <Button variant="ghost" size="icon"><Download className="w-4 h-4" /></Button>
                </Card>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
