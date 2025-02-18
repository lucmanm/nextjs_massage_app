"use client";

import type React from "react";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function TimeSelector() {
  const [hours, setHours] = useState<number>(0);
  const [minutes, setMinutes] = useState<number>(30);

  const handleHoursChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = Number.parseInt(e.target.value);
    if (!isNaN(value) && value >= 0 && value <= 23) {
      setHours(value);
    }
  };

  const handleMinutesChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = Number.parseInt(e.target.value);
    if (!isNaN(value) && value >= 0 && value <= 59) {
      setMinutes(value);
    }
  };

  const formatTime = () => {
    if (hours === 0 && minutes === 0) {
      return "Please select a duration";
    }

    const parts = [];
    if (hours > 0) {
      parts.push(`${hours} hour${hours > 1 ? "s" : ""}`);
    }
    if (minutes > 0) {
      parts.push(`${minutes} minute${minutes > 1 ? "s" : ""}`);
    }
    return parts.join(" and ");
  };

  return (
    <div className="w-full max-w-sm space-y-4">
      <div className="space-y-2">
        <Label htmlFor="duration">Select Massage Duration</Label>
        <div className="flex space-x-2">
          <div className="space-y-1">
            <Label htmlFor="hours" className="text-xs">
              Hours
            </Label>
            <Input
              id="hours"
              type="number"
              min={0}
              max={23}
              value={hours}
              onChange={handleHoursChange}
              className="w-20"
            />
          </div>
          <div className="space-y-1">
            <Label htmlFor="minutes" className="text-xs">
              Minutes
            </Label>
            <Input
              id="minutes"
              type="number"
              min={0}
              max={59}
              value={minutes}
              onChange={handleMinutesChange}
              className="w-20"
            />
          </div>
        </div>
      </div>
      <div className="text-sm text-muted-foreground">
        Selected time: {formatTime()}
      </div>
    </div>
  );
}
