"use client";

import { MapPin, Mail, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card } from "@/components/ui/card";

export default function ConnectWithUs() {
  return (
    <Card className="max-w-5xl mx-auto border border-blue-700">
      <div className="grid md:grid-cols-[400px_1fr]">
        {/* Left Sidebar */}
        <div className="bg-blue-700 text-white p-8 rounded-l-lg space-y-8">
          <div className="space-y-2">
            <h2 className="text-sm font-semibold tracking-wide">CONNECT WITH US</h2>
            <h1 className="text-3xl font-bold">Your Wellness Journey Awaits</h1>
          </div>

          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-white/10 rounded-full">
                <MapPin className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-semibold">Our Location</h3>
                <p className="text-sm text-white/90">Jeddah Saudi Arabia</p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="p-2 bg-white/10 rounded-full">
                <Mail className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-semibold">Email Us</h3>
                <p className="text-sm text-white/90">info@touchmassage.com</p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="p-2 bg-white/10 rounded-full">
                <Phone className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-semibold">Call Us</h3>
                <p className="text-sm text-white/90">(000) 000-0000</p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Form */}
        <div className="p-8 space-y-6">
          <div className="grid md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <label htmlFor="firstName" className="text-sm font-medium">
                First Name
              </label>
              <Input id="firstName" placeholder="First Name" />
            </div>
            <div className="space-y-2">
              <label htmlFor="lastName" className="text-sm font-medium">
                Last Name
              </label>
              <Input id="lastName" placeholder="Last Name" />
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <label htmlFor="email" className="text-sm font-medium">
                Your Email
              </label>
              <Input id="email" type="email" placeholder="Your Email" />
            </div>
            <div className="space-y-2">
              <label htmlFor="phone" className="text-sm font-medium">
                Your Phone
              </label>
              <Input id="phone" type="tel" placeholder="Your Phone" />
            </div>
          </div>

          <div className="space-y-2">
            <label htmlFor="message" className="text-sm font-medium">
              Your Message
            </label>
            <Textarea id="message" placeholder="Your Message" className="min-h-[150px]" />
          </div>

          <Button>SUBMIT YOUR INQUIRY</Button>
        </div>
      </div>
    </Card>
  );
}
