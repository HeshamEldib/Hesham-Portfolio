import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { ArrowLeft, Github, ExternalLink, Layers } from "lucide-react";
import { projects } from "@/lib/data";
import { Metadata } from "next";

export async function generateMetadata({
  params,
}: {
  params: { id: string };
}): Promise<Metadata> {
  const { id } = await params; // في Next.js 15 يجب انتظار params
  const project = projects.find((p) => p.id === id);

  if (!project) {
    return {
      title: "Project Not Found",
    };
  }

  return {
    title: project.title, // سيظهر: Sadeem Store | Hesham Eldib
    description: project.summary,
    openGraph: {
      images: [project.image], // صورة المشروع تظهر عند مشاركة رابطه
    },
  };
}

// 1. دالة لتوليد الصفحات الثابتة (Static Generation) لسرعة خارقة
export async function generateStaticParams() {
  return projects
    .filter((p) => p.hasDetailsPage)
    .map((project) => ({
      id: project.id,
    }));
}

// 2. مكون الصفحة الرئيسي
export default async function ProjectDetails({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  // انتظار الباراميترز (مهم في Next.js 15)
  const { id } = await params;

  // البحث عن المشروع
  const project = projects.find((p) => p.id === id);

  // إذا لم يتم العثور على المشروع (أو كان hasDetailsPage=false)
  if (!project || !project.hasDetailsPage) {
    notFound();
  }

  return (
    <article className="min-h-screen bg-white pb-20 mt-5">
      {/* Header & Back Button */}
      <div className="bg-gray-50 border-b border-gray-100 py-10">
        <div className="container mx-auto px-4">
          <Link
            href="/#projects"
            className="inline-flex items-center gap-2 text-gray-500 hover:text-main transition-colors mb-8"
          >
            <ArrowLeft size={20} /> Back to Projects
          </Link>

          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            {project.title}
          </h1>

          {/* Quick Links */}
          <div className="flex flex-wrap gap-4">
            {project.linkProject && (
              <a
                href={project.linkProject}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-main text-white px-6 py-3 rounded-full flex items-center gap-2 hover:bg-orange-600 transition-colors font-medium"
              >
                Live Demo <ExternalLink size={18} />
              </a>
            )}
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white border border-gray-200 text-gray-700 px-6 py-3 rounded-full flex items-center gap-2 hover:border-main hover:text-main transition-colors font-medium"
              >
                Source Code <Github size={18} />
              </a>
            )}
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 mt-12 grid grid-cols-1 lg:grid-cols-3 gap-12">
        {/* Left Column: Main Content */}
        <div className="lg:col-span-2">
          {/* Main Image */}
          <div className="relative w-full h-[300px] md:h-[450px] rounded-2xl overflow-hidden shadow-lg border border-gray-100 mb-10">
            <Image
              src={project.image}
              alt={project.title}
              fill
              className="object-cover object-top"
              priority
            />
          </div>

          {/* Project Description */}
          <div className="prose max-w-none">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              About the Project
            </h3>
            <p className="text-gray-600 text-lg leading-relaxed whitespace-pre-line">
              {project.fullDescription || project.summary}
            </p>
          </div>

          {/* Gallery (إذا كانت موجودة) */}
          {project.gallery && project.gallery.length > 0 && (
            <div className="mt-12">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Screenshots
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {project.gallery.map((img, index) => (
                  <div
                    key={index}
                    className="relative h-64 rounded-xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-md transition-shadow"
                  >
                    <Image
                      src={img}
                      alt={`${project.title} Screenshot ${index + 1}`}
                      fill
                      className="object-cover"
                    />
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Right Column: Sidebar Info */}
        <div className="lg:col-span-1">
          <div className="bg-gray-50 p-8 rounded-2xl border border-gray-100 sticky top-24">
            <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-2">
              <Layers className="text-main" size={20} />
              Tech Stack
            </h3>

            <div className="flex flex-wrap gap-2">
              {project.skills.map((skill) => (
                <span
                  key={skill}
                  className="px-3 py-2 bg-white text-gray-700 text-sm font-medium rounded-lg border border-gray-200 shadow-sm"
                >
                  {skill}
                </span>
              ))}
            </div>

            {/* يمكنك إضافة معلومات إضافية هنا مستقبلاً مثل التاريخ أو العميل */}
            <div className="mt-8 pt-8 border-t border-gray-200">
              <p className="text-sm text-gray-500">
                Interested in building something similar?{" "}
                <Link
                  href="/#contact"
                  className="text-main font-medium hover:underline"
                >
                  Let's talk.
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}
