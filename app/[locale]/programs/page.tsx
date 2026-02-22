"use client";

import { useState, Suspense } from "react";
import Image from "next/image";
import dynamic from "next/dynamic";
import FacultySwitch from "@/components/FacultySwitch";
import { useTR } from "@/useTR";
import Link from "next/link";
import { useLocale } from "next-intl";

const CardWatcher = dynamic(() => import("@/components/CardWatcher"), { ssr: false }); // keep false if strictly client-side only logical


export default function ProgramsPage() {
  const tr = useTR();
  const locale = useLocale();
  const [faculty, setFaculty] = useState<"industry" | "medical">("industry");
  const [expandedProgram, setExpandedProgram] = useState<string | null>(null);

  const industryPrograms = [
    {
      id: "it",
      title: tr("Programs.industry.it.title") || "Information Technology",
      description:
        tr("Programs.industry.it.desc") ||
        "Focus on software development, networking, and cybersecurity with hands-on labs.",
      icon: "💻",
    },
    {
      id: "rail",
      title: tr("Programs.industry.rail.title") || "Rail Systems Technology",
      description:
        tr("Programs.industry.rail.desc") ||
        "Specialized training in railway engineering, signaling, and maintenance.",
      icon: "🚆",
    },
    {
      id: "textile",
      title: tr("Programs.industry.textile.title") || "Textile Technology",
      description:
        tr("Programs.industry.textile.desc") ||
        "Innovations in textile manufacturing, material science, and quality control.",
      icon: "🧵",
    },
    {
      id: "food",
      title: tr("Programs.industry.food.title") || "Food Industries Technology",
      description:
        tr("Programs.industry.food.desc") ||
        "Food processing, safety standards, and production line management.",
      icon: "🍲",
    },
  ];

  const medicalPrograms = [
    {
      id: "dental",
      title: tr("Programs.medical.dental.title") || "Dental Technology",
      description:
        tr("Programs.medical.dental.desc") ||
        "Dental prosthetics, orthodontic appliances, and digital dentistry.",
      icon: "🦷",
    },
    {
      id: "pharmacy",
      title: tr("Programs.medical.pharmacy.title") || "Pharmacy Technology",
      description:
        tr("Programs.medical.pharmacy.desc") ||
        "Pharmaceutical compounding, drug safety, and laboratory techniques.",
      icon: "💊",
    },
    {
      id: "informatics",
      title: tr("Programs.medical.informatics.title") || "Medical Informatics",
      description:
        tr("Programs.medical.informatics.desc") ||
        "Health information systems, data analytics, and telemedicine solutions.",
      icon: "📊",
    },
    {
      id: "biomed",
      title: tr("Programs.medical.biomed.title") || "Biomedical Equipment Technology",
      description:
        tr("Programs.medical.biomed.desc") ||
        "Maintenance and operation of medical devices and diagnostic equipment.",
      icon: "⚕️",
    },
  ];

  return (
    <main className="flex pt-[15vh] w-full items-center justify-center flex-col">
      {/* Hero Section */}
      <section className="w-screen pt-32 pb-16 px-[10vw] md:px-8 lg:px-16 bg-gradient-to-b from-background to-cardBg">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              {tr("Programs.title") || "Academic Programs"}
            </h1>
            <p className="text-xl md:text-2xl text-[var(--faded-text)] max-w-3xl mx-auto">
              {tr("Programs.subtitle") ||
                "Cutting-edge technological education tailored to industry needs"}
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-16">
            {/* Stat 1 */}
            <div className="text-center p-6 rounded-xl bg-cardBg border border-[var(--sec3-cards-border)]">
              <div className="text-4xl font-bold text-[var(--f-green-1)] mb-2">8+</div>
              <div className="text-lg font-semibold">
                {tr("Programs.stats.programs") || "Specialized Programs"}
              </div>
            </div>
            {/* Stat 2 */}
            <div className="text-center p-6 rounded-xl bg-cardBg border border-[var(--sec3-cards-border)]">
              <div className="text-4xl font-bold text-[var(--f-green-1)] mb-2">2</div>
              <div className="text-lg font-semibold">
                {tr("Programs.stats.faculties") || "Faculties"}
              </div>
            </div>
            {/* Stat 3 */}
            <div className="text-center p-6 rounded-xl bg-cardBg border border-[var(--sec3-cards-border)]">
              <div className="text-4xl font-bold text-[var(--f-green-1)] mb-2">90%</div>
              <div className="text-lg font-semibold">
                {tr("Programs.stats.employment") || "Employment Rate"}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Faculty Switch and Programs Grid */}
      <section className="w-full py-16 px-[10vw] md:px-8 lg:px-16 bg-background">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">
              {tr("Programs.facultiesTitle") || "Explore Our Faculties"}
            </h2>
            <p className="text-[var(--faded-text)] max-w-3xl mx-auto">
              {tr("Programs.facultiesDescription") ||
                "Choose your path and discover the programs that match your ambition"}
            </p>
          </div>

          <div className="flex justify-center mb-12">
            <FacultySwitch
              faculty={faculty}
              onToggle={() =>
                setFaculty((f) => (f === "industry" ? "medical" : "industry"))
              }
              heading={tr("P-Majors.switchHeading")}
              label={tr("P-Majors.switchLabel")}
              industryLabel={tr("P-Majors.industryFaculty")}
              medicalLabel={tr("P-Majors.medicalFaculty")}
            />
          </div>

          {/* Programs Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {(faculty === "industry" ? industryPrograms : medicalPrograms).map(
              (program, index) => (
                <div
                  key={program.id}
                  className="group p-6 rounded-2xl bg-cardBg border border-[var(--sec3-cards-border)] hover:border-[var(--f-green-1)] transition-all duration-300"
                >
                  <div className="flex items-start">
                    <div className="text-4xl mr-4">{program.icon}</div>
                    <div>
                      <h3 className="text-xl font-bold mb-2">{program.title}</h3>
                      <p className="text-[var(--faded-text)]">{program.description}</p>
                    </div>
                  </div>
                  <div className="mt-4 flex justify-end">
                    <button
                      onClick={() => setExpandedProgram(expandedProgram === program.id ? null : program.id)}
                      className="text-[var(--f-green-1)] hover:text-[var(--f-green-2)] font-semibold inline-flex items-center"
                    >
                      {expandedProgram === program.id
                        ? (tr("Programs.viewLess") || "View less")
                        : (tr("Programs.viewMore") || "View more")}
                      <svg
                        className={`w-4 h-4 ml-2 transition-transform duration-300 ${expandedProgram === program.id ? "rotate-90" : ""}`}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M9 5l7 7-7 7"
                        />
                      </svg>
                    </button>
                  </div>
                  {expandedProgram === program.id && (
                    <div className="mt-4 pt-4 border-t border-[var(--sec3-cards-border)] text-[var(--faded-text)] animate-fadeIn">
                      <p>{program.description}</p>
                    </div>
                  )}
                </div>
              )
            )}
          </div>
        </div>
      </section>

      {/* Program Highlights / Why Choose Us */}
      <section className="w-full py-16 px-[7vw] md:px-8 lg:px-16 bg-cardBg">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">
              {tr("Programs.highlightsTitle") || "Why Choose Our Programs"}
            </h2>
            <p className="text-[var(--faded-text)] max-w-3xl mx-auto">
              {tr("Programs.highlightsSubtitle") ||
                "Industry-aligned curriculum, expert faculty, and modern facilities"}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Highlight 1 */}
            <div className="p-6 rounded-xl bg-gradient-to-br from-[var(--sec3-card1-bg)] to-transparent border border-[var(--sec3-cards-border)]">
              <div className="w-12 h-12 rounded-lg bg-[var(--sec3-card1-bg)] flex items-center justify-center mb-4">
                <svg
                  className="w-6 h-6 text-[var(--sec3-card1-text)]"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
              </div>
              <h3 className="font-bold mb-2">
                {tr("Programs.highlight1Title") || "Hands-on Training"}
              </h3>
              <p className="text-sm text-[var(--faded-text)]">
                {tr("Programs.highlight1Desc") ||
                  "State-of-the-art labs and workshops with real-world equipment."}
              </p>
            </div>
            {/* Highlight 2 */}
            <div className="p-6 rounded-xl bg-gradient-to-br from-[var(--sec3-card2-bg)] to-transparent border border-[var(--sec3-cards-border)]">
              <div className="w-12 h-12 rounded-lg bg-[var(--sec3-card2-bg)] flex items-center justify-center mb-4">
                <svg
                  className="w-6 h-6 text-[var(--sec3-card2-text)]"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
              </div>
              <h3 className="font-bold mb-2">
                {tr("Programs.highlight2Title") || "Industry Partnerships"}
              </h3>
              <p className="text-sm text-[var(--faded-text)]">
                {tr("Programs.highlight2Desc") ||
                  "Collaborations with leading companies for internships and job placements."}
              </p>
            </div>
            {/* Highlight 3 */}
            <div className="p-6 rounded-xl bg-gradient-to-br from-[var(--sec3-card3-bg)] to-transparent border border-[var(--sec3-cards-border)]">
              <div className="w-12 h-12 rounded-lg bg-[var(--sec3-card3-bg)] flex items-center justify-center mb-4">
                <svg
                  className="w-6 h-6 text-[var(--sec3-card3-text)]"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                  />
                </svg>
              </div>
              <h3 className="font-bold mb-2">
                {tr("Programs.highlight3Title") || "Research Opportunities"}
              </h3>
              <p className="text-sm text-[var(--faded-text)]">
                {tr("Programs.highlight3Desc") ||
                  "Engage in applied research projects with faculty mentors."}
              </p>
            </div>
            {/* Highlight 4 */}
            <div className="p-6 rounded-xl bg-gradient-to-br from-[var(--sec3-card1-bg)] to-transparent border border-[var(--sec3-cards-border)]">
              <div className="w-12 h-12 rounded-lg bg-[var(--sec3-card1-bg)] flex items-center justify-center mb-4">
                <svg
                  className="w-6 h-6 text-[var(--sec3-card1-text)]"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
                  />
                </svg>
              </div>
              <h3 className="font-bold mb-2">
                {tr("Programs.highlight4Title") || "International Standards"}
              </h3>
              <p className="text-sm text-[var(--faded-text)]">
                {tr("Programs.highlight4Desc") ||
                  "Curriculum designed to meet global accreditation requirements."}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="w-full py-16 px-[10vw] md:px-8 lg:px-16 bg-gradient-to-r from-[var(--sec3-card1-bg)] to-[var(--sec3-card3-bg)]">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">
            {tr("Programs.ctaTitle") || "Ready to Start Your Journey?"}
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            {tr("Programs.ctaDescription") ||
              "Apply now and become part of a new generation of technological innovators."}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href={`/${locale}/admissions`}
              className="px-8 py-3 bg-[var(--f-green-3)] text-text font-semibold rounded-lg hover:bg-[var(--f-green-2)] hover:text-black transition-colors duration-300"
            >
              {tr("Programs.applyNow") || "Apply Now"}
            </Link>
            <Link
              href="#contact"
              className="px-8 py-3 border-2 border-[var(--f-green-1)] text-[var(--f-green-1)] font-semibold rounded-lg hover:bg-[var(--f-green-1)] hover:text-black transition-colors duration-300"
            >
              {tr("Programs.contactAdmissions") || "Contact Admissions"}
            </Link>
          </div>
        </div>
      </section>
      <Suspense fallback={null}>
        <CardWatcher />
      </Suspense>
    </main>
  );
}