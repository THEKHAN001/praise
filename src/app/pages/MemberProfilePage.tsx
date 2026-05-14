import Button from "@/components/Button";
import { members } from "@/data/mockData";
import { Link, useParams } from "react-router-dom";

import { CalendarDays, Mail, MapPin, Phone, Printer } from "lucide-react";

const attendanceHistory = [
  {
    date: "Oct 22, 2023",
    event: "Sunday Worship Service",
    status: "Present",
    statusColor: "bg-green-100 text-green-700",
  },
  {
    date: "Oct 18, 2023",
    event: "Mid-Week Prayer Meeting",
    status: "Absent",
    statusColor: "bg-red-100 text-red-700",
  },
  {
    date: "Oct 15, 2023",
    event: "Youth Convention Day 3",
    status: "Present",
    statusColor: "bg-green-100 text-green-700",
  },
  {
    date: "Oct 08, 2023",
    event: "Sunday Worship Service",
    status: "Present",
    statusColor: "bg-green-100 text-green-700",
  },
];

export default function MemberProfilePage() {
  const { id } = useParams();

  const member = members.find((m) => m.id === Number(id));

  if (!member) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-[#F5F7FB]">
        <h1 className="text-2xl font-bold text-red-500">Member not found</h1>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#F5F7FB] px-6 py-5">
      {/* BREADCRUMB */}
      <div className="mb-5 flex items-center gap-2 text-xs text-[#6B7280]">
        <Link
          to="/members"
          className="font-medium text-[#163E9F] hover:underline"
        >
          Members
        </Link>
        <span>{">"}</span>

        <span>{member.name}</span>
      </div>

      {/* PROFILE HEADER */}
      <div className="mb-6 rounded-2xl border border-[#D9DFEA] bg-white p-5 shadow-sm">
        <div className="flex flex-col gap-5 xl:flex-row xl:items-center xl:justify-between">
          {/* LEFT */}
          <div className="flex items-center gap-5">
            {/* IMAGE */}
            <div className="relative">
              <img
                src={member.image}
                alt={member.name}
                className="h-20 w-20 rounded-full border-4 border-white object-cover shadow-md"
              />

              <div className="absolute bottom-1 right-1 h-4 w-4 rounded-full border-2 border-white bg-green-500" />
            </div>

            {/* INFO */}
            <div>
              <div className="mb-2 flex flex-wrap items-center gap-3">
                <h1 className="text-3xl font-bold text-[#111827]">
                  {member.name}
                </h1>

                <span className="rounded-full bg-blue-100 px-3 py-1 text-xs font-semibold text-[#163E9F]">
                  {member.status}
                </span>
              </div>

              <div className="flex flex-col gap-2 text-sm text-[#6B7280] sm:flex-row sm:flex-wrap sm:items-center sm:gap-5">
                <div className="flex items-center gap-2">
                  <Mail className="h-4 w-4" />

                  <span>{member.email}</span>
                </div>

                <div className="flex items-center gap-2">
                  <Phone className="h-4 w-4" />

                  <span>{member.phone}</span>
                </div>
              </div>
            </div>
          </div>

          {/* ACTIONS */}
          <div className="flex items-center gap-3">
            <Button
              onClick={() => {}}
              text="Edit Profile"
              className="border border-[#D9DFEA] bg-white px-5 py-2.5 text-sm font-medium text-[#374151] hover:bg-gray-50"
            />

            <Button
              onClick={() => {}}
              text={
                <>
                  <Printer className="mr-2 h-4 w-4" />
                  Print ID Card
                </>
              }
              className="bg-[#163E9F] px-5 py-2.5 text-sm font-medium text-white hover:bg-[#12327F]"
            />
          </div>
        </div>
      </div>

      {/* CONTENT */}
      <div className="grid grid-cols-1 gap-6 xl:grid-cols-[2fr_1fr]">
        {/* LEFT SIDE */}
        <div className="overflow-hidden rounded-2xl border border-[#D9DFEA] bg-white shadow-sm">
          {/* TABS */}
          <div className="flex items-center gap-8 border-b border-[#E5E7EB] bg-[#F9FAFB] px-6 pt-5">
            <button className="border-b-2 border-[#163E9F] pb-4 text-sm font-semibold text-[#163E9F]">
              Attendance History
            </button>

            <button className="pb-4 text-sm text-[#6B7280] hover:text-[#111827]">
              Donations
            </button>

            <button className="pb-4 text-sm text-[#6B7280] hover:text-[#111827]">
              Group Membership
            </button>
          </div>

          {/* TABLE */}
          <div>
            {/* HEADER */}
            <div className="grid grid-cols-[1fr_1.5fr_1fr_0.7fr] bg-[#F3F4F6] px-5 py-4 text-xs font-semibold uppercase tracking-wide text-[#374151]">
              <p>Date</p>

              <p>Event Name</p>

              <p>Status</p>

              <p>Action</p>
            </div>

            {/* ROWS */}
            {attendanceHistory.map((item, index) => (
              <div
                key={index}
                className="grid grid-cols-[1fr_1.5fr_1fr_0.7fr] items-center border-b border-[#E5E7EB] px-5 py-5 last:border-b-0"
              >
                <p className="text-sm font-medium text-[#374151]">
                  {item.date}
                </p>

                <p className="text-sm text-[#111827]">{item.event}</p>

                <div>
                  <span
                    className={`inline-flex items-center gap-1 rounded-full px-3 py-1 text-xs font-medium ${item.statusColor}`}
                  >
                    <span className="h-2 w-2 rounded-full bg-current opacity-70" />

                    {item.status}
                  </span>
                </div>

                <button className="text-sm font-medium text-[#163E9F] hover:underline">
                  View
                </button>
              </div>
            ))}

            {/* FOOTER */}
            <div className="flex justify-center px-5 py-6">
              <button className="text-sm font-medium text-[#163E9F] hover:underline">
                View Full Attendance Record
              </button>
            </div>
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="space-y-6">
          {/* MEMBER DETAILS */}
          <div className="rounded-2xl border border-[#D9DFEA] bg-white p-5 shadow-sm">
            <h2 className="mb-5 text-sm font-bold uppercase tracking-wide text-[#163E9F]">
              Member Details
            </h2>

            <div className="space-y-5">
              <div>
                <p className="mb-1 text-xs uppercase text-[#9CA3AF]">
                  Join Date
                </p>

                <p className="text-sm font-medium text-[#111827]">
                  {member.joinDate}
                </p>
              </div>

              <div>
                <p className="mb-1 text-xs uppercase text-[#9CA3AF]">
                  Department
                </p>

                <p className="text-sm font-medium text-[#111827]">
                  {member.department}
                </p>
              </div>

              <div>
                <p className="mb-1 text-xs uppercase text-[#9CA3AF]">
                  Cell Group
                </p>

                <div className="flex items-center gap-2 text-sm font-medium text-[#111827]">
                  <MapPin className="h-4 w-4 text-[#6B7280]" />

                  {member.cellGroup}
                </div>
              </div>

              <div>
                <p className="mb-1 text-xs uppercase text-[#9CA3AF]">
                  Marital Status
                </p>

                <p className="text-sm font-medium text-[#111827]">
                  {member.maritalStatus}
                </p>
              </div>
            </div>
          </div>

          {/* SMALL STATS */}
          <div className="grid grid-cols-2 gap-4">
            <div className="rounded-2xl border border-[#D9DFEA] bg-white p-5 shadow-sm">
              <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-xl bg-purple-100">
                <CalendarDays className="h-5 w-5 text-purple-600" />
              </div>

              <p className="text-xs uppercase tracking-wide text-[#9CA3AF]">
                Total Tithes
              </p>

              <h3 className="mt-2 text-3xl font-bold text-[#111827]">
                {member.totalTithes}
              </h3>
            </div>

            <div className="rounded-2xl border border-[#D9DFEA] bg-white p-5 shadow-sm">
              <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-xl bg-orange-100">
                <CalendarDays className="h-5 w-5 text-orange-600" />
              </div>

              <p className="text-xs uppercase tracking-wide text-[#9CA3AF]">
                Attendance Rate
              </p>

              <h3 className="mt-2 text-3xl font-bold text-[#111827]">
                {member.attendanceRate}
              </h3>
            </div>
          </div>

          {/* NOTES */}
          <div className="rounded-2xl border border-[#D9DFEA] bg-white p-5 shadow-sm">
            <div className="mb-5 flex items-center justify-between">
              <h2 className="text-sm font-bold uppercase tracking-wide text-[#163E9F]">
                Internal Notes
              </h2>

              <button className="text-xs font-medium text-[#163E9F] hover:underline">
                Add Note
              </button>
            </div>

            <div className="rounded-xl bg-[#F5F7FB] p-4">
              <p className="italic leading-7 text-[#4B5563]">
                “Expressing interest in joining the lead choir. Needs
                orientation next month.”
              </p>

              <p className="mt-4 text-xs font-medium text-[#9CA3AF]">
                — Pastor John, Sept 14
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
