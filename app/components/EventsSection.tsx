"use client";
import { Calendar, Clock, MapPin } from "lucide-react";
import Link from "next/link";

const events = [
  {
    date: "JAN 22",
    title: "Parents’ Meeting",
    time: "9:00AM - 2:00PM",
    location: "Conference Hall",
    href: "/events/jan22",
  },
  {
    date: "JAN 22",
    title: "Parents’ Meeting",
    time: "9:00AM - 2:00PM",
    location: "Conference Hall",
    href: "/events/jan22",
  },
];

const EventsSection = () => {
  return (
    <section className="bg-transparent py-24">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
        {/* Left panel */}
        <div className="bg-white text-slate-800 rounded-3xl p-12 shadow-lg flex flex-col justify-center text-center lg:text-left">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            See <span className="italic">What</span> Goes On
          </h2>
          <p className="text-gray-500 mb-6">
            Stay up to date and make sure you never miss out on exciting events
            and performances.
          </p>
          <Link
            href="/calendar"
            className="inline-block bg-gray-100 text-gray-800 font-medium px-6 py-2 rounded-full hover:bg-gray-200 transition"
          >
            View Full Calendar
          </Link>
        </div>

        {/* Event cards */}
        {events.map((event, idx) => (
          <div
            key={idx}
            className="bg-blue-400 rounded-2xl p-6 text-white relative overflow-hidden shadow-md hover:scale-105 transition-transform"
          >
            {/* Date tag */}
            <div className="absolute top-0 left-0 bg-orange-400 px-4 py-2 rounded-br-xl font-bold">
              {event.date}
            </div>

            {/* Event info */}
            <h3 className="text-xl font-semibold mt-6 mb-4">{event.title}</h3>

            <div className="flex items-center gap-2 mb-2 text-sm">
              <Clock className="w-4 h-4" />
              <span>{event.time}</span>
            </div>

            <div className="flex items-center gap-2 mb-4 text-sm">
              <MapPin className="w-4 h-4" />
              <span>{event.location}</span>
            </div>

            <Link
              href={event.href}
              className="text-green-200 underline font-medium text-sm hover:text-white"
            >
              Read more
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
};

export default EventsSection;
