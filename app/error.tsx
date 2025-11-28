"use client"; // ضروري جداً لصفحات الخطأ

import { useEffect } from "react";
import Link from "next/link";
import { AlertTriangle, RotateCcw, Home } from "lucide-react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  
  useEffect(() => {
    // يمكنك هنا تسجيل الخطأ في خدمة خارجية مثل Sentry
    console.error("Application Error:", error);
  }, [error]);

  return (
    <div className="min-h-[80vh] flex flex-col items-center justify-center text-center px-4">
      
      {/* Animated Icon Container */}
      <div className="relative mb-8">
        <div className="absolute inset-0 bg-red-100 rounded-full blur-xl opacity-50 animate-pulse"></div>
        <div className="relative bg-white p-6 rounded-full shadow-sm border border-gray-100">
          <AlertTriangle size={64} className="text-red-500" />
        </div>
      </div>

      {/* Error Text */}
      <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
        Something went wrong!
      </h1>
      <p className="text-gray-500 text-lg max-w-md mb-8">
        We apologize for the inconvenience. An unexpected error occurred while processing your request.
      </p>

      {/* Action Buttons */}
      <div className="flex flex-col sm:flex-row gap-4">
        {/* زر إعادة المحاولة (مهم جداً في Next.js) */}
        <button
          onClick={reset}
          className="inline-flex items-center justify-center gap-2 bg-main text-white px-8 py-3.5 rounded-full hover:bg-orange-600 transition-colors font-medium shadow-lg shadow-orange-200"
        >
          <RotateCcw size={18} />
          Try Again
        </button>

        {/* زر العودة للرئيسية */}
        <Link 
          href="/" 
          className="inline-flex items-center justify-center gap-2 bg-white border border-gray-200 text-gray-700 px-8 py-3.5 rounded-full hover:bg-gray-50 transition-colors font-medium"
        >
          <Home size={18} />
          Back to Home
        </Link>
      </div>
      
      {/* Error Code (Optional for debugging) */}
      {error.digest && (
        <p className="mt-8 text-xs text-gray-400 font-mono">
          Error Digest: {error.digest}
        </p>
      )}
    </div>
  );
}