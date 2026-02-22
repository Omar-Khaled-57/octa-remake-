// app/admissions/page.tsx
"use client";

import Image from "next/image";
import Link from "next/link";
import { useTR } from "@/useTR";
import { useLocale } from "next-intl";

export default function AdmissionsPage() {
  const tr = useTR();
  const locale = useLocale();

  const placeholderImage = "/images/admissions-hero.jpg";

  return (
    <main className="flex pt-[15vh] w-full items-center justify-center flex-col">
      {/* Hero Section */}
      <section className="w-screen pt-32 pb-16 px-[10vw] md:px-8 lg:px-16 bg-gradient-to-b from-background to-cardBg">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              {tr("Admissions.title") || "Admissions"}
            </h1>
            <p className="text-xl md:text-2xl text-[var(--faded-text)] max-w-3xl mx-auto">
              {tr("Admissions.subtitle") ||
                "Join October Technological University for the academic year 2025/2026"}
            </p>
          </div>

          {/* Stats / quick info */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
            <div className="text-center p-6 rounded-xl bg-cardBg border border-[var(--sec3-cards-border)]">
              <div className="text-4xl font-bold text-[var(--f-green-1)] mb-2">
                2025/2026
              </div>
              <div className="text-lg font-semibold">
                {tr("Admissions.academicYear") || "Academic Year"}
              </div>
            </div>
            <div className="text-center p-6 rounded-xl bg-cardBg border border-[var(--sec3-cards-border)]">
              <div className="text-4xl font-bold text-[var(--f-green-1)] mb-2">
                {tr("Admissions.deadline") || "30 Aug"}
              </div>
              <div className="text-lg font-semibold">
                {tr("Admissions.applicationDeadline") || "Application Deadline"}
              </div>
            </div>
            <div className="text-center p-6 rounded-xl bg-cardBg border border-[var(--sec3-cards-border)]">
              <div className="text-4xl font-bold text-[var(--f-green-1)] mb-2">2</div>
              <div className="text-lg font-semibold">
                {tr("Admissions.faculties") || "Faculties"}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Documents Required Section */}
      <section className="w-full py-16 px-[10vw] md:px-8 lg:px-16 bg-cardBg">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">
              {tr("Admissions.documentsTitle") || "Required Documents"}
            </h2>
            <p className="text-[var(--faded-text)] max-w-3xl mx-auto">
              {tr("Admissions.documentsSubtitle") ||
                "Please prepare the following documents for your application"}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Document Card 1 */}
            <div className="p-6 rounded-xl bg-gradient-to-br from-[var(--sec3-card1-bg)] to-transparent border border-[var(--sec3-cards-border)]">
              <div className="w-12 h-12 rounded-lg bg-[var(--sec3-card1-bg)] flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-[var(--sec3-card1-text)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <h3 className="font-bold mb-2">
                {tr("Admissions.doc1") || "High School Certificate"}
              </h3>
              <p className="text-sm text-[var(--faded-text)]">
                {tr("Admissions.doc1Desc") || "Original + copy"}
              </p>
            </div>

            {/* Document Card 2 */}
            <div className="p-6 rounded-xl bg-gradient-to-br from-[var(--sec3-card2-bg)] to-transparent border border-[var(--sec3-cards-border)]">
              <div className="w-12 h-12 rounded-lg bg-[var(--sec3-card2-bg)] flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-[var(--sec3-card2-text)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V8a2 2 0 00-2-2h-5m-4 0V5a2 2 0 114 0v1m-4 0a2 2 0 104 0m-5 8a2 2 0 100-4 2 2 0 000 4zm0 0c1.306 0 2.417.835 2.83 2M9 14a3.001 3.001 0 00-2.83 2M15 11h3m-3 4h2" />
                </svg>
              </div>
              <h3 className="font-bold mb-2">
                {tr("Admissions.doc2") || "Final Nomination Card"}
              </h3>
              <p className="text-sm text-[var(--faded-text)]">
                {tr("Admissions.doc2Desc") || "Printed from Tansik website + copy"}
              </p>
            </div>

            {/* Document Card 3 */}
            <div className="p-6 rounded-xl bg-gradient-to-br from-[var(--sec3-card3-bg)] to-transparent border border-[var(--sec3-cards-border)]">
              <div className="w-12 h-12 rounded-lg bg-[var(--sec3-card3-bg)] flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-[var(--sec3-card3-text)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                </svg>
              </div>
              <h3 className="font-bold mb-2">
                {tr("Admissions.doc3") || "Military Papers (Males)"}
              </h3>
              <p className="text-sm text-[var(--faded-text)]">
                {tr("Admissions.doc3Desc") || "Form 6 + Form 2 Jund + copy"}
              </p>
            </div>

            {/* Document Card 4 */}
            <div className="p-6 rounded-xl bg-gradient-to-br from-[var(--sec3-card1-bg)] to-transparent border border-[var(--sec3-cards-border)]">
              <div className="w-12 h-12 rounded-lg bg-[var(--sec3-card1-bg)] flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-[var(--sec3-card1-text)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                </svg>
              </div>
              <h3 className="font-bold mb-2">
                {tr("Admissions.doc4") || "Birth Certificate"}
              </h3>
              <p className="text-sm text-[var(--faded-text)]">
                {tr("Admissions.doc4Desc") || "Original + 2 copies (recent)"}
              </p>
            </div>

            {/* Document Card 5 */}
            <div className="p-6 rounded-xl bg-gradient-to-br from-[var(--sec3-card2-bg)] to-transparent border border-[var(--sec3-cards-border)]">
              <div className="w-12 h-12 rounded-lg bg-[var(--sec3-card2-bg)] flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-[var(--sec3-card2-text)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="font-bold mb-2">
                {tr("Admissions.doc5") || "Personal Photos"}
              </h3>
              <p className="text-sm text-[var(--faded-text)]">
                {tr("Admissions.doc5Desc") || "6 recent 4×6 photos (name on back)"}
              </p>
            </div>

            {/* Document Card 6 */}
            <div className="p-6 rounded-xl bg-gradient-to-br from-[var(--sec3-card3-bg)] to-transparent border border-[var(--sec3-cards-border)]">
              <div className="w-12 h-12 rounded-lg bg-[var(--sec3-card3-bg)] flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-[var(--sec3-card3-text)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="font-bold mb-2">
                {tr("Admissions.doc6") || "Tuition Fee Receipt"}
              </h3>
              <p className="text-sm text-[var(--faded-text)]">
                {tr("Admissions.doc6Desc") || "Paid at university treasury"}
              </p>
            </div>
          </div>

          {/* Additional documents list (smaller items) */}
          <div className="mt-12 p-6 rounded-xl bg-cardBg border border-[var(--sec3-cards-border)]">
            <h3 className="text-xl font-bold mb-4">
              {tr("Admissions.additionalDocs") || "Additional Required Items"}
            </h3>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
              <li className="flex items-center">
                <svg className="w-5 h-5 text-[var(--f-green-1)] mr-3" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span>{tr("Admissions.add1") || "5 copies of student's national ID"}</span>
              </li>
              <li className="flex items-center">
                <svg className="w-5 h-5 text-[var(--f-green-1)] mr-3" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span>{tr("Admissions.add2") || "5 copies of guardian's national ID"}</span>
              </li>
              <li className="flex items-center">
                <svg className="w-5 h-5 text-[var(--f-green-1)] mr-3" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span>{tr("Admissions.add3") || "10 transparent plastic folders"}</span>
              </li>
              <li className="flex items-center">
                <svg className="w-5 h-5 text-[var(--f-green-1)] mr-3" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span>{tr("Admissions.add4") || "1 plastic folder with capsule"}</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Forms Download Section */}
      <section className="w-full py-16 px-[10vw] md:px-8 lg:px-16 bg-background">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">
              {tr("Admissions.formsTitle") || "Required Forms"}
            </h2>
            <p className="text-[var(--faded-text)] max-w-3xl mx-auto">
              {tr("Admissions.formsSubtitle") ||
                "Download and complete the following forms before coming to the university"}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Faculty of Health Sciences */}
            <div className="p-8 rounded-2xl bg-gradient-to-br from-[var(--sec3-card1-bg)] to-transparent border border-[var(--sec3-cards-border)]">
              <h3 className="text-2xl font-bold mb-4">
                {tr("Admissions.healthFaculty") || "Faculty of Health Sciences"}
              </h3>
              <p className="text-[var(--faded-text)] mb-6">
                {tr("Admissions.healthFacultyDesc") ||
                  "Download the application forms for the Faculty of Health Sciences"}
              </p>
              <ul className="space-y-3 mb-6">
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-[var(--f-green-1)] mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span>{tr("Admissions.form1") || "2 Declarations"}</span>
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-[var(--f-green-1)] mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span>{tr("Admissions.form2") || "Preferences Form"}</span>
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-[var(--f-green-1)] mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span>{tr("Admissions.form3") || "Data Form"}</span>
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-[var(--f-green-1)] mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span>{tr("Admissions.form4") || "Medical Examination Form (2 copies)"}</span>
                </li>
              </ul>
              <a
                href="https://drive.google.com/.../13N43YSnVkQny9ZkRH..."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-6 py-3 bg-[var(--f-green-3)] text-text font-semibold rounded-lg hover:bg-[var(--f-green-2)] hover:text-black transition-colors duration-300"
              >
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                </svg>
                {tr("Admissions.downloadForms") || "Download Forms"}
              </a>
            </div>

            {/* Faculty of Industrial Technology */}
            <div className="p-8 rounded-2xl bg-gradient-to-br from-[var(--sec3-card2-bg)] to-transparent border border-[var(--sec3-cards-border)]">
              <h3 className="text-2xl font-bold mb-4">
                {tr("Admissions.industryFaculty") || "Faculty of Industrial Technology"}
              </h3>
              <p className="text-[var(--faded-text)] mb-6">
                {tr("Admissions.industryFacultyDesc") ||
                  "Download the application forms for the Faculty of Industrial Technology"}
              </p>
              <ul className="space-y-3 mb-6">
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-[var(--f-green-1)] mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span>{tr("Admissions.form1") || "2 Declarations"}</span>
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-[var(--f-green-1)] mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span>{tr("Admissions.form2") || "Preferences Form"}</span>
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-[var(--f-green-1)] mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span>{tr("Admissions.form3") || "Data Form"}</span>
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-[var(--f-green-1)] mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span>{tr("Admissions.form4") || "Medical Examination Form (2 copies)"}</span>
                </li>
              </ul>
              <a
                href="https://drive.google.com/.../1gw7d95TZqtBFY6vVd2..."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-6 py-3 bg-[var(--f-green-3)] text-text font-semibold rounded-lg hover:bg-[var(--f-green-2)] hover:text-black transition-colors duration-300"
              >
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                </svg>
                {tr("Admissions.downloadForms") || "Download Forms"}
              </a>
            </div>
          </div>

          {/* Important Note */}
          <div className="mt-12 p-6 rounded-xl bg-gradient-to-r from-[var(--sec3-card1-bg)] to-[var(--sec3-card3-bg)] border border-[var(--sec3-cards-border)]">
            <div className="flex items-start">
              <svg className="w-6 h-6 text-[var(--f-green-1)] mr-3 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <div>
                <h3 className="font-bold text-lg mb-2">
                  {tr("Admissions.noteTitle") || "Important Note for Students"}
                </h3>
                <p className="text-[var(--faded-text)]">
                  {tr("Admissions.noteText") ||
                    "Make sure to bring all required documents complete before heading to the Student Affairs office. Submitting files on time ensures quick completion of registration procedures."}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full py-16 px-[10vw] md:px-8 lg:px-16 bg-cardBg">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div className="relative h-96 rounded-2xl overflow-hidden">
              <Image
              alt={tr('Admissions.imageAlt') || 'October Technological University Campus'}
              src="/images/campus-life.jpg"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
              priority={false}
              placeholder="blur"
              blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRg..."
              />
            </div>
            <div className="p-6">
              <h2 className="text-3xl font-bold mb-4">
                {tr("Admissions.whyJoin") || "Why Join OTU?"}
              </h2>
              <p className="text-[var(--faded-text)] mb-6">
                {tr("Admissions.whyJoinDesc") ||
                  "October Technological University offers a unique blend of theoretical knowledge and practical training, preparing you for a successful career in technology and industry."}
              </p>
              <Link
                href={`/${locale}/about-us`}
                className="inline-flex items-center text-[var(--f-green-1)] hover:text-[var(--f-green-2)] font-semibold"
              >
                {tr("Admissions.learnMore") || "Learn more about us"}
                <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full py-16 px-[10vw] md:px-8 lg:px-16 bg-gradient-to-r from-[var(--sec3-card1-bg)] to-[var(--sec3-card3-bg)]">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">
            {tr("Admissions.ctaTitle") || "Ready to Apply?"}
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            {tr("Admissions.ctaDesc") ||
              "Secure your place at October Technological University for the academic year 2025/2026."}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#"
              className="px-8 py-3 bg-[var(--f-green-3)] text-text font-semibold rounded-lg hover:bg-[var(--f-green-2)] hover:text-black transition-colors duration-300"
            >
              {tr("Admissions.applyNow") || "Apply Now"}
            </a>
            <Link
              href="#contact"
              className="px-8 py-3 border-2 border-[var(--f-green-1)] text-[var(--f-green-1)] font-semibold rounded-lg hover:bg-[var(--f-green-1)] hover:text-black transition-colors duration-300"
            >
              {tr("Admissions.contactUs") || "Contact Us"}
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}