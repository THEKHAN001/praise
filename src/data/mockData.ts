import type { StatCardData } from "@/types/stats";

export const mockDashboard: StatCardData[] = [
  {
    label: "Total users",
    value: "24,512",
    icon: "Users",
    color: "blue",
    change: "+12%",
    up: true,
  },
  {
    label: "Orders today",
    value: "1,084",
    icon: "ShoppingCart",
    color: "green",
    change: "+4.3%",
    up: true,
  },
  {
    label: "Revenue",
    value: "$98.4k",
    icon: "DollarSign",
    color: "amber",
    change: "-2.1%",
    up: false,
  },
  {
    label: "Active sessions",
    value: "3,290",
    icon: "Activity",
    color: "violet",
    change: "+8.7%",
    up: true,
  }
];