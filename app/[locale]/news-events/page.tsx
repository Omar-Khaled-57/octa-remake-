"use client";

import Image from "next/image";
import Link from "next/link";
import { useTR } from "@/useTR";
import { useState, useEffect } from "react";

export default function NewsEventsPage() {
  const tr = useTR();
  const [activeTab, setActiveTab] = useState<"news" | "events">("news");
  const [email, setEmail] = useState("");
  const [showPopup, setShowPopup] = useState(false);

  // Auto-hide popup after 3 seconds
  useEffect(() => {
    if (showPopup) {
      const timer = setTimeout(() => setShowPopup(false), 3000);
      return () => clearTimeout(timer);
    }
  }, [showPopup]);

  const news = [
    {
      id: 1,
      title: tr("News.item1.title") || "OTU Signs Partnership with Siemens",
      date: "2025-02-15",
      excerpt:
        tr("News.item1.excerpt") ||
        "New collaboration to enhance engineering education and provide student training.",
    },
    {
      id: 2,
      title: tr("News.item2.title") || "Research Conference on AI in Healthcare",
      date: "2025-02-10",
      excerpt:
        tr("News.item2.excerpt") ||
        "Faculty and students present cutting-edge research at international conference.",
    },
    {
      id: 3,
      title: tr("News.item3.title") || "Student Team Wins Robotics Competition",
      date: "2025-02-05",
      excerpt:
        tr("News.item3.excerpt") ||
        "OTU robotics club takes first place in national competition.",
    },
  ];

  const events = [
    {
      id: 1,
      title: tr("Events.item1.title") || "Open Day 2025",
      date: "2025-03-15",
      time: "10:00 AM - 4:00 PM",
      location: tr("Events.item1.location") || "Main Campus",
    },
    {
      id: 2,
      title: tr("Events.item2.title") || "Workshop: Introduction to IoT",
      date: "2025-03-20",
      time: "2:00 PM - 5:00 PM",
      location: tr("Events.item2.location") || "Engineering Building",
    },
    {
      id: 3,
      title: tr("Events.item3.title") || "Career Fair 2025",
      date: "2025-04-05",
      time: "9:00 AM - 3:00 PM",
      location: tr("Events.item3.location") || "Student Center",
    },
  ];

  // Email validation regex
  const isValidEmail = (email: string) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const handleSubscribe = () => {
    if (!email.trim() || !isValidEmail(email)) {
      // Optionally show error popup – for now we just ignore invalid input
      return;
    }
    // Here you could also send the email to your API
    setShowPopup(true);
    setEmail(""); // Clear input after successful subscription
  };

  return (
    <main className="flex pt-[15vh] w-full items-center justify-center flex-col">
      {/* Hero Section */}
      <section className="w-screen pt-32 pb-16 px-[10vw] md:px-8 lg:px-16 bg-gradient-to-b from-background to-cardBg">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              {tr("NewsEvents.title") || "News & Events"}
            </h1>
            <p className="text-xl md:text-2xl text-[var(--faded-text)] max-w-3xl mx-auto">
              {tr("NewsEvents.subtitle") ||
                "Stay updated with the latest happenings at OTU"}
            </p>
          </div>
        </div>
      </section>

      {/* Tabs */}
      <section className="w-full py-8 px-[10vw] md:px-8 lg:px-16 bg-cardBg">
        <div className="max-w-6xl mx-auto">
          <div className="flex justify-center space-x-4 mb-8">
            <button
              onClick={() => setActiveTab("news")}
              className={`px-6 py-3 rounded-lg font-semibold transition-colors ${activeTab === "news"
                  ? "bg-[var(--f-green-3)] text-text"
                  : "bg-cardBg border border-[var(--sec3-cards-border)] text-[var(--faded-text)] hover:bg-[var(--sec3-card1-bg)]"
                }`}
            >
              {tr("NewsEvents.news") || "News"}
            </button>
            <button
              onClick={() => setActiveTab("events")}
              className={`px-6 py-3 rounded-lg font-semibold transition-colors ${activeTab === "events"
                  ? "bg-[var(--f-green-3)] text-text"
                  : "bg-cardBg border border-[var(--sec3-cards-border)] text-[var(--faded-text)] hover:bg-[var(--sec3-card1-bg)]"
                }`}
            >
              {tr("NewsEvents.events") || "Events"}
            </button>
          </div>

          {/* News Tab */}
          {activeTab === "news" && (
            <div className="space-y-6">
              {news.map((item) => (
                <div
                  key={item.id}
                  className="p-6 rounded-xl bg-cardBg border border-[var(--sec3-cards-border)] hover:border-[var(--f-green-1)] transition-all"
                >
                  <div className="flex flex-col md:flex-row md:items-center justify-between mb-2">
                    <h3 className="text-xl font-bold">{item.title}</h3>
                    <span className="text-sm text-[var(--faded-text)]">
                      {new Date(item.date).toLocaleDateString()}
                    </span>
                  </div>
                  <p className="text-[var(--faded-text)] mb-4">{item.excerpt}</p>
                  <span
                    className="text-[var(--f-green-1)] font-semibold inline-flex items-center opacity-50 cursor-default"
                  >
                    {tr("NewsEvents.readMore") || "Read more"}
                    <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                    </svg>
                  </span>
                </div>
              ))}
            </div>
          )}

          {/* Events Tab */}
          {activeTab === "events" && (
            <div className="space-y-6">
              {events.map((event) => (
                <div
                  key={event.id}
                  className="p-6 rounded-xl bg-cardBg border border-[var(--sec3-cards-border)] hover:border-[var(--f-green-1)] transition-all"
                >
                  <div className="flex flex-col md:flex-row md:items-center justify-between mb-2">
                    <h3 className="text-xl font-bold">{event.title}</h3>
                    <span className="text-sm text-[var(--faded-text)]">
                      {new Date(event.date).toLocaleDateString()}
                    </span>
                  </div>
                  <p className="text-[var(--faded-text)] mb-2">
                    <span className="font-semibold">{tr("NewsEvents.time") || "Time"}:</span> {event.time}
                  </p>
                  <p className="text-[var(--faded-text)] mb-4">
                    <span className="font-semibold">{tr("NewsEvents.location") || "Location"}:</span> {event.location}
                  </p>
                  <span
                    className="text-[var(--f-green-1)] font-semibold inline-flex items-center opacity-50 cursor-default"
                  >
                    {tr("NewsEvents.eventDetails") || "Event details"}
                    <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                    </svg>
                  </span>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Subscribe / CTA */}
      <section className="w-full py-16 px-[10vw] md:px-8 lg:px-16 bg-gradient-to-r from-[var(--sec3-card1-bg)] to-[var(--sec3-card3-bg)]">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">
            {tr("NewsEvents.ctaTitle") || "Never Miss an Update"}
          </h2>
          <p className="text-xl mb-8">
            {tr("NewsEvents.ctaDesc") ||
              "Subscribe to our newsletter to receive the latest news and events."}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder={tr("NewsEvents.emailPlaceholder") || "Your email address"}
              className="flex-1 px-4 py-3 rounded-lg bg-cardBg border border-[var(--sec3-cards-border)] focus:outline-none focus:border-[var(--f-green-1)]"
            />
            <button
              onClick={handleSubscribe}
              className="px-6 py-3 bg-[var(--f-green-3)] text-text font-semibold rounded-lg hover:bg-[var(--f-green-2)] hover:text-black transition-colors"
            >
              {tr("NewsEvents.subscribe") || "Subscribe"}
            </button>
          </div>
        </div>
      </section>

      {/* Success Popup */}
      {showPopup && (
        <div className="fixed bottom-4 right-4 bg-[var(--f-green-3)] text-text px-6 py-3 rounded-lg shadow-lg z-50 animate-fade-in-up">
          {tr("NewsEvents.successMessage") || "An email will be sent soon."}
        </div>
      )}
    </main>
  );
}