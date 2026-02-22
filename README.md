# octa-remake
A complete remake of my first-ever website, re-engineered with Next.js, React, Tailwind and TSX.

# Octa-Projects
A modern, bilingual (English/Arabic) university website showcasing student projects, built with Next.js, React, Tailwind CSS, and TypeScript.

## ⚠️ Important Disclaimer

**All student names and projects displayed on this website are 100% fake and AI-generated.** Due to a miscommunication, the original plan to showcase real student projects from OTU (October Technological University) could not proceed. All content, including student names, project names, descriptions, and team members have been randomly generated for demonstration purposes only.

## 🛠️ Tech Stack

- **Framework:** [Next.js 15](https://nextjs.org/) (App Router)
- **UI Library:** [React 19](https://react.dev/)
- **Styling:** [Tailwind CSS 3](https://tailwindcss.com/)
- **Language:** [TypeScript](https://www.typescriptlang.org/)
- **Internationalization:** [next-intl](https://next-intl.dev/)
- **Build Tool:** Next.js Compiler (SWC)

## 📋 Features

- **Bilingual Support:** Full English and Arabic localization
- **Dynamic Routing:** Locale-based routing (`/[locale]/`)
- **Project Showcase:** Filterable/searchable project catalog by major
- **Faculty Switching:** Toggle between Industry and Medical faculties
- **Responsive Design:** Mobile-first with landscape/portrait adaptations
- **Smooth Animations:** Card-based reveal animations
- **SEO Optimized:** Sitemap and robots.txt configuration

## 🎯 Majors

### Technology of Industry and Energy Faculty
- Information Technology (IT)
- Railway Technology
- Textile Technology
- Food Industry Technology

### Medical Sciences Technology Faculty
- Dental Implants
- Pharmaceutical Manufacturing
- Medical Information Management


## 📁 Project Structure

```
├── app/                    # Next.js App Router pages
│   └── [locale]/          # Locale-specific routes
│       ├── page.tsx       # Home page
│       ├── about-us/      # About page
│       ├── admissions/    # Admissions page
│       ├── news-events/  # News & Events page
│       ├── programs/      # Programs page
│       ├── projects/      # Projects showcase
│       ├── research-innovation/  # Research page
│       └── student-life/  # Student Life page
├── components/            # React components
├── messages/              # i18n translation files
│   ├── en.json            # English translations
│   └── ar.json            # Arabic translations
├── public/                # Static assets
│   ├── projects.json      # Project data
│   └── images/            # Image assets
├── styles/                # Custom CSS styles
├── tailwind.config.ts     # Tailwind configuration
└── i18n.ts               # Internationalization setup
```
