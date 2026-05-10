import {
  Users,
  ShoppingCart,
  TrendingUp,
  TrendingDown,
  DollarSign,
  Activity,
  Star,
  Clock,
  BarChart2,
  Globe,
  Package,
  Circle,
} from "lucide-react";

import type {
  IconKey,
  ColorKey,
  StatCardData,
} from "@/types/stats";

// ─── Icon Registry ────────────────────────────────────────────────────────────

const ICON_REGISTRY = {
  Users,
  ShoppingCart,
  TrendingUp,
  TrendingDown,
  DollarSign,
  Activity,
  Star,
  Clock,
  BarChart2,
  Globe,
  Package,
} as const;

// Fallback icon for invalid backend values
const FALLBACK_ICON = Circle;

// ─── Color Registry ───────────────────────────────────────────────────────────

const STAT_COLORS: Record<ColorKey, { iconClass: string }> = {
  blue: {
    iconClass: "text-blue-500",
  },
  green: {
    iconClass: "text-emerald-500",
  },
  amber: {
    iconClass: "text-amber-500",
  },
  violet: {
    iconClass: "text-violet-500",
  },
  rose: {
    iconClass: "text-rose-500",
  },
  cyan: {
    iconClass: "text-cyan-500",
  },
};

const DEFAULT_STAT_COLOR = STAT_COLORS.blue;

// ─── Component ────────────────────────────────────────────────────────────────

export default function StatCard({
  label,
  value,
  icon,
  color,
  change,
  up,
}: StatCardData) {
  const Icon = ICON_REGISTRY[icon as IconKey] ?? FALLBACK_ICON;

  const { iconClass } =
    STAT_COLORS[color as ColorKey] ?? DEFAULT_STAT_COLOR;

  const ChangeIcon = up ? TrendingUp : TrendingDown;

  return (
    <div className="relative overflow-hidden rounded-2xl border border-gray-100 bg-white p-5 flex flex-col gap-3">
      
      {/* Icon + Label */}
      <div className="flex items-center gap-2">
        <Icon
          size={18}
          strokeWidth={1.75}
          className={iconClass}
          aria-hidden
        />

        <span className="text-sm text-gray-500">
          {label}
        </span>
      </div>

      {/* Value */}
      <p className="text-2xl font-medium leading-none text-gray-900">
        {value}
      </p>

      {/* Change */}
      <span
        className={`flex items-center gap-1 text-xs ${
          up ? "text-emerald-600" : "text-rose-600"
        }`}
      >
        <ChangeIcon size={13} aria-hidden />

        {change} vs last period
      </span>

      {/* Watermark */}
      <Icon
        size={72}
        strokeWidth={1}
        className={`absolute -bottom-2 -right-2 opacity-[0.07] ${iconClass}`}
        aria-hidden
      />
    </div>
  );
}