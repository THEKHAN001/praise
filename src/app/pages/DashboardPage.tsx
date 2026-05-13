import Button from "@/components/Button";
import StatCard from "@/components/StatsCard";
import {
  attendanceData,
  donationData,
  mockDashboard,
  recentActivity,
} from "@/data/mockData";
import { CalendarDays, Download, Eye } from "lucide-react";

import { ResponsiveContainer, BarChart, Bar, XAxis, Tooltip } from "recharts";

export default function DashboardPage() {
  return (
    <div className="min-h-screen bg-[#F5F7FB] px-6 py-5">
      {/* HEADER */}
      <div className="mb-6 flex items-start justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-[#111827]">
            Church Dashboard
          </h1>

          <p className="mt-1 text-sm text-[#6B7280]">
            Welcome back, Admin. Here is what&apos;s happening at VBCI Systems
            today.
          </p>
        </div>

        <div className="flex items-center gap-3">
          <Button
            onClick={() => {}}
            text={
              <>
                <CalendarDays className="mr-2 h-4 w-4" />
                Aug 24, 2024
              </>
            }
            className=" border-2 border-[#C5C5D3] px-4 py-2 text-sm font-medium  hover:bg-[#c0c2c5]"
          />

          <Button
            onClick={() => {}}
            text={
              <>
                <Download className="mr-2 h-4 w-4" />
                Export Report
              </>
            }
            className="bg-[#163E9F] px-4 py-2 text-sm font-medium text-white hover:bg-[#12327F]"
          />
        </div>
      </div>

      <div className="mb-6 grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
        {mockDashboard.map((stat) => (
          <StatCard key={stat.label} {...stat} />
        ))}
      </div>

      <div className="grid grid-cols-1 gap-6 xl:grid-cols-3">
        <div className="rounded-2xl border border-[#E5E7EB] bg-white p-5 shadow-sm xl:col-span-2">
          <div className="mb-6 flex items-center justify-between">
            <div>
              <h2 className="text-lg font-semibold text-[#111827]">
                Attendance Trends
              </h2>
            </div>

            <button className="rounded-md border border-[#E5E7EB] px-3 py-1 text-xs text-[#6B7280]">
              Last 7 Days
            </button>
          </div>

          <div className="h-70">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={attendanceData}>
                <XAxis
                  dataKey="day"
                  axisLine={false}
                  tickLine={false}
                  tick={{ fill: "#6B7280", fontSize: 12 }}
                />

                <Tooltip cursor={{ fill: "transparent" }} />

                <Bar
                  dataKey="value"
                  radius={[6, 6, 0, 0]}
                  fill="#B9C3F9"
                  barSize={100}
                  activeBar={{ fill: "#818CF8" }}
                />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="rounded-2xl border border-[#E5E7EB] bg-white p-5 shadow-sm">
          <div className="mb-6 flex items-center justify-between">
            <h2 className="text-lg font-semibold text-[#111827]">
              Recent Activity
            </h2>

            <button className="flex items-center gap-1 text-sm font-medium cursor-pointer hover:brightness-70 text-[#163E9F]">
              <Eye className="h-4 w-4" />
              View All
            </button>
          </div>

          <div className="space-y-6">
            {recentActivity.map((item) => {
              const Icon = item.icon;

              return (
                <div key={item.title} className="flex gap-3">
                  <div
                    className={`flex h-10 w-10 items-center justify-center rounded-full ${item.color}`}
                  >
                    <Icon className="h-5 w-5" />
                  </div>

                  <div className="flex-1">
                    <h3 className="text-sm font-semibold text-[#111827]">
                      {item.title}
                    </h3>

                    <p className="mt-1 text-xs leading-5 text-[#6B7280]">
                      {item.desc}
                    </p>

                    <span className="mt-2 block text-[10px] font-semibold tracking-wide text-[#9CA3AF]">
                      {item.time}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="mt-6 flex items-center justify-between rounded-xl border border-[#E5E7EB] bg-[#F9FAFB] px-4 py-3">
            <div className="flex items-center gap-2">
              <div className="rounded-full bg-blue-100 p-1">
                <div className="h-2 w-2 rounded-full bg-[#163E9F]" />
              </div>

              <button className="text-sm font-medium cursor-pointer text-[#374151]">
                Auto-Sync Active
              </button>
            </div>

            <div className="h-2 w-2 rounded-full bg-green-500" />
          </div>
        </div>
      </div>

      <div className="mt-6 rounded-2xl border border-[#E5E7EB] bg-white p-5 shadow-sm">
        <div className="mb-6 flex flex-col gap-4 lg:flex-row lg:items-start lg:justify-between">
          <div>
            <h2 className="text-lg font-semibold text-[#111827]">
              Donation Overview
            </h2>

            <p className="mt-1 text-sm text-[#6B7280]">
              Financial distribution for the current fiscal month.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-4 text-xs ">
            <div className="flex items-center gap-2">
              <div className="h-2 w-2 rounded-full bg-[#163E9F]" />
              <span>General Fund</span>
            </div>

            <div className="flex items-center gap-2">
              <div className="h-2 w-2 rounded-full bg-[#7C3AED]" />
              <span>Missions</span>
            </div>

            <div className="flex items-center gap-2">
              <div className="h-2 w-2 rounded-full bg-[#A16207]" />
              <span>Building Project</span>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
          <div className="space-y-5 lg:col-span-2">
            {donationData.map((item) => (
              <div key={item.label}>
                <div className="mb-2 flex items-center justify-between text-sm">
                  <span className="font-medium text-[#374151]">
                    {item.label}
                  </span>

                  <span className="text-[#6B7280]">
                    {item.amount} ({item.percent}%)
                  </span>
                </div>

                <div className="h-3 overflow-hidden rounded-full bg-[#EEF2FF]">
                  <div
                    className={`h-full rounded-full ${item.color}`}
                    style={{ width: `${item.percent}%` }}
                  />
                </div>
              </div>
            ))}
          </div>

          <div className="flex items-center justify-center rounded-2xl bg-[#F5F7FB] p-6">
            <div className="text-center">
              <p className="text-sm text-[#6B7280]">Projected Total</p>

              <h3 className="mt-2 text-4xl font-bold text-[#111827]">
                $15,400
              </h3>

              <p className="mt-3 text-sm font-medium text-[#7C3AED]">
                +12.5% vs Last Mo
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
