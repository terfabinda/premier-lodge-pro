import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Search, MapPin, Calendar, Users, Star, Wifi, Car, Coffee, Dumbbell, Waves, Utensils, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { PublicNavbar } from "@/components/layout/PublicNavbar";
import { PublicFooter } from "@/components/layout/PublicFooter";
import { hotels, rooms, roomCategories } from "@/data/mockData";
import heroImage from "@/assets/hero-hotel.jpg";

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 },
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const amenities = [
  { icon: Wifi, label: "Free WiFi" },
  { icon: Car, label: "Valet Parking" },
  { icon: Coffee, label: "24/7 Room Service" },
  { icon: Dumbbell, label: "Fitness Center" },
  { icon: Waves, label: "Swimming Pool" },
  { icon: Utensils, label: "Fine Dining" },
];

export default function LandingPage() {
  // Get available rooms sorted by promotion status
  const availableRooms = rooms
    .filter((room) => room.status === "available")
    .sort((a, b) => (b.isPromoted ? 1 : 0) - (a.isPromoted ? 1 : 0));

  return (
    <div className="min-h-screen bg-background">
      <PublicNavbar />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src={heroImage}
            alt="Luxury Hotel Lobby"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/50 to-background" />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 container mx-auto px-4 pt-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/20 border border-primary/30 mb-8"
            >
              <Sparkles className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-primary">Award-Winning Luxury Hotels</span>
            </motion.div>

            <h1 className="font-heading text-5xl md:text-7xl font-bold text-foreground mb-6 leading-tight">
              Experience
              <span className="text-gradient-gold"> Luxury</span>
              <br />
              Redefined
            </h1>

            <p className="text-xl text-muted-foreground mb-12 max-w-2xl mx-auto">
              Discover world-class accommodations, exceptional service, and unforgettable moments at our exclusive collection of hotels and resorts.
            </p>

            {/* Search Form */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="max-w-4xl mx-auto"
            >
              <Card variant="glass" className="p-6">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                  <div className="relative">
                    <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                    <Input
                      placeholder="City or Hotel"
                      className="pl-10 h-12 bg-secondary border-border"
                    />
                  </div>
                  <div className="relative">
                    <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                    <Input
                      type="date"
                      className="pl-10 h-12 bg-secondary border-border"
                    />
                  </div>
                  <div className="relative">
                    <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                    <Input
                      type="date"
                      className="pl-10 h-12 bg-secondary border-border"
                    />
                  </div>
                  <Button variant="hero" size="lg" className="h-12">
                    <Search className="w-5 h-5 mr-2" />
                    Search Rooms
                  </Button>
                </div>
              </Card>
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <div className="w-6 h-10 rounded-full border-2 border-muted-foreground/30 flex items-start justify-center p-2">
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ repeat: Infinity, duration: 1.5 }}
              className="w-1.5 h-1.5 rounded-full bg-primary"
            />
          </div>
        </motion.div>
      </section>

      {/* Hotels Section */}
      <section className="py-24" id="hotels">
        <div className="container mx-auto px-4">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="text-center mb-16"
          >
            <motion.p variants={fadeInUp} className="text-primary font-medium mb-4">
              OUR DESTINATIONS
            </motion.p>
            <motion.h2 variants={fadeInUp} className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-6">
              Explore Our Hotels
            </motion.h2>
            <motion.p variants={fadeInUp} className="text-muted-foreground text-lg max-w-2xl mx-auto">
              From urban retreats to beachfront paradises, discover the perfect destination for your next escape.
            </motion.p>
          </motion.div>

          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {hotels.map((hotel) => (
              <motion.div key={hotel.id} variants={fadeInUp}>
                <Card variant="elevated" className="overflow-hidden group hover-lift">
                  <div className="relative h-64 overflow-hidden">
                    <img
                      src={hotel.image}
                      alt={hotel.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute top-4 right-4">
                      <Badge variant="default" className="flex items-center gap-1">
                        <Star className="w-3 h-3 fill-current" />
                        {hotel.rating}
                      </Badge>
                    </div>
                  </div>
                  <CardContent className="p-6">
                    <h3 className="font-heading text-xl font-semibold text-foreground mb-2">
                      {hotel.name}
                    </h3>
                    <p className="text-muted-foreground text-sm flex items-center gap-2 mb-4">
                      <MapPin className="w-4 h-4" />
                      {hotel.city}
                    </p>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-muted-foreground">
                        From <span className="text-xl font-semibold text-foreground">$150</span>/night
                      </span>
                      <Button variant="outline" size="sm">View Rooms</Button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Featured Rooms Section */}
      <section className="py-24 bg-card" id="rooms">
        <div className="container mx-auto px-4">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="text-center mb-16"
          >
            <motion.p variants={fadeInUp} className="text-primary font-medium mb-4">
              ACCOMMODATIONS
            </motion.p>
            <motion.h2 variants={fadeInUp} className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-6">
              Featured Rooms
            </motion.h2>
            <motion.p variants={fadeInUp} className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Each room is thoughtfully designed to provide the ultimate in comfort and luxury.
            </motion.p>
          </motion.div>

          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {availableRooms.slice(0, 6).map((room) => {
              const category = roomCategories.find((c) => c.id === room.categoryId);
              const hotel = hotels.find((h) => h.id === room.hotelId);
              return (
                <motion.div key={room.id} variants={fadeInUp}>
                  <Card variant={room.isPromoted ? "gold" : "elevated"} className="overflow-hidden group hover-lift">
                    <div className="relative h-56 overflow-hidden">
                      <img
                        src={room.image}
                        alt={category?.name}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      {room.isPromoted && (
                        <div className="absolute top-4 left-4">
                          <Badge variant="default" className="flex items-center gap-1">
                            <Sparkles className="w-3 h-3" />
                            Featured
                          </Badge>
                        </div>
                      )}
                      <div className="absolute top-4 right-4">
                        <Badge variant="available">Available</Badge>
                      </div>
                    </div>
                    <CardContent className="p-6">
                      <div className="flex items-center gap-2 mb-2">
                        <span className="text-xs text-muted-foreground">{hotel?.name}</span>
                      </div>
                      <h3 className="font-heading text-xl font-semibold text-foreground mb-2">
                        {category?.name}
                      </h3>
                      <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                        {category?.description}
                      </p>
                      <div className="flex flex-wrap gap-2 mb-4">
                        {category?.amenities.slice(0, 3).map((amenity) => (
                          <Badge key={amenity} variant="secondary" className="text-xs">
                            {amenity}
                          </Badge>
                        ))}
                      </div>
                      <div className="flex items-center justify-between pt-4 border-t border-border">
                        <span className="text-sm text-muted-foreground">
                          <span className="text-2xl font-bold text-foreground">${room.price}</span>/night
                        </span>
                        <Button variant="hero" size="sm">Book Now</Button>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <Link to="/rooms">
              <Button variant="outline" size="lg">View All Rooms</Button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Amenities Section */}
      <section className="py-24" id="amenities">
        <div className="container mx-auto px-4">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="text-center mb-16"
          >
            <motion.p variants={fadeInUp} className="text-primary font-medium mb-4">
              WORLD-CLASS AMENITIES
            </motion.p>
            <motion.h2 variants={fadeInUp} className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-6">
              Everything You Need
            </motion.h2>
          </motion.div>

          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6"
          >
            {amenities.map((amenity) => (
              <motion.div key={amenity.label} variants={fadeInUp}>
                <Card variant="glass" className="p-6 text-center hover-lift cursor-pointer">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center">
                    <amenity.icon className="w-8 h-8 text-primary" />
                  </div>
                  <p className="font-medium text-foreground">{amenity.label}</p>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-card">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative overflow-hidden rounded-3xl gold-gradient p-12 md:p-20 text-center"
          >
            <div className="relative z-10">
              <h2 className="font-heading text-3xl md:text-5xl font-bold text-primary-foreground mb-6">
                Ready to Experience Luxury?
              </h2>
              <p className="text-primary-foreground/80 text-lg mb-8 max-w-2xl mx-auto">
                Book your stay today and discover why guests around the world choose LuxeStay for their most memorable moments.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Button size="xl" className="bg-background text-foreground hover:bg-background/90">
                  Book Your Stay
                </Button>
                <Button size="xl" variant="glass" className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10">
                  Contact Us
                </Button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <PublicFooter />
    </div>
  );
}
