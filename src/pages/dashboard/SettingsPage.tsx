import { motion } from "framer-motion";
import { DashboardHeader } from "@/components/layout/DashboardHeader";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Settings, Palette, Bell, Shield, Users, Building } from "lucide-react";

export default function SettingsPage() {
  return (
    <div className="min-h-screen bg-background">
      <DashboardHeader title="Settings" subtitle="Customize your hotel management system" />
      <div className="p-6 space-y-6">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="lg:col-span-2 space-y-6">
            <Card>
              <CardHeader><CardTitle className="flex items-center gap-2"><Building className="w-5 h-5" />Hotel Information</CardTitle></CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div><Label>Hotel Name</Label><Input defaultValue="LuxeStay Grand Palace" className="mt-1.5" /></div>
                  <div><Label>City</Label><Input defaultValue="New York" className="mt-1.5" /></div>
                </div>
                <div><Label>Address</Label><Input defaultValue="123 Fifth Avenue, Manhattan" className="mt-1.5" /></div>
                <Button variant="hero">Save Changes</Button>
              </CardContent>
            </Card>
            <Card>
              <CardHeader><CardTitle className="flex items-center gap-2"><Palette className="w-5 h-5" />Branding</CardTitle></CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {["Primary", "Secondary", "Info", "Warning"].map((color) => (
                    <div key={color}><Label>{color} Color</Label><div className="mt-1.5 w-full h-10 rounded-lg bg-primary border border-border cursor-pointer" /></div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}>
            <Card>
              <CardHeader><CardTitle>Quick Settings</CardTitle></CardHeader>
              <CardContent className="space-y-3">
                {[
                  { icon: Bell, label: "Notifications", desc: "Manage alerts" },
                  { icon: Shield, label: "Security", desc: "Password & 2FA" },
                  { icon: Users, label: "Team", desc: "Manage staff" },
                ].map((item) => (
                  <Button key={item.label} variant="ghost" className="w-full justify-start h-auto py-3">
                    <item.icon className="w-5 h-5 mr-3 text-primary" />
                    <div className="text-left"><p className="font-medium">{item.label}</p><p className="text-xs text-muted-foreground">{item.desc}</p></div>
                  </Button>
                ))}
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
