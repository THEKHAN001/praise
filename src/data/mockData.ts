import type { StatCardData } from "@/types/stats";
import { UserPlus, CalendarCheck, Wallet } from "lucide-react";

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
  },
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

export const members = [
  {
    id: 1,
    name: "Emanuel Mensah",
    email: "emanuel.m@vbci.org",
    phone: "+233 24 123 4567",
    department: "Choir",
    departmentColor: "bg-gray-200 text-gray-700",
    status: "Active",
    statusColor: "bg-green-100 text-green-700",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200",
    joinDate: "January 12, 2018",
    cellGroup: "Victory Heights A2",
    maritalStatus: "Married",
    totalTithes: "₵4,250",
    attendanceRate: "88%",
  },

  {
    id: 2,
    name: "Sarah Adobea",
    email: "s.adobea@gmail.com",
    phone: "+233 50 987 6543",
    department: "Ushering",
    departmentColor: "bg-gray-200 text-gray-700",
    status: "On Leave",
    statusColor: "bg-green-100 text-green-700",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200",
    joinDate: "March 18, 2020",
    cellGroup: "Grace Family",
    maritalStatus: "Single",
    totalTithes: "₵2,100",
    attendanceRate: "74%",
  },

  {
    id: 3,
    name: "Kofi Owusu",
    email: "kofi.o@vbci.org",
    phone: "+233 20 555 0192",
    department: "Media & IT",
    departmentColor: "bg-gray-200 text-gray-700",
    status: "On Leave",
    statusColor: "bg-green-100 text-green-700",
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=200",
    joinDate: "January 18, 2016",
    cellGroup: "Grace Family",
    maritalStatus: "Single",
    totalTithes: "₵2,100",
    attendanceRate: "74%",
  },

  {
    id: 4,
    name: "Abena Lartey",
    email: "abena.lartey@yahoo.com",
    phone: "+233 24 444 8888",
    department: "Welfare",
    departmentColor: "bg-gray-200 text-gray-700",
    status: "Inactive",
    statusColor: "bg-green-200 text-green-700",
    image: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=200",
    joinDate: "March 1, 2020",
    cellGroup: "Hope Family",
    maritalStatus: "Maried",
    totalTithes: "₵2,100",
    attendanceRate: "74%",
  },
];

export const mockMemberProfile: StatCardData[] = [
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
];

export const mockFinance: StatCardData[] = [
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
  },
];

export const transactions = [
  {
    name: "Samuel Adjei",
    amount: "$1,200.00",
    type: "Tithe",
    date: "Oct 24, 2023",
    method: "Bank Transfer",
    initials: "SA",
  },
  {
    name: "Elizabeth Osei",
    amount: "$250.00",
    type: "Offering",
    date: "Oct 22, 2023",
    method: "Cash",
    initials: "EO",
  },
  {
    name: "Kwame Mensah",
    amount: "$5,000.00",
    type: "Seed",
    date: "Oct 20, 2023",
    method: "Credit Card",
    initials: "KM",
  },
  {
    name: "Abena Appiah",
    amount: "$800.00",
    type: "Tithe",
    date: "Oct 19, 2023",
    method: "Bank Transfer",
    initials: "AA",
  },
  {
    name: "John Boateng",
    amount: "$100.00",
    type: "Offering",
    date: "Oct 18, 2023",
    method: "Cash",
    initials: "JB",
  },
];
