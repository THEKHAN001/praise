import Button from "@/components/Button";
import { useNavigate } from "react-router-dom";
import { members } from "@/data/mockData";
import {
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  Search,
  UserPlus,
} from "lucide-react";

export default function MembersPage() {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen bg-[#F5F7FB] px-6 py-5">
      {/* HEADER */}
      <div className="mb-6 flex items-start justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold text-[#163E9F]">Members</h1>

          <p className="mt-1 text-sm text-[#6B7280]">
            Manage and organize your church community database.
          </p>
        </div>

        <Button
          onClick={() => {}}
          text={
            <>
              <UserPlus className="mr-2 h-4 w-4" />
              Add Member
            </>
          }
          className="bg-[#163E9F] px-5 py-2.5 text-sm font-medium text-white shadow-md hover:bg-[#12327F]"
        />
      </div>

      {/* FILTERS */}
      <div className="mb-6 grid grid-cols-1 gap-4 lg:grid-cols-[1.5fr_0.7fr_0.7fr]">
        {/* SEARCH */}
        <div className="flex items-center rounded-xl border border-[#D9DFEA] bg-white px-4">
          <Search className="h-4 w-4 text-[#6B7280]" />

          <input
            type="text"
            placeholder="Filter by name, email or ID..."
            className="w-full bg-transparent px-3 py-4 text-sm outline-none placeholder:text-[#9CA3AF]"
          />
        </div>

        {/* DEPARTMENT */}
        <button className="flex items-center justify-between rounded-xl border border-[#D9DFEA] bg-white px-4 py-4 text-sm text-[#374151]">
          All Departments
          <ChevronDown className="h-4 w-4 text-[#6B7280]" />
        </button>

        {/* STATUS */}
        <button className="flex items-center justify-between rounded-xl border border-[#D9DFEA] bg-white px-4 py-4 text-sm text-[#374151]">
          Any Status
          <ChevronDown className="h-4 w-4 text-[#6B7280]" />
        </button>
      </div>

      {/* TABLE */}
      <div className="overflow-hidden rounded-2xl border border-[#D9DFEA] bg-white">
        {/* TABLE HEADER */}
        <div className="grid grid-cols-[2fr_1.4fr_1.2fr_1fr_0.8fr] border-b border-[#E5E7EB] bg-[#F9FAFB] px-5 py-4 text-xs font-semibold uppercase tracking-wide text-[#374151]">
          <p>Name</p>
          <p>Phone</p>
          <p>Department</p>
          <p>Status</p>
          <p className="text-right">Actions</p>
        </div>

        {/* TABLE BODY */}
        <div>
          {members.map((member) => (
            <div
              key={member.id}
              onClick={() => navigate(`/members/${member.id}`)}
              className="grid cursor-pointer grid-cols-[2fr_1.4fr_1.2fr_1fr_0.8fr] items-center border-b border-[#E5E7EB] px-5 py-4 transition-colors duration-200 hover:bg-[#F9FAFB] last:border-b-0"
            >
              {/* NAME */}
              <div className="flex items-center gap-3">
                <img
                  src={member.image}
                  alt={member.name}
                  className="h-11 w-11 rounded-full object-cover"
                />

                <div>
                  <h3 className="text-sm font-semibold text-[#111827]">
                    {member.name}
                  </h3>

                  <p className="text-xs text-[#6B7280]">{member.email}</p>
                </div>
              </div>

              {/* PHONE */}
              <p className="text-sm text-[#374151]">{member.phone}</p>

              {/* DEPARTMENT */}
              <div>
                <span
                  className={`rounded-full px-3 py-1 text-xs font-medium ${member.departmentColor}`}
                >
                  {member.department}
                </span>
              </div>

              {/* STATUS */}
              <div>
                <span
                  className={`inline-flex items-center gap-1 rounded-full px-3 py-1 text-xs font-medium ${member.statusColor}`}
                >
                  <span className="h-2 w-2 rounded-full bg-current opacity-70" />
                  {member.status}
                </span>
              </div>

              {/* ACTIONS */}
              <div className="text-right">
                <button className="text-sm font-medium text-[#163E9F] hover:underline">
                  View
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* FOOTER */}
        <div className="flex flex-col gap-4 border-t border-[#E5E7EB] px-5 py-4 text-sm text-[#6B7280] md:flex-row md:items-center md:justify-between">
          <p>Showing 1-4 of 128 members</p>

          {/* PAGINATION */}
          <div className="flex items-center gap-2">
            <button className="flex h-9 w-9 items-center justify-center rounded-lg border border-[#E5E7EB] text-[#9CA3AF]">
              <ChevronLeft className="h-4 w-4" />
            </button>

            <button className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#163E9F] text-sm font-medium text-white">
              1
            </button>

            <button className="flex h-9 w-9 items-center justify-center rounded-lg text-sm text-[#374151]">
              2
            </button>

            <button className="flex h-9 w-9 items-center justify-center rounded-lg text-sm text-[#374151]">
              3
            </button>

            <span className="px-1">...</span>

            <button className="flex h-9 w-9 items-center justify-center rounded-lg text-sm text-[#374151]">
              32
            </button>

            <button className="flex h-9 w-9 items-center justify-center rounded-lg border border-[#E5E7EB] text-[#374151]">
              <ChevronRight className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
