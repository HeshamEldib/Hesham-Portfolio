import Link from "next/link";
import { FileQuestion, Home } from "lucide-react"; // أيقونة تعبر عن الملف المفقود

export default function NotFound() {
  return (
    <div className="min-h-[80vh] flex flex-col items-center justify-center text-center px-4">
      {/* Icon with animated background */}
      <div className="relative mb-8">
        <div className="absolute inset-0 bg-orange-100 rounded-full blur-xl opacity-50 animate-pulse"></div>
        <div className="relative bg-white p-6 rounded-full shadow-sm border border-gray-100">
          <FileQuestion size={64} className="text-main" />
        </div>
      </div>

      {/* Text */}
      <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
        Page Not Found
      </h1>
      <p className="text-gray-500 text-lg max-w-md mb-8">
        Oops! The page you are looking for might have been removed, had its name
        changed, or is temporarily unavailable.
      </p>

      {/* Action Button */}
      <Link
        href="/"
        className="inline-flex items-center gap-2 bg-gray-900 text-white px-8 py-3.5 rounded-full hover:bg-main transition-colors font-medium"
      >
        <Home size={20} />
        Back to Home
      </Link>
    </div>
  );
}
