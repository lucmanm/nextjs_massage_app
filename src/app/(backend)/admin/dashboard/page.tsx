import { CardStats } from "@/components/card";
import { Users, UserPlus, DollarSign, Activity } from "lucide-react";

export default function Dashboard() {
  return (
    <div className="min-h-screen p-4 w-full">
      {/* Top Cards */}
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4 *:cursor-pointer">
        <CardStats title="Visitors" value="1,234" icon={Activity} description="7% increase from last week" />
        <CardStats title="New Customers" value="56" icon={UserPlus} description="12% increase from last month" />
        <CardStats title="Sales" value="$9,876" icon={DollarSign} description="15% increase from last quarter" />
        <CardStats title="Total Users" value="5,678" icon={Users} description="3% increase from last year" />
      </div>
    </div>
  );
}
