"use client";

import { useState, useEffect, useRef, useTransition, useCallback } from "react";
import { useRouter, usePathname, useSearchParams } from "next/navigation";
import { useTR } from "@/useTR";
import { MAJORS, SORT_OPTIONS, LEVEL_TRANSLATION_KEYS } from "@/app/[locale]/projects/constants";

interface ProjectsClientFiltersProps {
    availableTags: { tag: string; count: number }[];
    availableLevels: { level: string; count: number }[];
    resultCount: number;
}

export default function ProjectsClientFilters({
    availableTags,
    availableLevels,
    resultCount
}: ProjectsClientFiltersProps) {
    const tr = useTR();
    const router = useRouter();
    const pathname = usePathname();
    const searchParams = useSearchParams();
    const [isPending, startTransition] = useTransition();

    // Read current filters from URL
    const currentMajor = searchParams.get("major") || MAJORS[0].id;
    const faculty = MAJORS.find((m) => m.id === currentMajor)?.faculty || "industrial";
    const search = searchParams.get("search") || "";
    const sort = searchParams.get("sort") || "year-desc";
    const tagsParam = searchParams.get("tags") || "";
    const selectedTags = new Set(tagsParam ? tagsParam.split(",") : []);
    const levelsParam = searchParams.get("levels") || "";
    const selectedLevels = new Set(levelsParam ? levelsParam.split(",") : []);

    // Local state for fast input (debounced sync to URL)
    const [localSearch, setLocalSearch] = useState(search);
    const [showSortDropdown, setShowSortDropdown] = useState(false);
    const sortButtonRef = useRef<HTMLDivElement>(null);

    // Close dropdown when outside click
    useEffect(() => {
        function handleClickOutside(event: MouseEvent) {
            if (sortButtonRef.current && !sortButtonRef.current.contains(event.target as Node)) {
                setShowSortDropdown(false);
            }
        }
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    // Sync back local search change to URL (debounce to avoid too many requests)
    useEffect(() => {
        const handler = setTimeout(() => {
            if (localSearch !== search) {
                updateFilters({ search: localSearch });
            }
        }, 400); // 400ms debounce
        return () => clearTimeout(handler);
    }, [localSearch]);

    const updateFilters = useCallback(
        (updates: Record<string, string | null>) => {
            const params = new URLSearchParams(searchParams.toString());
            Object.entries(updates).forEach(([key, value]) => {
                if (value === null || value === "") {
                    params.delete(key);
                } else {
                    params.set(key, value);
                }
            });
            // Use useTransition to keep the UI interactive while Next fetches
            startTransition(() => {
                router.replace(`${pathname}?${params.toString()}`, { scroll: false });
            });
        },
        [searchParams, pathname, router]
    );

    const handleFacultyChange = (newFaculty: "industrial" | "medical") => {
        const firstMajor = MAJORS.find((m) => m.faculty === newFaculty);
        if (firstMajor) {
            // changing faculty/major also clears filters (similar to original logic)
            updateFilters({ major: firstMajor.id, search: null, tags: null, levels: null, sort: "year-desc" });
            setLocalSearch("");
        }
    };

    const handleMajorChange = (majorId: string) => {
        updateFilters({ major: majorId, search: null, tags: null, levels: null, sort: "year-desc" });
        setLocalSearch("");
    };

    const toggleTag = (tag: string) => {
        const newSet = new Set(selectedTags);
        if (newSet.has(tag)) newSet.delete(tag);
        else newSet.add(tag);
        updateFilters({ tags: Array.from(newSet).join(",") });
    };

    const clearTags = () => {
        updateFilters({ tags: null });
    };

    const toggleLevel = (level: string) => {
        const newSet = new Set(selectedLevels);
        if (newSet.has(level)) newSet.delete(level);
        else newSet.add(level);
        updateFilters({ levels: Array.from(newSet).join(",") });
    };

    const clearFilters = () => {
        setLocalSearch("");
        updateFilters({ search: null, tags: null, levels: null, sort: "year-desc" });
    };

    // Helper translations
    const getTranslatedTag = (tag: string): string => {
        const translated = tr(`Projects.tags.${tag}`);
        return translated && translated !== `Projects.tags.${tag}` ? translated : tag;
    };

    const getTranslatedLevel = (level: string): string => {
        const key = LEVEL_TRANSLATION_KEYS[level];
        if (!key) return level;
        const translated = tr(key);
        return translated && translated !== key ? translated : level;
    };

    return (
        <section className="w-full py-8 px-4 md:px-8 lg:px-16 bg-cardBg">
            <div className="max-w-6xl mx-auto">
                {/* Search and Sort Row */}
                <div id="SearchSort" className={`flex flex-row gap-4 items-center w-full mb-8 transition-opacity ${isPending ? 'opacity-70' : ''}`}>
                    {/* Search Bar */}
                    <div className="relative flex-grow">
                        <input
                            type="text"
                            placeholder={tr("Projects.searchPlaceholder")}
                            value={localSearch}
                            onChange={(e) => setLocalSearch(e.target.value)}
                            className="w-full px-5 py-3 pl-12 rounded-xl bg-cardBg border border-sec3CardsBorder text-text focus:outline-none focus:border-[var(--f-green-1)] transition-colors"
                        />
                        {/* Search Icon */}
                        <svg
                            className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-fadedText"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                            />
                        </svg>
                        {isPending && (
                            <div className="absolute right-4 top-1/2 transform -translate-y-1/2 w-4 h-4 border-2 border-t-[var(--f-green-1)] border-r-transparent border-b-[var(--f-green-1)] border-l-transparent rounded-full animate-spin"></div>
                        )}
                    </div>

                    {/* Sort Button with Dropdown */}
                    <div className="relative" ref={sortButtonRef}>
                        <button
                            onClick={() => setShowSortDropdown(!showSortDropdown)}
                            className="p-3 rounded-xl bg-cardBg border border-sec3CardsBorder hover:border-[var(--f-green-1)] transition-colors"
                            aria-label="Sort options"
                        >
                            <svg
                                className="w-5 h-5 text-fadedText"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M3 4h13M3 8h9m-9 4h6m4 0l4-4m0 0l4 4m-4-4v12"
                                />
                            </svg>
                        </button>

                        {showSortDropdown && (
                            <div className="absolute right-0 mt-2 w-56 rounded-xl bg-cardBg border border-sec3CardsBorder shadow-lg z-10">
                                {SORT_OPTIONS.map((option) => (
                                    <button
                                        key={option.value}
                                        onClick={() => {
                                            updateFilters({ sort: option.value });
                                            setShowSortDropdown(false);
                                        }}
                                        className={`block w-full text-left px-4 py-2 text-sm hover:bg-[var(--sec3-card1-bg)] transition-colors ${sort === option.value
                                                ? "text-[var(--f-green-1)] font-semibold"
                                                : "text-fadedText"
                                            }`}
                                    >
                                        {tr(option.labelKey as any)}
                                    </button>
                                ))}
                            </div>
                        )}
                    </div>
                </div>

                <hr className="border-sec3CardsBorder mb-8" />

                {/* Faculty Buttons */}
                <div id="ByFaculty" className="flex justify-start gap-4 mb-8">
                    <button
                        onClick={() => handleFacultyChange("industrial")}
                        className={`px-6 py-3 rounded-full font-semibold transition-all duration-200 ${faculty === "industrial"
                                ? "bg-[var(--f-green-1)] text-black shadow-lg scale-105"
                                : "bg-[var(--sec3-card1-bg)] text-fadedText border border-sec3CardsBorder hover:bg-[var(--sec3-card1-bg)]/80"
                            }`}
                    >
                        {tr("Majors.industryFaculty")}
                    </button>
                    <button
                        onClick={() => handleFacultyChange("medical")}
                        className={`px-6 py-3 rounded-full font-semibold transition-all duration-200 ${faculty === "medical"
                                ? "bg-[var(--f-green-1)] text-black shadow-lg scale-105"
                                : "bg-[var(--sec3-card1-bg)] text-fadedText border border-sec3CardsBorder hover:bg-[var(--sec3-card2-bg)]/80"
                            }`}
                    >
                        {tr("Majors.medicalFaculty")}
                    </button>
                </div>

                <hr className="border-sec3CardsBorder mb-8" />

                {/* Major Chips */}
                <div id="ByMajor" className="flex flex-wrap justify-start gap-3 mb-8">
                    {MAJORS.filter((m) => m.faculty === faculty).map((major) => (
                        <button
                            key={major.id}
                            onClick={() => handleMajorChange(major.id)}
                            className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-200 ${currentMajor === major.id
                                    ? "bg-[var(--f-green-1)] text-black shadow-lg scale-105"
                                    : "bg-[var(--sec3-card1-bg)] text-fadedText border border-sec3CardsBorder hover:bg-[var(--sec3-card1-bg)]/80"
                                }`}
                        >
                            {tr(`Majors.${major.id}-title` as any)}
                        </button>
                    ))}
                </div>

                <hr className="border-sec3CardsBorder mb-8" />

                {/* Filter by Level */}
                {availableLevels.length > 0 && (
                    <div id="ByLevel" className="mb-8">
                        <h3 className="text-sm font-semibold mb-3 text-fadedText">
                            {tr("Projects.filterByLevel")}:
                        </h3>
                        <div className="flex flex-wrap gap-2">
                            {availableLevels.map(({ level, count }) => (
                                <button
                                    key={level}
                                    onClick={() => toggleLevel(level)}
                                    className={`px-3 py-1.5 rounded-full text-xs font-medium transition-all duration-200 ${selectedLevels.has(level)
                                            ? "bg-[var(--f-green-1)] text-black"
                                            : "bg-[var(--sec3-card3-bg)] text-[var(--sec3-card3-text)] border border-sec3CardsBorder hover:bg-[var(--sec3-card3-bg)]/80"
                                        }`}
                                >
                                    {getTranslatedLevel(level)} ({count})
                                </button>
                            ))}
                        </div>
                    </div>
                )}

                {/* Filter by Tags */}
                {availableTags.length > 0 && (
                    <div id="ByTags" className="mb-8">
                        <h3 className="text-sm font-semibold mb-3 text-fadedText">
                            {tr("Projects.filterByTags")}:
                        </h3>
                        <div className="flex flex-wrap gap-2">
                            <button
                                onClick={clearTags}
                                className={`px-3 py-1.5 rounded-full text-xs font-medium transition-all duration-200 ${selectedTags.size === 0
                                        ? "bg-[var(--f-green-1)] text-black"
                                        : "bg-[var(--sec3-card1-bg)] text-fadedText border border-sec3CardsBorder hover:bg-[var(--sec3-card1-bg)]/80"
                                    }`}
                            >
                                {tr("Projects.allTags")}
                            </button>
                            {availableTags.map(({ tag, count }) => (
                                <button
                                    key={tag}
                                    onClick={() => toggleTag(tag)}
                                    className={`px-3 py-1.5 rounded-full text-xs font-medium transition-all duration-200 ${selectedTags.has(tag)
                                            ? "bg-[var(--f-green-1)] text-black"
                                            : "bg-[var(--sec3-card2-bg)] text-[var(--sec3-card2-text)] border border-sec3CardsBorder hover:bg-[var(--sec3-card2-bg)]/80"
                                        }`}
                                >
                                    {getTranslatedTag(tag)} ({count})
                                </button>
                            ))}
                        </div>
                    </div>
                )}

                <hr className="border-sec3CardsBorder mb-8" />

                {/* Results Count & Clear Filters */}
                <div className="flex items-center justify-between">
                    <p className="text-sm text-fadedText">
                        {resultCount} {tr("Projects.projectsFound")}
                    </p>
                    {(search || selectedTags.size > 0 || selectedLevels.size > 0 || sort !== "year-desc") && (
                        <button
                            onClick={clearFilters}
                            className="text-sm text-[var(--f-green-1)] hover:underline focus:outline-none"
                        >
                            {tr("Projects.clearFilters")}
                        </button>
                    )}
                </div>
            </div>
        </section>
    );
}
