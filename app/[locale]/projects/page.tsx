import fs from "fs";
import path from "path";
import { Suspense } from "react";
import dynamic from "next/dynamic";
import { getTranslations } from "next-intl/server";
import { MAJORS, SortOption, LEVEL_ORDER, LEVEL_TRANSLATION_KEYS } from "./constants";
import ProjectsClientFilters from "../../../components/ProjectsClientFilters";
import ProjectsHeader from "../../../components/ProjectsHeader";

import CardWatcher from "../../../components/CardWatcher";

type Project = {
  id: string;
  name: string;
  nameAr?: string;
  description: string;
  descriptionAr?: string;
  faculty: string;
  level: string;
  year: string;
  leader: string;
  leaderAr?: string;
  students: string[];
  studentsAr?: string[];
  tags: string[];
  majorId: string;
};

interface ProjectsPageProps {
  params: Promise<{ locale: string }>;
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}

export default async function ProjectsPage({ params, searchParams }: ProjectsPageProps) {
  const { locale } = await params;
  const resolvedSearchParams = await searchParams;

  // Get translations
  // const tr = await getTranslations();
  const tr = await getTranslations({locale});

  // Read projects.json content efficiently from FS
  const dataPath = path.join(process.cwd(), "public", "projects.json");
  const fileContents = fs.readFileSync(dataPath, "utf8");
  const projects: Project[] = JSON.parse(fileContents);

  // Extract query parameters with defaults
  const majorParam = typeof resolvedSearchParams.major === 'string' ? resolvedSearchParams.major : MAJORS[0].id;
  const validMajor = MAJORS.find((m) => m.id === majorParam) || MAJORS[0];
  const searchQuery = typeof resolvedSearchParams.search === 'string' ? resolvedSearchParams.search.toLowerCase() : "";
  const sortOption = typeof resolvedSearchParams.sort === 'string' ? resolvedSearchParams.sort as SortOption : "year-desc";
  const tagsParam = typeof resolvedSearchParams.tags === 'string' ? resolvedSearchParams.tags : "";
  const selectedTags = new Set(tagsParam ? tagsParam.split(",") : []);
  const levelsParam = typeof resolvedSearchParams.levels === 'string' ? resolvedSearchParams.levels : "";
  const selectedLevels = new Set(levelsParam ? levelsParam.split(",") : []);

  // Filter projects based on rules
  let filtered = projects.filter((p) => p.majorId === validMajor.id);

  if (searchQuery.trim()) {
    filtered = filtered.filter(
      (p) =>
        p.name.toLowerCase().includes(searchQuery) ||
        p.description.toLowerCase().includes(searchQuery) ||
        p.leader.toLowerCase().includes(searchQuery) ||
        p.students.some((s) => s.toLowerCase().includes(searchQuery)) ||
        (p.nameAr && p.nameAr.toLowerCase().includes(searchQuery)) ||
        (p.descriptionAr && p.descriptionAr.toLowerCase().includes(searchQuery)) ||
        (p.leaderAr && p.leaderAr.toLowerCase().includes(searchQuery)) ||
        (p.studentsAr && p.studentsAr.some((s) => s.toLowerCase().includes(searchQuery)))
    );
  }

  if (selectedTags.size > 0) {
    filtered = filtered.filter((p) => p.tags.some((tag) => selectedTags.has(tag)));
  }

  if (selectedLevels.size > 0) {
    filtered = filtered.filter((p) => selectedLevels.has(p.level));
  }

  // Sort projects
  const sortedProjects = [...filtered];
  switch (sortOption) {
    case "year-desc":
      sortedProjects.sort((a, b) => b.year.localeCompare(a.year));
      break;
    case "year-asc":
      sortedProjects.sort((a, b) => a.year.localeCompare(b.year));
      break;
    case "name-asc":
      sortedProjects.sort((a, b) => {
        const aName = locale === "ar" ? (a.nameAr || a.name) : a.name;
        const bName = locale === "ar" ? (b.nameAr || b.name) : b.name;
        return aName.localeCompare(bName);
      });
      break;
    case "name-desc":
      sortedProjects.sort((a, b) => {
        const aName = locale === "ar" ? (a.nameAr || a.name) : a.name;
        const bName = locale === "ar" ? (b.nameAr || b.name) : b.name;
        return bName.localeCompare(aName);
      });
      break;
    case "level-asc":
      sortedProjects.sort((a, b) => (LEVEL_ORDER[a.level] || 0) - (LEVEL_ORDER[b.level] || 0));
      break;
    case "level-desc":
      sortedProjects.sort((a, b) => (LEVEL_ORDER[b.level] || 0) - (LEVEL_ORDER[a.level] || 0));
      break;
  }

  // Calculate available tags and levels for the current major
  const majorProjects = projects.filter((p) => p.majorId === validMajor.id);
  const tagCounts = new Map<string, number>();
  majorProjects.forEach((p) => {
    p.tags.forEach((tag) => {
      tagCounts.set(tag, (tagCounts.get(tag) || 0) + 1);
    });
  });
  const availableTags = Array.from(tagCounts.entries())
    .sort((a, b) => b[1] - a[1])
    .map(([tag, count]) => ({ tag, count }));

  const levelCounts = new Map<string, number>();
  majorProjects.forEach((p) => {
    levelCounts.set(p.level, (levelCounts.get(p.level) || 0) + 1);
  });
  const availableLevels = Array.from(levelCounts.entries())
    .sort((a, b) => (LEVEL_ORDER[a[0]] || 0) - (LEVEL_ORDER[b[0]] || 0))
    .map(([level, count]) => ({ level, count }));

  // Shared translation helpers
  const getTranslatedTag = (tag: string): string => {
    const translated = tr(`Projects.tags.${tag}`);
    return translated && translated !== `Projects.tags.${tag}` ? translated : tag;
  };

  const getTranslatedLevel = (level: string): string => {
    const key = LEVEL_TRANSLATION_KEYS[level];
    if (!key) return level;
    const translated = tr(key as any);
    return translated && translated !== key ? translated : level;
  };

  return (
    <main className="flex pt-[15vh] w-full items-center justify-center flex-col">
      {/* Hero Section */}
      <ProjectsHeader />

      {/* Client Filter Controls */}
      <ProjectsClientFilters
        availableTags={availableTags}
        availableLevels={availableLevels}
        resultCount={sortedProjects.length}
      />

      {/* RENDER PROJECTS LIST ON THE SERVER */}
      <section className="w-full py-16 px-4 md:px-8 lg:px-16 bg-background">
        <div className="max-w-6xl mx-auto">
          {sortedProjects.length === 0 ? (
            <div className="text-center py-16">
              <p className="text-xl text-fadedText">
                {tr("Projects.noProjects")}
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {sortedProjects.map((project) => (
                <div
                  key={project.id}
                  className="group p-6 rounded-2xl bg-gradient-to-br from-[var(--sec3-card1-bg)] to-transparent border border-sec3CardsBorder hover:border-[var(--sec3-card1-text)] transition-all duration-300 hover:shadow-xl"
                >
                  <div className="flex justify-between items-start mb-3">
                    <span className="text-xs font-mono text-[var(--f-green-1)] bg-[var(--sec3-card1-bg)] px-2 py-1 rounded">
                      {project.id}
                    </span>
                    <span className="text-xs text-fadedText">{project.year}</span>
                  </div>
                  <h3 className="text-xl font-bold mb-2 line-clamp-2">
                    {locale === "ar" ? (project.nameAr || project.name) : project.name}
                  </h3>
                  <p className="text-fadedText text-sm mb-4 line-clamp-3">
                    {locale === "ar" ? (project.descriptionAr || project.description) : project.description}
                  </p>
                  <div className="space-y-2 text-sm">
                    <p>
                      <span className="font-semibold">{tr("Projects.level")}:</span>{" "}
                      {getTranslatedLevel(project.level)}
                    </p>
                    <p>
                      <span className="font-semibold">{tr("Projects.leader")}:</span>{" "}
                      {locale === "ar" ? (project.leaderAr || project.leader) : project.leader}
                    </p>
                    <p>
                      <span className="font-semibold">{tr("Projects.team")}:</span>{" "}
                      {project.students.length} {tr("Projects.members")}
                    </p>
                    {project.tags && project.tags.length > 0 && (
                      <div className="flex flex-wrap gap-2 mt-3">
                        {project.tags.map((tag) => (
                          <span
                            key={tag}
                            className="text-xs px-2 py-1 rounded-full bg-[var(--sec3-card2-bg)] text-[var(--sec3-card2-text)]"
                          >
                            {getTranslatedTag(tag)}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* CardWatcher for animations */}
      <Suspense fallback={null}>
        <CardWatcher />
      </Suspense>
    </main>
  );

}



