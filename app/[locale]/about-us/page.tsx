"use client";

import { useState, Suspense } from "react";
import dynamic from "next/dynamic";
import Image from 'next/image';
import FacultySwitch from "@/components/FacultySwitch";
import { useTR } from "@/useTR";
import Link from "next/link";
import { useLocale } from "next-intl";
const CardWatcher = dynamic(() => import("@/components/CardWatcher"), { ssr: false }); // keep false if strictly client-side only logical


export default function AboutPage() {
  const tr = useTR();
  const locale = useLocale();
  const [faculty, setFaculty] = useState<"industry" | "medical">("industry");

  return (
    <main className="flex pt-[15vh] w-full items-center justify-center flex-col">
      {/* Hero Section */}
      <section className="w-screen pt-32 pb-16 px-4 md:px-8 lg:px-16 bg-gradient-to-b from-background to-cardBg">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              {tr("About.title") || "About October Technological University"}
            </h1>
            <p className="text-xl md:text-2xl text-[var(--faded-text)] max-w-3xl mx-auto">
              {tr("About.subtitle") || "Pioneering Technological Education in Egypt"}
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-16">
            {/* Stat 1 */}
            <div className="text-center p-6 rounded-xl bg-cardBg border border-[var(--sec3-cards-border)]">
              <div className="text-4xl font-bold text-[var(--f-green-1)] mb-2">2022</div>
              <div className="text-lg font-semibold">{tr("About.founded") || "Year Founded"}</div>
            </div>

            {/* Stat 2 */}
            <div className="text-center p-6 rounded-xl bg-cardBg border border-[var(--sec3-cards-border)]">
              <div className="text-4xl font-bold text-[var(--f-green-1)] mb-2">2</div>
              <div className="text-lg font-semibold">{tr("About.faculties") || "Specialized Faculties"}</div>
            </div>

            {/* Stat 3 */}
            <div className="text-center p-6 rounded-xl bg-cardBg border border-[var(--sec3-cards-border)]">
              <div className="text-4xl font-bold text-[var(--f-green-1)] mb-2">8+</div>
              <div className="text-lg font-semibold">{tr("About.programs") || "Technical Programs"}</div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="w-full py-16 px-4 md:px-8 lg:px-16 bg-cardBg">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Mission */}
            <div className="group p-8 rounded-2xl bg-gradient-to-br from-[var(--sec3-card1-bg)] to-transparent border border-[var(--sec3-cards-border)] hover:border-[var(--sec3-card1-text)] transition-all duration-300">
              <div className="w-16 h-16 rounded-xl bg-[var(--sec3-card1-bg)] flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-[var(--sec3-card1-text)]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
              </div>
              <h2 className="text-2xl font-bold mb-4">{tr("About.missionTitle") || "Our Mission"}</h2>
              <p className="text-[var(--faded-text)] leading-relaxed">
                {tr("About.mission") || "To provide high-quality technological education that meets international standards, preparing competent professionals who contribute to Egypt's industrial and medical sectors through innovative research and practical application."}
              </p>
            </div>

            {/* Vision */}
            <div className="group p-8 rounded-2xl bg-gradient-to-br from-[var(--sec3-card3-bg)] to-transparent border border-[var(--sec3-cards-border)] hover:border-[var(--sec3-card3-text)] transition-all duration-300">
              <div className="w-16 h-16 rounded-xl bg-[var(--sec3-card3-bg)] flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-[var(--sec3-card3-text)]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"></path>
                </svg>
              </div>
              <h2 className="text-2xl font-bold mb-4">{tr("About.visionTitle") || "Our Vision"}</h2>
              <p className="text-[var(--faded-text)] leading-relaxed">
                {tr("About.vision") || "To become a leading technological university in the Middle East, recognized for excellence in applied sciences, innovation, and producing graduates who drive technological advancement and economic growth."}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* History Section - Now Responsive */}
      <section className="w-full py-16 px-4 md:px-8 lg:px-16 bg-cardBg">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">{tr("About.historyTitle") || "Our History"}</h2>
            <p className="text-[var(--faded-text)] max-w-3xl mx-auto">
              {tr("About.historySubtitle") || "A journey of technological advancement and educational innovation"}
            </p>
          </div>

          <div className="relative">
            {/* Timeline line - responsive positioning */}
            <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 w-1 h-full bg-gradient-to-b from-[var(--f-green-1)] to-[var(--f-cyan-1)]"></div>

            {/* Timeline items */}
            <div className="space-y-12">
              {/* 2022 */}
              <div className="flex flex-col md:flex-row items-start md:items-center justify-between">
                <div className="w-full md:w-5/12 md:pr-8 md:text-right mb-4 md:mb-0">
                  <div className="p-6 rounded-xl bg-cardBg border border-[var(--sec3-cards-border)]">
                    <h3 className="text-xl font-bold mb-2">2022</h3>
                    <p className="text-[var(--faded-text)]">
                      {tr("About.history2022") || "October Technological University was established as a public university under Prime Minister Decree No. 2723 of 2022, focusing on applied technological education."}
                    </p>
                  </div>
                </div>
                <div className="absolute left-3 md:left-1/2 transform md:-translate-x-1/2 w-8 h-8 rounded-full bg-[var(--f-green-1)] border-4 border-background"></div>
                <div className="w-full md:w-5/12"></div>
              </div>

              {/* 2023 */}
              <div className="flex flex-col md:flex-row items-start md:items-center justify-between">
                <div className="w-full md:w-5/12"></div>
                <div className="absolute left-3 md:left-1/2 transform md:-translate-x-1/2 w-8 h-8 rounded-full bg-[var(--f-green-1)] border-4 border-background"></div>
                <div className="w-full md:w-5/12 md:pl-8 mt-4 md:mt-0">
                  <div className="p-6 rounded-xl bg-cardBg border border-[var(--sec3-cards-border)]">
                    <h3 className="text-xl font-bold mb-2">2023</h3>
                    <p className="text-[var(--faded-text)]">
                      {tr("About.history2023") || "Launched the Faculty of Industrial Technology with initial programs in Information Technology and Rail Systems Technology."}
                    </p>
                  </div>
                </div>
              </div>

              {/* 2024 */}
              <div className="flex flex-col md:flex-row items-start md:items-center justify-between">
                <div className="w-full md:w-5/12 md:pr-8 md:text-right mb-4 md:mb-0">
                  <div className="p-6 rounded-xl bg-cardBg border border-[var(--sec3-cards-border)]">
                    <h3 className="text-xl font-bold mb-2">2024</h3>
                    <p className="text-[var(--faded-text)]">
                      {tr("About.history2024") || "Expanded programs to include Textile Technology and Food Industries Technology, responding to Egypt's industrial needs."}
                    </p>
                  </div>
                </div>
                <div className="absolute left-3 md:left-1/2 transform md:-translate-x-1/2 w-8 h-8 rounded-full bg-[var(--f-green-1)] border-4 border-background"></div>
                <div className="w-full md:w-5/12"></div>
              </div>

              {/* 2025 */}
              <div className="flex flex-col md:flex-row items-start md:items-center justify-between">
                <div className="w-full md:w-5/12"></div>
                <div className="absolute left-3 md:left-1/2 transform md:-translate-x-1/2 w-8 h-8 rounded-full bg-[var(--f-green-1)] border-4 border-background"></div>
                <div className="w-full md:w-5/12 md:pl-8 mt-4 md:mt-0">
                  <div className="p-6 rounded-xl bg-cardBg border border-[var(--sec3-cards-border)]">
                    <h3 className="text-xl font-bold mb-2">2025</h3>
                    <p className="text-[var(--faded-text)]">
                      {tr("About.history2025") || "Established the Faculty of Medical Technology, introducing programs in Dental Technology, Pharmacy Technology, and Medical Informatics."}
                    </p>
                  </div>
                </div>
              </div>

              {/* Present */}
              <div className="flex flex-col md:flex-row items-start md:items-center justify-between">
                <div className="w-full md:w-5/12 md:pr-8 md:text-right mb-4 md:mb-0">
                  <div className="p-6 rounded-xl bg-gradient-to-r from-cardBg to-[var(--sec3-card3-bg)] border border-[var(--sec3-cards-border)]">
                    <h3 className="text-xl font-bold mb-2">{tr("About.present") || "Present Day"}</h3>
                    <p className="text-[var(--faded-text)]">
                      {tr("About.historyPresent") || "Continuing to expand with new programs, industry partnerships, and research initiatives that bridge technology with practical applications."}
                    </p>
                  </div>
                </div>
                <div className="absolute left-3 md:left-1/2 transform md:-translate-x-1/2 w-8 h-8 rounded-full bg-gradient-to-r from-[var(--f-green-1)] to-[var(--f-cyan-1)] border-4 border-background animate-pulse"></div>
                <div className="w-full md:w-5/12"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Faculties Overview Section */}
      <section className="w-full py-16 px-4 md:px-8 lg:px-16 bg-background">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">{tr("About.facultiesTitle") || "Our Faculties"}</h2>
            <p className="text-[var(--faded-text)] max-w-3xl mx-auto">
              {tr("About.facultiesDescription") || "Two specialized faculties offering cutting-edge technological education"}
            </p>
          </div>

          <div className="flex justify-center mb-12">
            <FacultySwitch
              faculty={faculty}
              onToggle={() =>
                setFaculty((f) => (f === "industry" ? "medical" : "industry"))
              }
              heading={tr("Majors.switchHeading")}
              label={tr("Majors.switchLabel")}
              industryLabel={tr("Majors.industryFaculty")}
              medicalLabel={tr("Majors.medicalFaculty")}
            />
          </div>

          {faculty === "industry" ? (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="p-8 rounded-2xl bg-gradient-to-br from-[var(--sec3-card1-bg)] to-transparent border border-[var(--sec3-cards-border)]">
                <h3 className="text-2xl font-bold mb-4">{tr("Majors.industryFaculty") || "Faculty of Industrial Technology"}</h3>
                <p className="text-[var(--faded-text)] mb-6">
                  {tr("About.industryDescription") || "Focused on developing technical professionals for Egypt's growing industrial sector. Programs combine theoretical knowledge with hands-on training in state-of-the-art laboratories and workshops."}
                </p>
                <ul className="space-y-3">
                  <li className="flex items-center">
                    <svg className="w-5 h-5 text-[var(--f-green-1)] mr-3" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span>{tr("About.industryBullet1")}</span>
                  </li>
                  <li className="flex items-center">
                    <svg className="w-5 h-5 text-[var(--f-green-1)] mr-3" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span>{tr("About.industryBullet2")}</span>
                  </li>
                  <li className="flex items-center">
                    <svg className="w-5 h-5 text-[var(--f-green-1)] mr-3" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span>{tr("About.industryBullet3")}</span>
                  </li>
                </ul>
              </div>
              <div className="relative h-64 md:h-auto rounded-2xl overflow-hidden">
                <Image
                  src="/images/s1.jpg"
                  alt="Industrial Technology Lab"
                  fill
                  className="object-cover"
                  sizes="50vw"
                />
              </div>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="relative h-64 md:h-auto rounded-2xl overflow-hidden order-2 md:order-1">
                <Image
                  src="/images/s2.jpg"
                  alt="Medical Technology Lab"
                  fill
                  className="object-cover"
                  sizes="50vw"
                />
              </div>
              <div className="p-8 rounded-2xl bg-gradient-to-br from-[var(--sec3-card2-bg)] to-transparent border border-[var(--sec3-cards-border)] order-1 md:order-2">
                <h3 className="text-2xl font-bold mb-4">{tr("Majors.medicalFaculty") || "Faculty of Medical Technology"}</h3>
                <p className="text-[var(--faded-text)] mb-6">
                  {tr("About.medicalDescription") || "Training healthcare technologists to support Egypt's medical sector with advanced technical skills in dental, pharmaceutical, and medical information systems."}
                </p>
                <ul className="space-y-3">
                  <li className="flex items-center">
                    <svg className="w-5 h-5 text-[var(--f-green-1)] mr-3" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span>{tr("About.medicalBullet1")}</span>
                  </li>
                  <li className="flex items-center">
                    <svg className="w-5 h-5 text-[var(--f-green-1)] mr-3" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span>{tr("About.medicalBullet2")}</span>
                  </li>
                  <li className="flex items-center">
                    <svg className="w-5 h-5 text-[var(--f-green-1)] mr-3" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span>{tr("About.medicalBullet3")}</span>
                  </li>
                </ul>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Location & Campus Section */}
      <section className="w-full py-16 px-4 md:px-8 lg:px-16 bg-cardBg">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">{tr("About.locationTitle") || "Our Campus"}</h2>
            <p className="text-[var(--faded-text)] max-w-3xl mx-auto">
              {tr("About.locationDescription") || "Strategically located in 6th of October City, a hub for technological and industrial development"}
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="p-8 rounded-2xl bg-cardBg border border-[var(--sec3-cards-border)]">
              <h3 className="text-2xl font-bold mb-6">{tr("About.campusFeaturesTitle")}</h3>
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="w-12 h-12 rounded-lg bg-[var(--sec3-card1-bg)] flex items-center justify-center mr-4">
                    <svg className="w-6 h-6 text-[var(--sec3-card1-text)]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"></path>
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-bold mb-1">
                      {tr("About.feature1Title")}
                    </h4>
                    <p className="text-[var(--faded-text)] text-sm">
                      {tr("About.feature1Desc")}
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-12 h-12 rounded-lg bg-[var(--sec3-card2-bg)] flex items-center justify-center mr-4">
                    <svg className="w-6 h-6 text-[var(--sec3-card2-text)]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"></path>
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-bold mb-1">
                      {tr("About.feature2Title")}
                    </h4>
                    <p className="text-[var(--faded-text)] text-sm">
                      {tr("About.feature2Desc")}
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-12 h-12 rounded-lg bg-[var(--sec3-card3-bg)] flex items-center justify-center mr-4">
                    <svg className="w-6 h-6 text-[var(--sec3-card3-text)]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path>
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-bold mb-1">
                      {tr("About.feature3Title")}
                    </h4>
                    <p className="text-[var(--faded-text)] text-sm">
                      {tr("About.feature3Desc")}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <Link id="location" href="https://maps.app.goo.gl/qJAbKFYNczzJvq627" className="relative h-96 rounded-2xl overflow-hidden border border-[var(--sec3-cards-border)]">
              {/* This would be a map or campus image */}
              <div className="absolute inset-0 bg-gradient-to-br from-[var(--sec3-card1-bg)] to-[var(--sec3-card3-bg)] flex items-center justify-center">
                <div className="text-center">
                  <svg className="w-16 h-16 mx-auto mb-4 text-[var(--faded-text)]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                  </svg>
                  <p className="text-lg font-semibold"> {tr("About.maps1")}</p>
                  <p className="text-[var(--faded-text)]">{tr("About.maps2")}</p>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Contact CTA Section */}
      <section className="w-full py-16 px-4 md:px-8 lg:px-16 bg-gradient-to-r from-[var(--sec3-card1-bg)] to-[var(--sec3-card3-bg)]">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">{tr("About.ctaTitle") || "Join Our Technological Community"}</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            {tr("About.ctaDescription") || "Be part of Egypt's future in technological advancement and innovation"}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={`/${locale}/admissions`}
              className="px-8 py-3 bg-[var(--f-green-3)] text-text font-semibold rounded-lg hover:bg-[var(--f-green-2)] hover:text-black transition-colors duration-300"
            >
              {tr("About.applyNow") || "Apply Now"}
            </a>
            <a
              href="#contact"
              className="px-8 py-3 border-2 border-[var(--f-green-1)] text-[var(--f-green-1)] font-semibold rounded-lg hover:bg-[var(--f-green-1)] hover:text-black transition-colors duration-300"
            >
              {tr("About.contactUs") || "Contact Us"}
            </a>
          </div>
        </div>
      </section>
      <Suspense fallback={null}>
        <CardWatcher />
      </Suspense>
    </main>
  );
}