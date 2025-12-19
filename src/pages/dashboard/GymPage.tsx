import { motion } from "framer-motion";
import { DashboardHeader } from "@/components/layout/DashboardHeader";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Plus, Dumbbell, Users, Calendar, DollarSign, Crown } from "lucide-react";
import { gymMembers } from "@/data/mockData";

export default function GymPage() {
  return (
    <div className="min-h-screen bg-background">
      <DashboardHeader title="Gym Management" subtitle="Manage memberships and access" />
      <div className="p-6 space-y-6">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="flex justify-between">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 flex-1">
            {[
              { label: "Active Members", value: gymMembers.filter(m => m.status === "active").length, icon: Users },
              { label: "Guest Access", value: 12, icon: Dumbbell },
              { label: "Monthly Revenue", value: "$8,450", icon: DollarSign },
              { label: "VIP Members", value: 5, icon: Crown },
            ].map((stat) => (
              <Card key={stat.label} variant="glass">
                <CardContent className="p-4 flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                    <stat.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-foreground">{stat.value}</p>
                    <p className="text-sm text-muted-foreground">{stat.label}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </motion.div>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between">
            <CardTitle>Gym Members</CardTitle>
            <Button variant="hero"><Plus className="w-4 h-4 mr-2" />Add Member</Button>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {gymMembers.map((member) => (
                <Card key={member.id} variant="elevated" className="p-4 flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                      <Dumbbell className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground">{member.name}</h3>
                      <p className="text-sm text-muted-foreground">{member.email}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <Badge variant={member.membershipType === "vip" ? "default" : "secondary"}>{member.membershipType}</Badge>
                    <Badge variant={member.status === "active" ? "success" : "destructive"}>{member.status}</Badge>
                    <Button variant="outline" size="sm">Manage</Button>
                  </div>
                </Card>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
