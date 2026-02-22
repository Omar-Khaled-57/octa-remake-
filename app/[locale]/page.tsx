"use client";

import { useState, Suspense } from "react";
import Link from "next/link";
import dynamic from "next/dynamic";
import Image from "next/image";
import { useTR } from "@/useTR";
import { useLocale } from "next-intl";

const FacultySwitch = dynamic(() => import("@/components/FacultySwitch"));
const CustomSlider = dynamic(() => import("@/components/CustomSlider"));
const MajorCard = dynamic(() => import("@/components/MajorCard"));
const CardWatcher = dynamic(() => import("@/components/CardWatcher"), { ssr: false }); // keep false if strictly client-side only logical


export default function Home() {
  const [faculty, setFaculty] = useState<"industry" | "medical">("industry");
  const tr = useTR();
  const locale = useLocale();

  return (
    <main className="flex w-full items-center justify-center flex-col">
      {/* Hero Section */}
      <section id="hero" className="w-screen h-screen pt-[23vh] pb-16 ps-[8vw] bg-blend-overlay portrait-mobile:px-0">
        <div className="full-logo flex items-center portrait-mobile:flex-col">
          <Image src="/navbar/logo.png" alt="OTU Logo" width={500} height={500} className="logo aspect-square" priority />
          <span>
            <h1 className="otu">OTU</h1>
            <div className="op">{tr.rich("Hero.op")}</div>
          </span>
        </div>
        <p className="landscape:w-[40vw] portrait-tablet:w-[80vw] mt-12 ms-4 portrait-mobile:mx-10">
          {tr.rich("Hero.description")}
        </p>
        <br />
        <br />
        <b className="ms-4 block portrait-mobile:pb-10 portrait-mobile:mx-10">
          {tr("Hero.disclaimer")}
        </b>
      </section>

      <Suspense fallback={<div>Loading Majors...</div>}>
        {/* Majors Title */}
        <div id="majors-title" className="flex justify-center my-16 md:mb-24">
          <div className="text-center px-8 py-6 border-t border-b backdrop-blur-sm rounded-xl border-[var(--title-b)] bg-[var(--title-bg)]">
            <h2 className="mj font-bold mb-2">{tr("NavbarLinks.majors")}</h2>
            <p className="text-fadedText mt-2 max-w-xl mjp">{tr.rich("Majors.description")}</p>
          </div>
        </div>

        {/* Majors Section */}
        <section
          id="majors"
          className="flex flex-wrap items-center landscape:justify-between justify-center bg-flexible p-[0%_8%_8%_8%] w-[95%] gap-[10%]"
        >
          {faculty === "industry" ? (
            <>
              <MajorCard image="/images/majors/pc.png" href={`/${locale}/projects?major=it`} title={tr("Majors.it-title")} description={tr("Majors.it")} />
              <MajorCard image="/images/majors/train.png" href={`/${locale}/projects?major=rail`} title={tr("Majors.rail-title")} description={tr("Majors.rail")} />
              <MajorCard image="/images/majors/tex.png" href={`/${locale}/projects?major=tex`} title={tr("Majors.tex-title")} description={tr("Majors.tex")} />
              <MajorCard image="/images/majors/food.png" href={`/${locale}/projects?major=food`} title={tr("Majors.food-title")} description={tr("Majors.food")} />
              <MajorCard image="/images/majors/soon.png" href="#" title={tr("Majors.soon-title")} description={tr("Majors.soon")} />
            </>
          ) : (
            <>
              <MajorCard image="/images/majors/teeth.png" href={`/${locale}/projects?major=dental`} title={tr("Majors.dental-title")} description={tr("Majors.dental")} />
              <MajorCard image="/images/majors/drug.png" href={`/${locale}/projects?major=drugs`} title={tr("Majors.drugs-title")} description={tr("Majors.drugs")} />
              <MajorCard image="/images/majors/min.png" href={`/${locale}/projects?major=mid`} title={tr("Majors.mid-title")} description={tr("Majors.medicalInfo")} />

              <div className="card-wrapper relative block pointer-events-none opacity-70">
                <div className="relative mt-12">
                  <div className="face face1 bg-cardBg rounded-t-xl flex items-center justify-center">
                    <div className="flex gap-s justify-between w-[80%] opacity-50 transition">
                      <Image src="/images/majors/smile.png" alt={tr("Majors.none")} width={100} height={100} className="card-img aspect-square" />
                      <h3 className="text-center text-black my-auto">{tr("Majors.none")}</h3>
                    </div>
                  </div>
                  <div className="flex face face2 rounded-b-xl bg-[var(--f-green-0)]"></div>
                </div>
              </div>

              <MajorCard image="/images/majors/soon.png" href="#" title={tr("Majors.soon-title")} description={tr("Majors.soon")} />
            </>
          )}

          <FacultySwitch
            faculty={faculty}
            onToggle={() => setFaculty((f) => (f === "industry" ? "medical" : "industry"))}
            heading={tr("Majors.switchHeading")}
            label={tr("Majors.switchLabel")}
            industryLabel={tr("Majors.industryFaculty")}
            medicalLabel={tr("Majors.medicalFaculty")}
          />

          <Link
            href={`/${locale}/programs`}
            className="mx-auto more mt-[6%] inline-flex items-center text-[var(--f-green-1)] hover:text-[var(--f-green-2)] font-semibold text-2xl"
          >
            {tr("learnMore.programs") || "Learn more our programs"}
            <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </section>
      </Suspense>

      <Suspense fallback={<div>Loading Support...</div>}>
        {/* Support Section */}
        <section id="sec3" className="py-12 mt-[10vh] px-[15vw] md:py-20 md:px-8 w-screen">
          <div className="max-w-6xl mx-auto">
            {/* Header Section */}
            <div className="text-center mb-12 md:mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                {tr('SupportSection.title')}
              </h2>
              <p className="text-lg md:text-xl text-[#878787c5] max-w-3xl mx-auto leading-relaxed">
                {tr('SupportSection.subtitle')}
              </p>
            </div>

            {/* Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              {/* Card 1: Resources */}
              <article className="group">
                <div className="mb-6">
                  <div className="w-14 h-14 rounded-xl bg-[var(--sec3-card1-bg)] flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <svg className="w-8 h-8 text-[var(--sec3-card1-text)]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"></path>
                    </svg>
                  </div>
                </div>

                <h3 className="text-xl font-bold text-text mb-3">
                  {tr('SupportSection.cards.resources.title')}
                </h3>
                <p className="text-fadedText leading-relaxed">
                  {tr('SupportSection.cards.resources.description')}
                </p>

                <div className="mt-6 pt-6 border-t border-sec3CardsBorder">
                  <ul className="space-y-2">
                    <li className="flex items-start text-sm">
                      <svg className="w-5 h-5 text-green-500 me-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      <span>{tr('SupportSection.cards.resources.bullet1')}</span>
                    </li>
                    <li className="flex items-start text-sm text-fadedText">
                      <svg className="w-5 h-5 text-green-500 me-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      <span>{tr('SupportSection.cards.resources.bullet2')}</span>
                    </li>
                  </ul>
                </div>
              </article>

              {/* Card 2: Mentorship */}
              <article className="group">
                <div className="mb-6">
                  <div className="w-14 h-14 rounded-xl bg-[var(--sec3-card2-bg)] flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <svg className="w-8 h-8 text-[var(--sec3-card2-text)]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path>
                    </svg>
                  </div>
                </div>

                <h3 className="text-xl font-bold text-text mb-3">
                  {tr('SupportSection.cards.mentorship.title')}
                </h3>
                <p className="text-fadedText leading-relaxed">
                  {tr('SupportSection.cards.mentorship.description')}
                </p>

                <div className="mt-6 pt-6 border-t border-sec3CardsBorder">
                  <ul className="space-y-2">
                    <li className="flex items-start text-sm">
                      <svg className="w-5 h-5 text-green-500 me-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      <span>{tr('SupportSection.cards.mentorship.bullet1')}</span>
                    </li>
                    <li className="flex items-start text-sm">
                      <svg className="w-5 h-5 text-green-500 me-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      <span>{tr('SupportSection.cards.mentorship.bullet2')}</span>
                    </li>
                  </ul>
                </div>
              </article>

              {/* Card 3: Opportunities */}
              <article className="group">
                <div className="mb-6">
                  <div className="w-14 h-14 rounded-xl bg-[var(--sec3-card3-bg)] flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <svg className="w-8 h-8 text-[var(--sec3-card3-text)]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                    </svg>
                  </div>
                </div>

                <h3 className="text-xl font-bold text-text mb-3">
                  {tr('SupportSection.cards.opportunities.title')}
                </h3>
                <p className="text-fadedText leading-relaxed">
                  {tr('SupportSection.cards.opportunities.description')}
                </p>

                <div className="mt-6 pt-6 border-t border-sec3CardsBorder">
                  <ul className="space-y-2">
                    <li className="flex items-start text-sm">
                      <svg className="w-5 h-5 text-green-500 me-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      <span>{tr('SupportSection.cards.opportunities.bullet1')}</span>
                    </li>
                    <li className="flex items-start text-sm">
                      <svg className="w-5 h-5 text-green-500 me-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      <span>{tr('SupportSection.cards.opportunities.bullet2')}</span>
                    </li>
                  </ul>
                </div>
              </article>
            </div>
            <div className="flex justify-center">
              <Link
                href={`/${locale}/research-innovation`}
                className="more mt-[6%] inline-flex items-center text-[var(--f-green-1)] hover:text-[var(--f-green-2)] font-semibold text-2xl"
              >
                {tr("Admissions.learnMore") || "Learn more our programs"}
                <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          </div>
        </section>
      </Suspense>

      <Suspense fallback={<div>Loading Slider...</div>}>
        {/* Slider */}
        <div className="w-screen h-screen p-[10%]">
          <CustomSlider />
        </div>
      </Suspense>

      <Suspense fallback={<div>Loading Features...</div>}>
        {/* Features Section */}
        <section className="w-full py-16 px-4 md:px-8 lg:px-16 bg-[var(--background)]">
          <div className="max-w-6xl mx-auto">
            {/* Section Header */}
            <div className="text-center mb-12">
              <h2 className="text-2xl md:text-3xl font-bold mb-4 text-[var(--text)]">
                {tr('FeaturesSection.title')}
              </h2>
              <p className="text-[var(--faded-text)] max-w-3xl mx-auto">
                {tr('FeaturesSection.subtitle')}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
              {/* Feature 1 */}
              <div className="text-center group hover:transform hover:-translate-y-1 transition-all duration-300">
                <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-[var(--sec3-card1-bg)] flex items-center justify-center group-hover:bg-[var(--sec3-card1-hover-glow)] transition-colors">
                  <svg className="w-8 h-8 text-[var(--sec3-card1-text)]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"></path>
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-3 text-[var(--text)]">
                  {tr('FeaturesSection.secure.title')}
                </h3>
                <p className="text-[var(--faded-text)]">
                  {tr('FeaturesSection.secure.description')}
                </p>
              </div>

              {/* Feature 2 */}
              <div className="text-center group hover:transform hover:-translate-y-1 transition-all duration-300">
                <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-[var(--sec3-card2-bg)] flex items-center justify-center group-hover:bg-[var(--sec3-card2-hover-glow)] transition-colors">
                  <svg className="w-8 h-8 text-[var(--sec3-card2-text)]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path>
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-3 text-[var(--text)]">
                  {tr('FeaturesSection.quality.title')}
                </h3>
                <p className="text-[var(--faded-text)]">
                  {tr('FeaturesSection.quality.description')}
                </p>
              </div>

              {/* Feature 3 */}
              <div className="text-center group hover:transform hover:-translate-y-1 transition-all duration-300">
                <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-[var(--sec3-card3-bg)] flex items-center justify-center group-hover:bg-[var(--sec3-card3-hover-glow)] transition-colors">
                  <svg className="w-8 h-8 text-[var(--sec3-card3-text)]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path>
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-3 text-[var(--text)]">
                  {tr('FeaturesSection.community.title')}
                </h3>
                <p className="text-[var(--faded-text)]">
                  {tr('FeaturesSection.community.description')}
                </p>
              </div>
            </div>
            <div className="flex justify-center">
              <Link
                href={`/${locale}/student-life`}
                className="more mt-[6%] inline-flex items-center text-[var(--f-green-1)] hover:text-[var(--f-green-2)] font-semibold text-2xl"
              >
                {tr("learnMore.studentLife") || "Learn more about student life"}
                <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          </div>
        </section>
      </Suspense>

      <Suspense fallback={null}>
        <CardWatcher />
      </Suspense>
    </main>
  );
}