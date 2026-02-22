"use client";

import { useTranslations } from "next-intl";
import { usePathname, useRouter } from "next/navigation";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import Link from "next/link";

const Navbar = ({ locale }: { locale: string }) => {
  const t = useTranslations("NavbarLinks");
  const pathname = usePathname();
  const router = useRouter();

  const [theme, setTheme] = useState("light");
  const [isPortrait, setIsPortrait] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [isNavHidden, setIsNavHidden] = useState(false);

  const isRTL = locale === "ar";

  useEffect(() => {
    // Theme setup
    const saved = localStorage.getItem("theme");
    if (saved) {
      setTheme(saved);
      document.documentElement.setAttribute("data-theme", saved);
    } else {
      const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
      const initial = prefersDark ? "dark" : "light";
      setTheme(initial);
      document.documentElement.setAttribute("data-theme", initial);
    }

    const mqTheme = window.matchMedia("(prefers-color-scheme: dark)");
    const handleSystemChange = (e: MediaQueryListEvent) => {
      if (!localStorage.getItem("theme")) {
        const next = e.matches ? "dark" : "light";
        setTheme(next);
        document.documentElement.setAttribute("data-theme", next);
      }
    };
    mqTheme.addEventListener("change", handleSystemChange);

    // Orientation
    const mqOrientation = window.matchMedia("(orientation: portrait)");
    setIsPortrait(mqOrientation.matches);

    const handleOrientationChange = (e: MediaQueryListEvent) => {
      setIsPortrait(e.matches);
    };
    mqOrientation.addEventListener("change", handleOrientationChange);

    // -----------------------
    // Scroll + Click Logic
    // -----------------------
    let lastScrollTop = 0;
    const navbar = document.querySelector("nav");

    const hideNavbar = () => setIsNavHidden(true);
    const showNavbar = () => setIsNavHidden(false);

    const handleScroll = () => {
      let scrollTop = window.pageYOffset || document.documentElement.scrollTop;

      if (scrollTop > lastScrollTop) {
        hideNavbar();
      } else {
        showNavbar();
      }

      lastScrollTop = scrollTop;
    };

    const handleClickOutside = (event: MouseEvent) => {
      if (navbar && !navbar.contains(event.target as Node)) {
        hideNavbar();
      } else {
        showNavbar();
      }
    };

    window.addEventListener("scroll", handleScroll);
    document.addEventListener("click", handleClickOutside);

    return () => {
      mqTheme.removeEventListener("change", handleSystemChange);
      mqOrientation.removeEventListener("change", handleOrientationChange);
      window.removeEventListener("scroll", handleScroll);
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  const toggleTheme = () => {
    const next = theme === "dark" ? "light" : "dark";
    document.documentElement.setAttribute("data-theme", next);
    localStorage.setItem("theme", next);
    setTheme(next);
  };

  const toggleLanguage = () => {
    const newLocale = locale === "en" ? "ar" : "en";
    const path = pathname.split("/").slice(2).join("/");
    document.cookie = `NEXT_LOCALE=${newLocale}; path=/; max-age=31536000`;
    router.push(`/${newLocale}/${path}`);
  };

  return (
    <>
      <nav
        className={`w-screen flex justify-between py-8 transition-transform duration-300 fixed z-10 top-0 px-[7vw] rounded-b-[20px]`}
        style={{
          transform: isNavHidden ? "translateY(-110%)" : "translateY(0)",
          transitionDuration: "1s",
        }}
        dir={isRTL ? "rtl" : "ltr"}
      >
        {isPortrait ? (
          <div className="flex justify-between items-center w-full px-4">
            <a href={`/${locale}`}>
              <Image src="/navbar/logo.png" className="logo" alt="Logo" width={50} height={50} />
            </a>
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="text-2xl"
              aria-label="Toggle menu"
              title="Toggle menu"
            >
              ☰
            </button>
          </div>
        ) : (
          <div className="flex w-full">
            <div className="flex items-center justify-between w-full">
              <a href={`/${locale}`}>
                <Image src="/navbar/logo.png" className="logo" alt="Logo" width={100} height={100} />
              </a>
              <Link href={`/${locale}#majors-title`}><span className="text-[clamp(0.7rem,1.1vw,1.25rem)] font-bold whitespace-nowrap">{t("majors")}</span></Link>
              <Link href={`/${locale}/about-us`}><span className="text-[clamp(0.7rem,1.1vw,1.25rem)] font-bold whitespace-nowrap">{t("aboutUs")}</span></Link>
              <Link href={`/${locale}/admissions`}><span className="text-[clamp(0.7rem,1.1vw,1.25rem)] font-bold whitespace-nowrap">{t("howToApply")}</span></Link>
              <Link href={`/${locale}/research-innovation`}><span className="text-[clamp(0.7rem,1.1vw,1.25rem)] font-bold whitespace-nowrap">{t("researchInnovation")}</span></Link>
              <Link href={`/${locale}/student-life`}><span className="text-[clamp(0.7rem,1.1vw,1.25rem)] font-bold whitespace-nowrap">{t("studentLife")}</span></Link>
              <Link href={`/${locale}/news-events`}><span className="text-[clamp(0.7rem,1.1vw,1.25rem)] font-bold whitespace-nowrap">{t("newsEvents")}</span></Link>
              <Link href="http://std.otu.edu.eg"><span className="text-[clamp(0.7rem,1.1vw,1.25rem)] font-bold whitespace-nowrap">{t("officialPlatform")}</span></Link>
              <Link href="https://www.facebook.com/october.technological.university"><Image className="icns" src="/navbar/facebook.svg" alt="Facebook" width={50} height={50} aria-label="Go to the facebook page" /></Link>
              <Link href="https://ar.wikipedia.org/wiki/جامعة_6_أكتوبر_التكنولوجية"><Image className="icns" src="/navbar/wiki.svg" alt="Wikipedia" width={50} height={50} aria-label="Go to the wikipedia page" /></Link>
              <button
                onClick={toggleTheme}
                className="rounded-md px-4 py-2 bg-transparent"
                aria-label="Toggle theme"
                title="Toggle theme"
              >
                {theme === "dark" ? (
                  <Image
                    src="/navbar/d-mode.png"
                    className="icns"
                    alt="Dark mode"
                    width={24}
                    height={24}
                  />
                ) : (
                  <Image
                    src="/navbar/l-mode.png"
                    className="icns"
                    alt="Light mode"
                    width={24}
                    height={24}
                  />
                )}
              </button>

              <button
                onClick={toggleLanguage}
                aria-label="Toggle language"
                title="Toggle language"
                className="lang-btn rounded-md"
              >
                <h3 className="lang-txt">{locale === "en" ? "EN" : "ع"}</h3>
              </button>
            </div>
          </div>
        )}
      </nav>

      {isPortrait && menuOpen && (
        <>
          <div
            className="fixed inset-0 bg-black bg-opacity-50 z-40"
            onClick={() => setMenuOpen(false)}
          />
          <div
            className={`fixed ${isRTL ? "left-0" : "right-0"} top-0 h-full w-64 bg-[var(--background)] z-50 flex flex-col gap-4 p-4 text-lg ps-7`}
            dir={isRTL ? "rtl" : "ltr"}
          >
            <button
              onClick={() => setMenuOpen(false)}
              className="self-end text-xl"
              aria-label="Close menu"
              title="Close menu"
            >
              ×
            </button>
            <Link href={`/${locale}#majors-title`} onClick={() => setMenuOpen(false)}><span className="text-xl font-bold">{t("majors")}</span></Link>
            <Link href={`/${locale}/about-us`} onClick={() => setMenuOpen(false)}><span className="text-xl font-bold">{t("aboutUs")}</span></Link>
            <Link href={`/${locale}/admissions`} onClick={() => setMenuOpen(false)}><span className="text-xl font-bold">{t("howToApply")}</span></Link>
            <Link href={`/${locale}/research-innovation`} onClick={() => setMenuOpen(false)}><span className="text-xl font-bold">{t("researchInnovation")}</span></Link>
            <Link href={`/${locale}/student-life`} onClick={() => setMenuOpen(false)}><span className="text-xl font-bold">{t("studentLife")}</span></Link>
            <Link href={`/${locale}/news-events`} onClick={() => setMenuOpen(false)}><span className="text-xl font-bold">{t("newsEvents")}</span></Link>
            <Link href="http://std.otu.edu.eg" onClick={() => setMenuOpen(false)}><span className="text-xl font-bold">{t("officialPlatform")}</span></Link>
            <div className="flex gap-4 mt-4">
              <Link href="https://www.facebook.com/october.technological.university" onClick={() => setMenuOpen(false)}>
                <Image className="icns" src="/navbar/facebook.svg" alt="Facebook" width={50} height={50} />
              </Link>
              <Link href="https://ar.wikipedia.org/wiki/جامعة_6_أكتوبر_التكنولوجية" onClick={() => setMenuOpen(false)}>
                <Image className="icns" src="/navbar/wiki.svg" alt="Wikipedia" width={50} height={50} />
              </Link>
            </div>
            <div className="flex gap-4 mt-4">
              <button
                onClick={() => { toggleTheme(); setMenuOpen(false); }}
                className="rounded-md py-2 bg-transparent"
                aria-label="Toggle theme"
                title="Toggle theme"
              >
                {theme === "dark" ? (
                  <Image
                    src="/navbar/d-mode.png"
                    className="icns"
                    alt="Dark mode"
                    width={24}
                    height={24}
                  />
                ) : (
                  <Image
                    src="/navbar/l-mode.png"
                    className="icns"
                    alt="Light mode"
                    width={24}
                    height={24}
                  />
                )}
              </button>
              <button
                onClick={() => { toggleLanguage(); setMenuOpen(false); }}
                aria-label="Toggle language"
                title="Toggle language"
              >
                <h3>{locale === "en" ? "EN" : "ع"}</h3>
              </button>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default Navbar;
