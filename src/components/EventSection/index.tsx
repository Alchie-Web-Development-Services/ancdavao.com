import React from "react";
import Link from "next/link";
import Image from "next/image";
import { FaCalendarAlt, FaMapMarkerAlt, FaClock } from "react-icons/fa";

const EventSection: React.FC = () => {
  const event = { id: 1 }; // Mock event object for static display
  return (
    <section className="py-20 bg-neutral-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-neutral-800">Our Event</h2>
          <p className="text-neutral-600 max-w-2xl mx-auto mt-4">
            Slide an hope of body. Any nay shyness article matters own removal
            nothing his forming. Gay own additions education satisfied the
            perpetual. If he cause manor happy. Without farther she exposed saw
            man led. Along on happy could cease green oh.
          </p>
        </div>
        <div className="bg-white p-8 rounded-lg shadow-lg max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <Image
                src="https://picsum.photos/800/600?random"
                alt="Community event"
                width={800}
                height={600}
                className="rounded-lg shadow-md"
              />
            </div>
            <div>
              <div className="flex items-center text-neutral-600 space-x-6 mb-4">
                <span className="flex items-center">
                  <FaCalendarAlt className="mr-2 text-indigo-600" /> 12 Oct 2018
                </span>
                <span className="flex items-center">
                  <FaMapMarkerAlt className="mr-2 text-indigo-600" /> King
                  Street, Melbourne
                </span>
                <span className="flex items-center">
                  <FaClock className="mr-2 text-indigo-600" /> 9:00 - 16:00
                </span>
              </div>
              <h3 className="text-3xl font-bold text-neutral-800 mb-4">
                Paid Hill Fine Ten Now Love
              </h3>
              <p className="text-neutral-600 mb-6">
                An an valley indeed so no wonder future nature vanity. Debating
                all she mistaken indulged believed provided declared. He many
                kept on draw lain song as. Of an thrown am warmly merely result.
                An an valley indeed so no wonder future nature vanity. Debating
                all she mistaken indulged believed provided declared.
              </p>
              <Link
                href={`/events/${event.id}`}
                className="bg-indigo-600 text-white px-8 py-4 rounded-md font-semibold hover:bg-indigo-700 transition-colors duration-300"
              >
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EventSection;
