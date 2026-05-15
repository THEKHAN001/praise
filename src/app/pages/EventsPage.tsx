import Button from "@/components/Button";
import {
  CalendarDays,
  Clock3,
  MapPin,
  Plus,
} from "lucide-react";

const events = [
  {
    id: 1,
    title: "Youth Summit 2024",
    type: "YOUTH",
    typeColor: "bg-[#163E9F]",
    date: "Sat, Aug 12",
    time: "10:00 AM",
    location: "Main Auditorium, VBCI HQ",
    image:
      "https://images.unsplash.com/photo-1516280440614-37939bbacd81?w=1000",
  },

  {
    id: 2,
    title: "Leadership Workshop",
    type: "WORKSHOP",
    typeColor: "bg-[#7C3AED]",
    date: "Tue, Sept 05",
    time: "02:00 PM",
    location: "Conference Room A",
    image:
      "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=1000",
  },

  {
    id: 3,
    title: "Family Day Out",
    type: "SOCIAL",
    typeColor: "bg-[#C2410C]",
    date: "Sun, Sept 17",
    time: "12:00 PM",
    location: "Central Park Gardens",
    image:
      "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=1000",
  },

  {
    id: 4,
    title: "Night of Praise",
    type: "WORSHIP",
    typeColor: "bg-[#4338CA]",
    date: "Fri, Oct 06",
    time: "07:00 PM",
    location: "Youth Hall Annex",
    image:
      "https://images.unsplash.com/photo-1501386761578-eac5c94b800a?w=1000",
  },
];

export default function EventsPage() {
  return (
    <div className="min-h-screen bg-[#F5F7FB] px-6 py-5">
      {/* HEADER */}
      <div className="mb-8 flex flex-col gap-5 xl:flex-row xl:items-start xl:justify-between">
        {/* LEFT */}
        <div>
          <h1 className="text-4xl font-bold text-[#111827]">
            Church Events
          </h1>

          <p className="mt-2 max-w-2xl text-sm text-[#6B7280]">
            Manage and organize your upcoming spiritual gatherings and
            community summits.
          </p>
        </div>

        {/* RIGHT */}
        <div className="flex flex-wrap items-center gap-3">
          {/* FILTERS */}
          <div className="flex overflow-hidden rounded-xl border border-[#D9DFEA] bg-white">
            <button className="bg-[#F5F7FB] px-5 py-2.5 text-sm font-medium text-[#163E9F]">
              Upcoming
            </button>

            <button className="px-5 py-2.5 text-sm font-medium text-[#6B7280] hover:bg-[#F9FAFB]">
              Past
            </button>
          </div>

          {/* BUTTON */}
          <Button
            onClick={() => {}}
            text={
              <>
                <Plus className="mr-2 h-4 w-4" />
                Create Event
              </>
            }
            className="bg-[#163E9F] px-5 py-2.5 text-sm font-medium text-white hover:bg-[#12327F]"
          />
        </div>
      </div>

      {/* EVENTS GRID */}
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4">
        {events.map((event) => (
          <div
            key={event.id}
            className="overflow-hidden rounded-2xl border border-[#D9DFEA] bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
          >
            {/* IMAGE */}
            <div className="relative h-48 overflow-hidden">
              <img
                src={event.image}
                alt={event.title}
                className="h-full w-full object-cover"
              />

              {/* TAG */}
              <div
                className={`absolute right-3 top-3 rounded-lg px-3 py-1 text-xs font-semibold tracking-wide text-white ${event.typeColor}`}
              >
                {event.type}
              </div>
            </div>

            {/* CONTENT */}
            <div className="p-5">
              {/* TITLE */}
              <h2 className="mb-4 text-2xl font-bold leading-tight text-[#111827]">
                {event.title}
              </h2>

              {/* DATE */}
              <div className="mb-3 flex items-center gap-2 text-sm text-[#6B7280]">
                <CalendarDays className="h-4 w-4 text-[#163E9F]" />

                <span>
                  {event.date} • {event.time}
                </span>
              </div>

              {/* LOCATION */}
              <div className="mb-5 flex items-center gap-2 text-sm text-[#6B7280]">
                <MapPin className="h-4 w-4 text-[#163E9F]" />

                <span>{event.location}</span>
              </div>

              {/* DIVIDER */}
              <div className="mb-5 h-px bg-[#E5E7EB]" />

              {/* ACTIONS */}
              <div className="flex items-center gap-3">
                <button className="flex-1 rounded-lg bg-[#F3F4F6] px-4 py-2 text-sm font-medium text-[#374151] transition-colors hover:bg-[#E5E7EB]">
                  Edit
                </button>

                <button className="flex-1 rounded-lg bg-[#163E9F] px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-[#12327F]">
                  View Details
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* EMPTY SECTION */}
      <div className="mt-10 rounded-2xl border-2 border-dashed border-[#D9DFEA] bg-white px-6 py-16">
        <div className="mx-auto flex max-w-xl flex-col items-center text-center">
          {/* ICON */}
          <div className="mb-5 flex h-16 w-16 items-center justify-center rounded-2xl bg-[#F5F7FB]">
            <Clock3 className="h-8 w-8 text-[#9CA3AF]" />
          </div>

          {/* TITLE */}
          <h2 className="text-3xl font-bold text-[#111827]">
            End of upcoming events
          </h2>

          {/* TEXT */}
          <p className="mt-3 text-sm leading-7 text-[#6B7280]">
            Check back later for more scheduled church activities or start
            planning a new one today.
          </p>

          {/* BUTTON */}
          <button className="mt-8 rounded-xl bg-[#163E9F] px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#12327F]">
            Schedule New Event
          </button>
        </div>
      </div>
    </div>
  );
}