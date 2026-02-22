export const MAJORS = [
    { id: "it", faculty: "industrial" },
    { id: "rail", faculty: "industrial" },
    { id: "tex", faculty: "industrial" },
    { id: "food", faculty: "industrial" },
    { id: "dental", faculty: "medical" },
    { id: "drugs", faculty: "medical" },
    { id: "mid", faculty: "medical" },
];

export type SortOption = "year-desc" | "year-asc" | "name-asc" | "name-desc" | "level-asc" | "level-desc";

export const SORT_OPTIONS: { value: SortOption; labelKey: string }[] = [
    { value: "year-desc", labelKey: "Projects.sort.yearDesc" },
    { value: "year-asc", labelKey: "Projects.sort.yearAsc" },
    { value: "name-asc", labelKey: "Projects.sort.nameAsc" },
    { value: "name-desc", labelKey: "Projects.sort.nameDesc" },
    { value: "level-asc", labelKey: "Projects.sort.levelAsc" },
    { value: "level-desc", labelKey: "Projects.sort.levelDesc" },
];

export const LEVEL_ORDER: Record<string, number> = {
    "1st year": 1,
    "2nd year": 2,
    "3rd year": 3,
    "4th year": 4,
};

export const LEVEL_TRANSLATION_KEYS: Record<string, string> = {
    "1st year": "Projects.levels.1st_year",
    "2nd year": "Projects.levels.2nd_year",
    "3rd year": "Projects.levels.3rd_year",
    "4th year": "Projects.levels.4th_year",
};
