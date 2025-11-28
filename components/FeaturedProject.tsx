import Link from "next/link";
import Image from "next/image";
import { Github, ExternalLink, ArrowRight } from "lucide-react";
import { Project } from "@/lib/data";

export default function FeaturedProject({
  project,
  reverse,
}: {
  project: Project;
  reverse?: boolean;
}) {
  return (
    <div
      className={`flex flex-col lg:flex-row gap-8 lg:gap-12 items-center mb-24 ${
        reverse ? "lg:flex-row-reverse" : ""
      }`}
    >
      {/* Image Side */}
      <div className="w-full lg:w-3/5 relative group">
        <div className="relative h-[300px] md:h-[400px] w-full rounded-2xl overflow-hidden shadow-2xl border border-gray-100 bg-gray-50">
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-cover object-top transition-all duration-5000 ease-in-out group-hover:object-bottom"
          />
        </div>
        {/* Decorative shadow blob */}
        <div
          className={`absolute -bottom-6 -right-6 w-full h-full rounded-2xl border-2 border-main/20 -z-10 ${
            reverse ? "right-auto -left-6" : ""
          }`}
        ></div>
      </div>

      {/* Content Side */}
      <div className="w-full lg:w-2/5 flex flex-col items-center lg:items-start text-center lg:text-left">
        <span className="text-main font-medium tracking-wider text-sm mb-2 uppercase">
          Featured Project
        </span>
        <h3 className="text-3xl font-bold text-gray-900 mb-4">
          {project.title}
        </h3>

        <p className="text-gray-500 text-lg leading-relaxed mb-6 line-clamp-4 md:line-clamp-none">
          {project.summary}
        </p>

        {/* Skills */}
        <div className="flex flex-wrap justify-center lg:justify-start gap-2 mb-8">
          {project.skills.map((tech) => (
            <span
              key={tech}
              className="px-4 py-1.5 text-sm font-medium text-gray-700 bg-white border border-gray-200 rounded-full shadow-sm"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Actions */}
        <div className="flex items-center gap-4">
          {project.hasDetailsPage ? (
            <Link
              href={`/projects/${project.id}`}
              className="bg-gray-900 text-white px-6 py-3 rounded-full flex items-center gap-2 hover:bg-main transition-colors font-medium"
            >
              View Case Study <ArrowRight size={18} />
            </Link>
          ) : null}

          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-gray-100 text-gray-700 rounded-full hover:bg-gray-200 hover:text-black transition-colors"
              aria-label="GitHub Code"
            >
              <Github size={22} />
            </a>
          )}

          <a
            href={project.linkProject}
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 bg-gray-100 text-gray-700 rounded-full hover:bg-gray-200 hover:text-black transition-colors"
            aria-label="Live Demo"
          >
            <ExternalLink size={22} />
          </a>
        </div>
      </div>
    </div>
  );
}
