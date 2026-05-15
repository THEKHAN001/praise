import StatCard from "@/components/StatsCard";
import { mockFinance, transactions } from "@/data/mockData";

import {
  Download,
  Filter,
  MoreVertical,
  Plus,
} from "lucide-react";

export default function FinancePage() {
  return (
    <div className="space-y-6 p-4">
      {/* Header */}
      <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
        <div>
          <h1 className="text-4xl font-bold text-gray-900">
            Finance
          </h1>

          <p className="mt-1 text-gray-500">
            Manage and monitor tithes, offerings, and donations.
          </p>
        </div>

        <div className="flex items-center gap-3">
          <button className="flex items-center gap-2 rounded-xl border bg-white px-4 py-3 text-sm font-medium shadow-sm transition hover:bg-gray-50">
            <Download className="h-4 w-4" />
            Export PDF/Excel
          </button>

          <button className="flex items-center gap-2 rounded-xl bg-blue-900 px-4 py-3 text-sm font-medium text-white transition hover:bg-blue-800">
            <Plus className="h-4 w-4" />
            Log Transaction
          </button>
        </div>
      </div>

      {/* Stats */}
      <div className="mb-6 grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
        {mockFinance.map((stat) => (
          <StatCard key={stat.label} {...stat} />
        ))}
      </div>

      {/* Filters */}
      <div className="flex flex-col gap-4 rounded-2xl border bg-white p-4 shadow-sm lg:flex-row lg:items-center">
        <div className="flex-1">
          <label className="mb-2 block text-xs font-semibold uppercase tracking-wide text-gray-500">
            Date Range
          </label>

          <input
            type="text"
            value="Oct 1, 2023 - Oct 31, 2023"
            readOnly
            className="w-full rounded-xl border px-4 py-3 text-sm outline-none"
          />
        </div>

        <div className="flex-1">
          <label className="mb-2 block text-xs font-semibold uppercase tracking-wide text-gray-500">
            Transaction Type
          </label>

          <select className="w-full rounded-xl border bg-white px-4 py-3 text-sm outline-none">
            <option>All Types</option>
          </select>
        </div>

        <div className="flex-1">
          <label className="mb-2 block text-xs font-semibold uppercase tracking-wide text-gray-500">
            Payment Method
          </label>

          <select className="w-full rounded-xl border bg-white px-4 py-3 text-sm outline-none">
            <option>Any Method</option>
          </select>
        </div>

        <button className="mt-6 flex h-12 w-12 items-center justify-center rounded-xl border bg-gray-50 hover:bg-gray-100">
          <Filter className="h-5 w-5" />
        </button>
      </div>

      {/* Table */}
      <div className="overflow-hidden rounded-2xl border bg-white shadow-sm">
        <table className="w-full">
          <thead className="bg-gray-50">
            <tr className="text-left text-sm font-semibold text-gray-700">
              <th className="px-6 py-4">Member Name</th>
              <th className="px-6 py-4">Amount ($)</th>
              <th className="px-6 py-4">Type</th>
              <th className="px-6 py-4">Date</th>
              <th className="px-6 py-4">Payment Method</th>
              <th className="px-6 py-4 text-right">
                Actions
              </th>
            </tr>
          </thead>

          <tbody>
            {transactions.map((transaction) => (
              <tr
                key={transaction.name}
                className="border-t text-sm"
              >
                <td className="px-6 py-4">
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-violet-100 text-xs font-bold text-violet-700">
                      {transaction.initials}
                    </div>

                    <span className="font-medium text-gray-900">
                      {transaction.name}
                    </span>
                  </div>
                </td>

                <td className="px-6 py-4 font-semibold">
                  {transaction.amount}
                </td>

                <td className="px-6 py-4">
                  <span className="rounded-full bg-violet-100 px-3 py-1 text-xs font-medium text-violet-700">
                    {transaction.type}
                  </span>
                </td>

                <td className="px-6 py-4 text-gray-500">
                  {transaction.date}
                </td>

                <td className="px-6 py-4 text-gray-500">
                  {transaction.method}
                </td>

                <td className="px-6 py-4 text-right">
                  <button className="rounded-lg p-2 hover:bg-gray-100">
                    <MoreVertical className="h-4 w-4" />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {/* Footer */}
        <div className="flex items-center justify-between border-t px-6 py-4">
          <p className="text-sm text-gray-500">
            Showing 5 of 124 transactions
          </p>

          <div className="flex items-center gap-2">
            <button className="flex h-9 w-9 items-center justify-center rounded-lg border text-sm">
              1
            </button>

            <button className="flex h-9 w-9 items-center justify-center rounded-lg border text-sm">
              2
            </button>

            <button className="flex h-9 w-9 items-center justify-center rounded-lg border text-sm">
              3
            </button>
          </div>
        </div>
      </div>

      {/* Bottom Cards */}
      <div className="grid grid-cols-1 gap-6 xl:grid-cols-2">
        {/* Financial Health */}
        <div className="rounded-3xl bg-blue-900 p-8 text-white shadow-lg">
          <h2 className="text-3xl font-bold">
            Financial Health
          </h2>

          <p className="mt-4 max-w-md text-blue-100">
            October tithes have exceeded the quarterly goal
            by 15.2%. We recommend allocating a portion to
            the building fund project.
          </p>

          <button className="mt-8 rounded-xl bg-white px-5 py-3 text-sm font-medium text-blue-900">
            View Projection Report
          </button>
        </div>

        {/* Export Card */}
        <div className="rounded-3xl border bg-white p-8 shadow-sm">
          <h2 className="text-3xl font-bold text-gray-900">
            Export Detailed Log
          </h2>

          <p className="mt-4 max-w-sm text-gray-500">
            Download a comprehensive breakdown of all
            financial records including member notes and
            audit trails.
          </p>

          <div className="mt-8 flex items-center gap-6">
            <button className="font-medium text-blue-900">
              PDF
            </button>

            <button className="font-medium text-blue-900">
              Excel
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}