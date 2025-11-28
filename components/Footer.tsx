import Link from "next/link";
import { socialLinks } from "@/lib/data";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white border-t border-gray-200 py-12 mt-auto">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Copyright Text */}
        <div className="text-gray-500 text-sm text-center md:text-left">
          © {currentYear}{" "}
          <span className="font-semibold text-gray-900">Hesham Eldib</span>. All
          rights reserved.
        </div>

        {/* Social Icons */}
        <div className="flex items-center gap-6">
          {socialLinks.map((social) => (
            <a
              key={social.label}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-main transition-colors transform hover:scale-110 duration-200"
              aria-label={social.label}
            >
              {/* هنا نستدعي الأيقونة كـ Component */}
              <social.icon size={20} />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
