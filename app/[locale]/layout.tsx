import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import "../../styles/globals.css";
import "../../styles/vars.css";
import "../../styles/nav.css";
import "../../styles/hero.css";
import "../../styles/lang-based.css";
import "../../styles/major-card.css";


import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import { Cairo, Open_Sans } from "next/font/google";
import localFont from "next/font/local";

// Font Configurations
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
      path: "../../public/fonts/LeagueGothic-Regular.ttf",
      weight: "400",
      style: "normal",
    }
  ],
  variable: "--font-league-gothic",
  display: "swap",
});


export async function generateMetadata({
  params: { locale },
}: {
  params: { locale: string };
}) {
  const messages: any = await getMessages({ locale });
  const siteUrl = "https://otu.edu.eg"; // Replace with actual domain

  return {
    title: {
      default: messages.NavbarLinks?.homeTitle || "Octa Projects",
      template: `%s | ${messages.NavbarLinks?.homeTitle || "Octa Projects"}`,
    },
    description: messages.Hero?.description || "October Technological University",
    metadataBase: new URL(siteUrl),
    alternates: {
      canonical: `/${locale}`,
      languages: {
        'en': '/en',
        'ar': '/ar',
      },
    },
    openGraph: {
      title: messages.NavbarLinks?.homeTitle || "Octa Projects",
      description: messages.Hero?.description || "October Technological University",
      url: `${siteUrl}/${locale}`,
      siteName: "October Technological University",
      images: [
        {
          url: '/navbar/logo.png',
          width: 800,
          height: 600,
        },
      ],
      locale: locale,
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: messages.NavbarLinks?.homeTitle || "Octa Projects",
      description: messages.Hero?.description || "October Technological University",
      images: ['/navbar/logo.png'],
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
  };
}

export default async function LocaleLayout({
  children,
  params: { locale },
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  const messages = await getMessages({ locale });
  const dir = locale === "ar" ? "rtl" : "ltr";

  return (
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
        <NextIntlClientProvider messages={messages}>
          <Navbar locale={locale} />
          {children}
          <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
