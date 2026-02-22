"use client";

import Image from "next/image";
import Link from "next/link";
import { useTR } from "@/useTR";
import { useLocale } from "next-intl";

export default function StudentLifePage() {
  const tr = useTR();
  const locale = useLocale();

  return (
    <main className="flex pt-[15vh] w-full items-center justify-center flex-col">
      {/* Hero Section */}
      <section className="w-screen pt-32 pb-16 px-[10vw] md:px-8 lg:px-16 bg-gradient-to-b from-background to-cardBg">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              {tr("StudentLife.title") || "Student Life"}
            </h1>
            <p className="text-xl md:text-2xl text-[var(--faded-text)] max-w-3xl mx-auto">
              {tr("StudentLife.subtitle") ||
                "Experience a vibrant campus community beyond the classroom"}
            </p>
          </div>
        </div>
      </section>

      {/* Highlights */}
      <section className="w-full py-16 px-[10vw] md:px-8 lg:px-16 bg-cardBg">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Highlight 1 */}
            <div className="p-6 rounded-xl bg-gradient-to-br from-[var(--sec3-card1-bg)] to-transparent border border-[var(--sec3-cards-border)]">
              <div className="w-12 h-12 rounded-lg bg-[var(--sec3-card1-bg)] flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-[var(--sec3-card1-text)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">
                {tr("StudentLife.clubs") || "30+ Student Clubs"}
              </h3>
              <p className="text-[var(--faded-text)]">
                {tr("StudentLife.clubsDesc") ||
                  "From robotics to drama, find your passion."}
              </p>
            </div>

            {/* Highlight 2 */}
            <div className="p-6 rounded-xl bg-gradient-to-br from-[var(--sec3-card2-bg)] to-transparent border border-[var(--sec3-cards-border)]">
              <div className="w-12 h-12 rounded-lg bg-[var(--sec3-card2-bg)] flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-[var(--sec3-card2-text)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9.5a2.5 2.5 0 00-2.5-2.5H15" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">
                {tr("StudentLife.sports") || "Sports Facilities"}
              </h3>
              <p className="text-[var(--faded-text)]">
                {tr("StudentLife.sportsDesc") ||
                  "Gym, football fields, basketball courts, and more."}
              </p>
            </div>

            {/* Highlight 3 */}
            <div className="p-6 rounded-xl bg-gradient-to-br from-[var(--sec3-card3-bg)] to-transparent border border-[var(--sec3-cards-border)]">
              <div className="w-12 h-12 rounded-lg bg-[var(--sec3-card3-bg)] flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-[var(--sec3-card3-text)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">
                {tr("StudentLife.events") || "Annual Events"}
              </h3>
              <p className="text-[var(--faded-text)]">
                {tr("StudentLife.eventsDesc") ||
                  "Cultural festivals, tech conferences, and competitions."}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Campus Life */}
      <section className="w-full py-16 px-[10vw] md:px-8 lg:px-16 bg-background">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative h-80 rounded-2xl overflow-hidden">
              <Image
                src="/images/campus-life.jpg"
                alt={tr("StudentLife.campusImageAlt") || "Students on campus"}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
            <div>
              <h2 className="text-3xl font-bold mb-4">
                {tr("StudentLife.campusTitle") || "A Place to Grow"}
              </h2>
              <p className="text-[var(--faded-text)] mb-4">
                {tr("StudentLife.campusDesc") ||
                  "Our campus is designed to foster creativity, collaboration, and well-being. From modern classrooms to relaxation areas, every space supports your journey."}
              </p>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-[var(--f-green-1)] mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span>{tr("StudentLife.feature1") || "Modern library with digital resources"}</span>
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-[var(--f-green-1)] mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span>{tr("StudentLife.feature2") || "Cafeterias and student lounges"}</span>
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-[var(--f-green-1)] mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span>{tr("StudentLife.feature3") || "Health and wellness center"}</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Student Clubs */}
      <section className="w-full py-16 px-[10vw] md:px-8 lg:px-16 bg-cardBg">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">
              {tr("StudentLife.clubsTitle") || "Student Clubs & Organizations"}
            </h2>
            <p className="text-[var(--faded-text)] max-w-3xl mx-auto">
              {tr("StudentLife.clubsSubtitle") ||
                "Join a community of like-minded peers and develop new skills."}
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              "Robotics Club",
              "Coding Club",
              "Entrepreneurship Club",
              "Art Club",
              "Music Society",
              "Sports Club",
              "Debate Club",
              "Volunteer Group",
            ].map((club, idx) => (
              <div
                key={idx}
                className="p-4 text-center rounded-lg bg-cardBg border border-[var(--sec3-cards-border)]"
              >
                <span className="font-medium">{club}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Housing & Services */}
      <section className="w-full py-16 px-[10vw] md:px-8 lg:px-16 bg-background">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold mb-4">
                {tr("StudentLife.housingTitle") || "Student Housing"}
              </h2>
              <p className="text-[var(--faded-text)] mb-4">
                {tr("StudentLife.housingDesc") ||
                  "Comfortable and affordable accommodation options near campus."}
              </p>
              <Link
                href={`/${locale}/about-us#location`}
                className="text-[var(--f-green-1)] hover:text-[var(--f-green-2)] font-semibold inline-flex items-center"
              >
                {tr("StudentLife.housingMore") || "Learn more about housing"}
                <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
            <div>
              <h2 className="text-3xl font-bold mb-4">
                {tr("StudentLife.supportTitle") || "Student Support Services"}
              </h2>
              <p className="text-[var(--faded-text)] mb-4">
                {tr("StudentLife.supportDesc") ||
                  "Academic advising, career counseling, and mental health resources."}
              </p>
              <Link
                href="#contact"
                className="text-[var(--f-green-1)] hover:text-[var(--f-green-2)] font-semibold inline-flex items-center"
              >
                {tr("StudentLife.supportMore") || "Explore support services"}
                <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="w-full py-16 px-[10vw] md:px-8 lg:px-16 bg-gradient-to-r from-[var(--sec3-card1-bg)] to-[var(--sec3-card3-bg)]">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">
            {tr("StudentLife.ctaTitle") || "Experience OTU Life"}
          </h2>
          <p className="text-xl mb-8">
            {tr("StudentLife.ctaDesc") ||
              "Come visit our campus or join a virtual tour."}
          </p>
          <Link
            href="#contact"
            className="px-8 py-3 bg-[var(--f-green-3)] text-text font-semibold rounded-lg hover:bg-[var(--f-green-2)] hover:text-black transition-colors duration-300"
          >
            {tr("StudentLife.scheduleTour") || "Schedule a Tour"}
          </Link>
        </div>
      </section>
    </main>
  );
}