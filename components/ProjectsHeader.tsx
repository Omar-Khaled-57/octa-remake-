"use client"

import { useTR } from "@/useTR"

const ProjectsHeader = () => {
    const tr = useTR();

    return (
        <section className="w-screen pt-32 pb-16 px-4 md:px-8 lg:px-16 bg-gradient-to-b from-background to-cardBg">
            <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                {tr("Projects.title")}
                </h1>
                <p className="text-xl md:text-2xl text-fadedText max-w-3xl mx-auto">
                {tr("Projects.subtitle")}
                </p>
            </div>
            </div>
        </section>
    );
};

export default ProjectsHeader;