import Link from "next/link";
import Image from "next/image";
import { Github, ExternalLink, ArrowRight } from "lucide-react";
import { Project } from "@/lib/data";

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <div className="group bg-white rounded-2xl overflow-hidden border border-gray-200 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col h-full">
      {/* Image Container */}
      <div className="relative h-52 w-full bg-gray-50 overflow-hidden">
        <Image
          src={project.image} // تعديل الاسم
          alt={project.title}
          fill
          className="object-cover object-top transition-all duration-12000 ease-in-out group-hover:object-bottom"
        />
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
      </div>

      {/* Content */}
      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-xl font-bold text-gray-900 mb-2">
          {project.title}
        </h3>

        <p className="text-gray-500 text-sm mb-4 line-clamp-3 leading-relaxed">
          {project.summary}
        </p>

        {/* Tech Stack Tags */}
        <div className="flex flex-wrap gap-2 mb-6">
          {project.skills.slice(0, 3).map((tech) => (
            <span
              key={tech}
              className="px-3 py-1 text-xs font-medium text-main bg-orange-50 rounded-full"
            >
              {tech}
            </span>
          ))}
          {project.skills.length > 3 && (
            <span className="px-3 py-1 text-xs font-medium text-gray-500 bg-gray-100 rounded-full">
              +{project.skills.length - 3}
            </span>
          )}
        </div>

        {/* Actions Footer */}
        <div className="mt-auto pt-4 border-t border-gray-100 flex items-center justify-between">
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-500 hover:text-gray-900 transition-colors"
            aria-label="View Code"
          >
            <Github size={20} />
          </a>

          {project.hasDetailsPage ? (
            <Link
              href={`/projects/${project.id}`}
              className="flex items-center gap-1 text-sm font-semibold text-main hover:text-orange-600 transition-colors"
            >
              View Case Study <ArrowRight size={16} />
            </Link>
          ) : (
            <a
              href={project.linkProject}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 text-sm font-semibold text-gray-700 hover:text-main transition-colors"
            >
              Live Demo <ExternalLink size={16} />
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
