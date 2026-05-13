import type { StatCardData } from "@/types/stats";
import {
  UserPlus,
  CalendarCheck,
  Wallet,
} from "lucide-react";

export const mockDashboard: StatCardData[] = [
  {
    label: "Total Members",
    value: "24,512",
    icon: "Users",
    color: "blue",
    change: "+12%",
    up: true,
  },
  {
    label: "Attendance Today",
    value: "1,084",
    icon: "ShoppingCart",
    color: "green",
    change: "+4.3%",
    up: true,
  },
  {
    label: "Total Donations",
    value: "$98.4k",
    icon: "DollarSign",
    color: "amber",
    change: "-2.1%",
    up: false,
  },
  {
    label: "Upcoming Events",
    value: "3,290",
    icon: "Activity",
    color: "violet",
    change: "+8.7%",
    up: true,
  }
];

export const recentActivity = [
  {
    title: "New member joined",
    desc: "Sarah Jenkins completed registration.",
    time: "2 HOURS AGO",
    icon: UserPlus,
    color: "bg-blue-100 text-blue-600",
  },
  {
    title: "Event: Youth Summit created",
    desc: "Assigned to: Pastor Mark",
    time: "5 HOURS AGO",
    icon: CalendarCheck,
    color: "bg-purple-100 text-purple-600",
  },
  {
    title: "Donation received from John Doe",
    desc: "Amount: $500.00 (General Fund)",
    time: "YESTERDAY",
    icon: Wallet,
    color: "bg-orange-100 text-orange-600",
  },
];

export const attendanceData = [
  { day: "Mon", value: 60 },
  { day: "Tue", value: 70 },
  { day: "Wed", value: 55 },
  { day: "Thu", value: 95 },
  { day: "Fri", value: 78 },
  { day: "Sat", value: 65 },
  { day: "Sun", value: 88 },
];

export const donationData = [
  {
    label: "General Fund",
    amount: "$8,250",
    percent: 65,
    color: "bg-[#163E9F]",
  },
  {
    label: "Missions",
    amount: "$2,750",
    percent: 22,
    color: "bg-[#7C3AED]",
  },
  {
    label: "Building Project",
    amount: "$1,500",
    percent: 12,
    color: "bg-[#A16207]",
  },
];