import React from "react";
import Link from "next/link";
import Image from "next/image";
import PageHeader from "@/components/PageHeader";
import SEO from "@/components/SEO";

const NewsEvents: React.FC = () => {
  // Sample news and events data - replace with actual data from your backend
  const news = [
    {
      id: 1,
      title: "ANC Davao Launches New Education Initiative",
      excerpt:
        "A new program aimed at improving digital literacy among underprivileged children in Davao City.",
      date: "May 20, 2024",
      category: "News",
      image: "https://picsum.photos/1920/1080?random",
      link: "/news/education-initiative-launch",
    },
    {
      id: 2,
      title: "Annual Report 2023 Released",
      excerpt:
        "Read about our achievements and impact over the past year in our newly released annual report.",
      date: "April 15, 2024",
      category: "Announcement",
      image: "https://picsum.photos/1920/1080?random",
      link: "/news/annual-report-2023",
    },
  ];

  const upcomingEvents = [
    {
      id: 1,
      title: "Community Health Fair",
      date: "June 10, 2024",
      time: "9:00 AM - 3:00 PM",
      location: "Barangay 76-A Gymnasium",
      description:
        "Free medical check-ups, vaccinations, and health education for the community.",
      link: "/events/community-health-fair",
    },
    {
      id: 2,
      title: "Back-to-School Drive",
      date: "June 15, 2024",
      time: "8:00 AM - 5:00 PM",
      location: "ANC Davao Main Office",
      description:
        "Help us provide school supplies to underprivileged children for the upcoming school year.",
      link: "/events/back-to-school-drive",
    },
    {
      id: 3,
      title: "Volunteer Orientation",
      date: "June 20, 2024",
      time: "2:00 PM - 4:00 PM",
      location: "Online via Zoom",
      description:
        "Learn how you can get involved and make a difference in your community.",
      link: "/events/volunteer-orientation",
    },
  ];

  return (
    <div className="min-h-screen">
      <SEO
        title="News & Events"
        description="Stay updated with the latest news, announcements, and upcoming events from ANC Davao. Learn about our impact and how to participate."
        keywords="ANC Davao news, events, announcements, updates, community events, latest news, upcoming events"
      />
      {/* Page Header */}
      <PageHeader
        title="News & Events"
        subtitle="Stay updated with the latest news and upcoming events from ANC Davao"
        backgroundImage="https://picsum.photos/1920/1080?random"
      />

      {/* Latest News */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Latest News</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {news.map((item) => (
              <div
                key={item.id}
                className="bg-white rounded-lg shadow-md overflow-hidden"
              >
                <div className="h-48 overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.title}
                    width={800}
                    height={600}
                    className="w-full h-48 object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm font-medium text-primary-600">
                      {item.category}
                    </span>
                    <span className="text-sm text-gray-500">{item.date}</span>
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                  <p className="text-gray-600 mb-4">{item.excerpt}</p>
                  <Link
                    href={item.link}
                    className="text-primary-600 hover:underline font-medium"
                  >
                    Read more →
                  </Link>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Link
              href="/news"
              className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-primary-600 hover:bg-primary-700 transition-colors"
            >
              View All News
            </Link>
          </div>
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            Upcoming Events
          </h2>

          <div className="max-w-3xl mx-auto space-y-6 mb-12">
            {upcomingEvents.map((event) => (
              <div
                key={event.id}
                className="bg-white rounded-lg shadow-md overflow-hidden"
              >
                <div className="md:flex">
                  <div className="md:w-1/3 bg-primary-700 text-white p-6 flex flex-col justify-center items-center text-center">
                    <div className="text-3xl font-bold">
                      {new Date(event.date).getDate()}
                    </div>
                    <div className="text-xl uppercase">
                      {new Date(event.date).toLocaleString("default", {
                        month: "short",
                      })}
                    </div>
                  </div>
                  <div className="p-6 md:w-2/3">
                    <h3 className="text-xl font-semibold mb-2">
                      {event.title}
                    </h3>
                    <div className="flex items-center text-gray-600 mb-2">
                      <svg
                        className="w-4 h-4 mr-2"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                      {event.time}
                    </div>
                    <div className="flex items-center text-gray-600 mb-3">
                      <svg
                        className="w-4 h-4 mr-2"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                        />
                      </svg>
                      {event.location}
                    </div>
                    <p className="text-gray-600 mb-4">{event.description}</p>
                    <Link
                      href={event.link}
                      className="text-primary-600 hover:underline font-medium"
                    >
                      Learn more →
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Link
              href="/events"
              className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-primary-600 hover:bg-primary-700 transition-colors"
            >
              View All Events
            </Link>
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-16 bg-primary-700 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Stay Updated</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Subscribe to our newsletter to receive the latest news and event
            updates directly to your inbox.
          </p>

          <form className="max-w-md mx-auto">
            <div className="flex">
              <input
                type="email"
                placeholder="Your email address"
                className="flex-grow px-4 py-3 rounded-l-md focus:outline-none focus:ring-2 focus:ring-teal-500 text-gray-900"
                required
              />
              <button
                type="submit"
                className="bg-primary-900 hover:bg-primary-800 text-white px-6 py-3 rounded-r-md transition-colors"
              >
                Subscribe
              </button>
            </div>
          </form>
        </div>
      </section>
    </div>
  );
};

export default NewsEvents;
