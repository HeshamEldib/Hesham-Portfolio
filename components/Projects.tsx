"use client";

import { projects } from "@/lib/data";
import ProjectCard from "./ProjectCard";
import FeaturedProject from "./FeaturedProject";

export default function Projects() {
  // تقسيم المشاريع: أول 2 مميزين، والباقي عادي
  const featuredProjects = projects.slice(0, 2);
  const standardProjects = projects.slice(2);

  return (
    <section id="projects" className="py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-20">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Recent <span className="text-main">Works</span>
          </h2>
          <p className="text-gray-500 max-w-xl mx-auto">
            A selection of projects that demonstrate my skills in solving
            real-world problems.
          </p>
        </div>

        {/* 1. Featured Projects Section */}
        <div className="mb-24">
          {featuredProjects.map((project, index) => (
            <FeaturedProject
              key={project.id}
              project={project}
              reverse={index % 2 !== 0}
            />
          ))}
        </div>

        {/* 2. Other Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {standardProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
