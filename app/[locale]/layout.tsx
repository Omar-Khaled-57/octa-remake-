import { ReactNode } from "react";
import Navbar from "../../../components/Navbar";
import Footer from "../../../components/Footer";
import "../../styles/globals.css";
import "../../styles/vars.css";
import "../../styles/nav.css";
import "../../styles/hero.css";
import "../../styles/lang-based.css";
import "../../styles/major-card.css";
import { NextIntlClientProvider } from "next-intl";
import { Cairo, Open_Sans } from "next/font/google";
import localFont from "next/font/local";

// Fonts
const cairo = Cairo({
  subsets: ["arabic", "latin"],
  variable: "--font-cairo",
  display: "swap",
});
const openSans = Open_Sans({
  subsets: ["latin"],
  variable: "--font-open-sans",
  display: "swap",
});
const leagueGothic = localFont({
  src: [
    {
      path: "../../../public/fonts/LeagueGothic-Regular.ttf",
      weight: "400",
      style: "normal",
    },
  ],
  variable: "--font-league-gothic",
  display: "swap",
});

// Layout Props
interface LocaleLayoutProps {
  children: ReactNode;
  params: { locale: string };
}

// Child server component for async messages
async function LocaleLayoutContent({
  children,
  locale,
}: {
  children: ReactNode;
  locale: string;
}) {
  const { getMessages } = await import("next-intl/server");
  const messages = await getMessages({ locale });
  const dir = locale === "ar" ? "rtl" : "ltr";

  return (
    <NextIntlClientProvider messages={messages}>
      <html
        lang={locale}
        dir={dir}
        data-theme="light"
        suppressHydrationWarning
        className={`${cairo.variable} ${openSans.variable} ${leagueGothic.variable}`}
      >
        <head>
          <script
            dangerouslySetInnerHTML={{
              __html: `
                (function() {
                  const saved = localStorage.getItem('theme');
                  if (saved) {
                    document.documentElement.setAttribute('data-theme', saved);
                    return;
                  }
                  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
                  document.documentElement.setAttribute('data-theme', prefersDark ? 'dark' : 'light');
                })();
              `,
            }}
          />
        </head>
        <body>
          <Navbar locale={locale} />
          {children}
          <Footer />
        </body>
      </html>
    </NextIntlClientProvider>
  );
}

// Sync layout — required by Next.js
export default function LocaleLayout({ children, params }: LocaleLayoutProps) {
  return <LocaleLayoutContent locale={params.locale}>{children}</LocaleLayoutContent>;
}
