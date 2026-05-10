export type IconKey =
  | "Users"
  | "ShoppingCart"
  | "TrendingUp"
  | "TrendingDown"
  | "DollarSign"
  | "Activity"
  | "Star"
  | "Clock"
  | "BarChart2"
  | "Globe"
  | "Package";

export type ColorKey =
  | "blue"
  | "green"
  | "amber"
  | "violet"
  | "rose"
  | "cyan";

export interface StatCardData {
  label: string;
  value: string;
  icon: IconKey;
  color: ColorKey;
  change: string;
  up: boolean;
}