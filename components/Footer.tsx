import React from 'react';
import { useTR } from "@/useTR";
import { useLocale } from "next-intl";

const Footer = () => {
  const tr = useTR();
  const locale = useLocale();


  return (

    <footer className="pt-12 pb-8 px-4 md:px-8 z-50 transition-colors duration-300 bg-[var(--card-bg)] text-text" >
      <div className="container mx-auto">
        {/* Main footer content */}
        <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12`}>

          {/* University Info Column */}
          <div className="space-y-4">
            <div className={`flex items-center`}>
              <div className="p-2 rounded-lg bg-[var(--f-green-1)]">
                <svg className="w-8 h-8" fill="none" stroke="#111827" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 14l9-5-9-5-9 5 9 5z" />
                  <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" />
                </svg>
              </div>
              <h2 className="text-2xl ms-3 font-bold">
                {tr('footer.universityName')}
              </h2>
            </div>
            <p className="opacity-75">
              {tr('footer.description')}
            </p>
            <div className={`flex pt-2`}>
              <a
                href="https://www.facebook.com/october.technological.university/about/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-blue-700 hover:bg-blue-600 mx-1 p-2 rounded-full transition duration-300"
                aria-label="Facebook"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                </svg>
              </a>
              <a
                href="#"
                className="bg-pink-600 hover:bg-pink-500 p-2 mx-1 rounded-full transition duration-300"
                aria-label="Instagram"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
                </svg>
              </a>
              <a
                href="#"
                className="bg-blue-500 hover:bg-blue-400 p-2 mx-1 rounded-full transition duration-300"
                aria-label="Twitter"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                </svg>
              </a>
              <a
                href="#"
                className="bg-red-600 hover:bg-red-500 p-2 mx-1 rounded-full transition duration-300"
                aria-label="YouTube"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M19.812 5.418c.861.23 1.538.907 1.768 1.768C21.998 8.746 22 12 22 12s0 3.255-.418 4.814a2.504 2.504 0 0 1-1.768 1.768c-1.56.419-7.814.419-7.814.419s-6.255 0-7.814-.419a2.505 2.505 0 0 1-1.768-1.768C2 15.255 2 12 2 12s0-3.255.417-4.814a2.507 2.507 0 0 1 1.768-1.768C5.744 5 11.998 5 11.998 5s6.255 0 7.814.418ZM15.194 12 10 15V9l5.194 3Z" clipRule="evenodd" />
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links Column */}
          <div>
            <h3
              className="text-xl font-semibold mb-6 pb-2 border-b inline-block border-[var(--f-green-1)]"
            >
              {tr('footer.quickLinks')}
            </h3>
            <ul className="space-y-3">
              {[
                'aboutUniversity',
                'academicPrograms',
                'admissions',
                'researchInnovation',
                'studentLife',
                'newsEvents'
              ].map((key) => (
                <li key={key}>
                  <a
                    href={
                      key === 'aboutUniversity' ? `/${locale}/about-us` :
                        key === 'academicPrograms' ? `/${locale}/programs` :
                          key === 'admissions' ? `/${locale}/admissions` :
                            key === 'researchInnovation' ? `/${locale}/research-innovation` :
                              key === 'studentLife' ? `/${locale}/student-life` :
                                key === 'newsEvents' ? `/${locale}/news-events` :
                                  '#'
                    }
                    className="block transition-all duration-300 hover:ps-2 hover:text-[var(--f-green-1)] text-fadedText"
                  >
                    {tr(`footer.${key}`)}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info Column */}
          <div id="contact">
            <h3
              className="text-xl font-semibold mb-6 pb-2 border-b inline-block border-[var(--f-green-1)]"
            >
              {tr('footer.contactInfo')}
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3">
                <div className="min-w-5">
                  <svg className="w-5 h-5 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <span className="opacity-75">
                  {tr('footer.addressLine1')}<br />
                  {tr('footer.addressLine2')}
                </span>
              </li>
              <li className="flex items-center space-x-3">
                <div className="min-w-5">
                  <svg className="w-5 h-5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <span className="opacity-75">
                  {tr('footer.phone')}
                </span>
              </li>
              <li className="flex items-center space-x-3">
                <div className="min-w-5">
                  <svg className="w-5 h-5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <span className="opacity-75">
                  {tr('footer.email')}
                </span>
              </li>
            </ul>
          </div>

          {/* Accreditation Column */}
          <div>
            <h3
              className="text-xl font-semibold mb-6 pb-2 border-b inline-block border-[var(--f-green-1)]"
            >
              {tr('footer.accreditation')}
            </h3>
            <div className="space-y-4">
              <div
                className="p-4 rounded-lg bg-[var(--article-bg)]"
              >
                <p className="text-sm opacity-75">
                  {tr('footer.accreditation1')}
                </p>
              </div>
              <div
                className="p-4 rounded-lg bg-[var(--article-bg)]"
              >
                <p className="text-sm opacity-75">
                  {tr('footer.accreditation2')}
                </p>
              </div>
              <div className="pt-2">
                <a
                  href="https://en.wikipedia.org/wiki/6th_of_October_(city)#Education"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-[var(--f-green-1)]"
                >
                  <span>{tr('footer.learnMore')}</span>
                  <svg
                    className={`w-4 h-4 me-2`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t pt-8 border-[var(--article-b)]" >
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            {/* Copyright */}
            <div className="text-sm opacity-75">
              <p>{tr('footer.copyright')} 2025</p>
              <p className="mt-1">{tr('footer.founded')}</p>
            </div>

            {/* Footer Links */}
            <div className="flex flex-wrap justify-center gap-6 text-sm">
              {['privacyPolicy', 'termsOfService', 'accessibility', 'siteMap'].map((key) => (
                <a
                  key={key}
                  href="#"
                  className="transition duration-300 hover:text-[var(--f-green-1)] text-fadedText"
                >
                  {tr(`footer.${key}`)}
                </a>
              ))}
            </div>
          </div>

          {/* Mission Statement */}
          <div className="mt-8 pt-6 border-t text-center text-fadedText border-[var(--article-b)]" >
            <p className="italic text-sm max-w-3xl mx-auto">
              &ldquo;{tr('footer.missionStatement')}&rdquo;
            </p>
          </div>
        </div>
      </div>
    </footer >
  );
};

export default Footer;