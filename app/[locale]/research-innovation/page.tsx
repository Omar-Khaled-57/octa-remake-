"use client";

import Image from "next/image";
import Link from "next/link";
import { useTR } from "@/useTR";

export default function ResearchPage() {
  const tr = useTR();

  return (
    <main className="flex pt-[15vh] w-full items-center justify-center flex-col">
      {/* Hero Section */}
      <section className="w-screen pt-32 pb-16 px-[10vw] md:px-8 lg:px-16 bg-gradient-to-b from-background to-cardBg">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              {tr("Research.title") || "Research & Innovation"}
            </h1>
            <p className="text-xl md:text-2xl text-[var(--faded-text)] max-w-3xl mx-auto">
              {tr("Research.subtitle") ||
                "Advancing knowledge and technology through applied research"}
            </p>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
            <div className="text-center p-6 rounded-xl bg-cardBg border border-[var(--sec3-cards-border)]">
              <div className="text-4xl font-bold text-[var(--f-green-1)] mb-2">15+</div>
              <div className="text-lg font-semibold">
                {tr("Research.stats.projects") || "Active Research Projects"}
              </div>
            </div>
            <div className="text-center p-6 rounded-xl bg-cardBg border border-[var(--sec3-cards-border)]">
              <div className="text-4xl font-bold text-[var(--f-green-1)] mb-2">7</div>
              <div className="text-lg font-semibold">
                {tr("Research.stats.centers") || "Research Centers"}
              </div>
            </div>
            <div className="text-center p-6 rounded-xl bg-cardBg border border-[var(--sec3-cards-border)]">
              <div className="text-4xl font-bold text-[var(--f-green-1)] mb-2">50+</div>
              <div className="text-lg font-semibold">
                {tr("Research.stats.publications") || "Publications"}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Research Areas */}
      <section className="w-full py-16 px-[10vw] md:px-8 lg:px-16 bg-cardBg">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">
              {tr("Research.areasTitle") || "Our Research Areas"}
            </h2>
            <p className="text-[var(--faded-text)] max-w-3xl mx-auto">
              {tr("Research.areasSubtitle") ||
                "Focusing on fields that drive technological and industrial progress"}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Area 1 */}
            <div className="p-6 rounded-xl bg-gradient-to-br from-[var(--sec3-card1-bg)] to-transparent border border-[var(--sec3-cards-border)]">
              <div className="w-12 h-12 rounded-lg bg-[var(--sec3-card1-bg)] flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-[var(--sec3-card1-text)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">
                {tr("Research.area1") || "Artificial Intelligence & Data Science"}
              </h3>
              <p className="text-[var(--faded-text)]">
                {tr("Research.area1Desc") ||
                  "Developing intelligent systems for industrial and medical applications."}
              </p>
            </div>

            {/* Area 2 */}
            <div className="p-6 rounded-xl bg-gradient-to-br from-[var(--sec3-card2-bg)] to-transparent border border-[var(--sec3-cards-border)]">
              <div className="w-12 h-12 rounded-lg bg-[var(--sec3-card2-bg)] flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-[var(--sec3-card2-text)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">
                {tr("Research.area2") || "Advanced Manufacturing & Materials"}
              </h3>
              <p className="text-[var(--faded-text)]">
                {tr("Research.area2Desc") ||
                  "Innovations in production processes and new material development."}
              </p>
            </div>

            {/* Area 3 */}
            <div className="p-6 rounded-xl bg-gradient-to-br from-[var(--sec3-card3-bg)] to-transparent border border-[var(--sec3-cards-border)]">
              <div className="w-12 h-12 rounded-lg bg-[var(--sec3-card3-bg)] flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-[var(--sec3-card3-text)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">
                {tr("Research.area3") || "Biomedical Technology"}
              </h3>
              <p className="text-[var(--faded-text)]">
                {tr("Research.area3Desc") ||
                  "Medical devices, diagnostics, and healthcare informatics."}
              </p>
            </div>

            {/* Area 4 */}
            <div className="p-6 rounded-xl bg-gradient-to-br from-[var(--sec3-card1-bg)] to-transparent border border-[var(--sec3-cards-border)]">
              <div className="w-12 h-12 rounded-lg bg-[var(--sec3-card1-bg)] flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-[var(--sec3-card1-text)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">
                {tr("Research.area4") || "Renewable Energy & Sustainability"}
              </h3>
              <p className="text-[var(--faded-text)]">
                {tr("Research.area4Desc") ||
                  "Solar, wind, and energy efficiency technologies."}
              </p>
            </div>

            {/* Area 5 */}
            <div className="p-6 rounded-xl bg-gradient-to-br from-[var(--sec3-card2-bg)] to-transparent border border-[var(--sec3-cards-border)]">
              <div className="w-12 h-12 rounded-lg bg-[var(--sec3-card2-bg)] flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-[var(--sec3-card2-text)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">
                {tr("Research.area5") || "Industrial Automation & Robotics"}
              </h3>
              <p className="text-[var(--faded-text)]">
                {tr("Research.area5Desc") ||
                  "Smart factories, control systems, and autonomous robots."}
              </p>
            </div>

            {/* Area 6 */}
            <div className="p-6 rounded-xl bg-gradient-to-br from-[var(--sec3-card3-bg)] to-transparent border border-[var(--sec3-cards-border)]">
              <div className="w-12 h-12 rounded-lg bg-[var(--sec3-card3-bg)] flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-[var(--sec3-card3-text)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">
                {tr("Research.area6") || "Cybersecurity"}
              </h3>
              <p className="text-[var(--faded-text)]">
                {tr("Research.area6Desc") ||
                  "Network security, cryptography, and threat detection."}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Research Centers */}
      <section className="w-full py-16 px-[10vw] md:px-8 lg:px-16 bg-background">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">
              {tr("Research.centersTitle") || "Our Research Centers"}
            </h2>
            <p className="text-[var(--faded-text)] max-w-3xl mx-auto">
              {tr("Research.centersSubtitle") ||
                "Dedicated hubs for innovation and collaboration"}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Center 1 */}
            <div className="p-8 rounded-2xl bg-cardBg border border-[var(--sec3-cards-border)]">
              <h3 className="text-2xl font-bold mb-2">
                {tr("Research.center1") || "Center for AI and Data Science"}
              </h3>
              <p className="text-[var(--faded-text)] mb-4">
                {tr("Research.center1Desc") ||
                  "Focuses on machine learning, big data analytics, and intelligent systems for industry and healthcare."}
              </p>
              <Link
                href="#"
                className="text-[var(--f-green-1)] hover:text-[var(--f-green-2)] font-semibold inline-flex items-center"
              >
                {tr("Research.learnMore") || "Learn more"}
                <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>

            {/* Center 2 */}
            <div className="p-8 rounded-2xl bg-cardBg border border-[var(--sec3-cards-border)]">
              <h3 className="text-2xl font-bold mb-2">
                {tr("Research.center2") || "Advanced Manufacturing Lab"}
              </h3>
              <p className="text-[var(--faded-text)] mb-4">
                {tr("Research.center2Desc") ||
                  "State-of-the-art facility for 3D printing, CNC machining, and material testing."}
              </p>
              <Link
                href="#"
                className="text-[var(--f-green-1)] hover:text-[var(--f-green-2)] font-semibold inline-flex items-center"
              >
                {tr("Research.learnMore") || "Learn more"}
                <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>

            {/* Center 3 */}
            <div className="p-8 rounded-2xl bg-cardBg border border-[var(--sec3-cards-border)]">
              <h3 className="text-2xl font-bold mb-2">
                {tr("Research.center3") || "Biomedical Innovation Hub"}
              </h3>
              <p className="text-[var(--faded-text)] mb-4">
                {tr("Research.center3Desc") ||
                  "Developing medical devices and digital health solutions in collaboration with hospitals."}
              </p>
              <Link
                href="#"
                className="text-[var(--f-green-1)] hover:text-[var(--f-green-2)] font-semibold inline-flex items-center"
              >
                {tr("Research.learnMore") || "Learn more"}
                <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>

            {/* Center 4 */}
            <div className="p-8 rounded-2xl bg-cardBg border border-[var(--sec3-cards-border)]">
              <h3 className="text-2xl font-bold mb-2">
                {tr("Research.center4") || "Renewable Energy Research Unit"}
              </h3>
              <p className="text-[var(--faded-text)] mb-4">
                {tr("Research.center4Desc") ||
                  "Exploring solar and wind energy solutions for sustainable development."}
              </p>
              <Link
                href="#"
                className="text-[var(--f-green-1)] hover:text-[var(--f-green-2)] font-semibold inline-flex items-center"
              >
                {tr("Research.learnMore") || "Learn more"}
                <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Partners & Collaboration */}
      <section className="w-full py-16 px-[10vw] md:px-8 lg:px-16 bg-cardBg">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">
              {tr("Research.partnersTitle") || "Research Partners"}
            </h2>
            <p className="text-[var(--faded-text)] max-w-3xl mx-auto">
              {tr("Research.partnersSubtitle") ||
                "Collaborating with industry and academia to drive innovation"}
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {/* Partner logos (placeholders) */}
            {[1, 2, 3, 4].map((i) => (
              <div
                key={i}
                className="h-20 bg-cardBg border border-[var(--sec3-cards-border)] rounded-lg flex items-center justify-center"
              >
                <span className="text-[var(--faded-text)]">
                  {tr("Research.partner") || "Partner"} {i}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="w-full py-16 px-[10vw] md:px-8 lg:px-16 bg-gradient-to-r from-[var(--sec3-card1-bg)] to-[var(--sec3-card3-bg)]">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">
            {tr("Research.ctaTitle") || "Collaborate With Us"}
          </h2>
          <p className="text-xl mb-8">
            {tr("Research.ctaDesc") ||
              "Partner with our researchers or explore opportunities for joint projects."}
          </p>
          <Link
            href="#contact"
            className="px-8 py-3 bg-[var(--f-green-3)] text-text font-semibold rounded-lg hover:bg-[var(--f-green-2)] hover:text-black transition-colors duration-300"
          >
            {tr("Research.contact") || "Contact Research Office"}
          </Link>
        </div>
      </section>
    </main>
  );
}