export default function Loading() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="flex flex-col items-center gap-4">
        {/* Spinner Animation */}
        <div className="w-12 h-12 border-4 border-gray-100 border-t-main rounded-full animate-spin"></div>
        <p className="text-gray-500 text-sm font-medium animate-pulse">
          Loading...
        </p>
      </div>
    </div>
  );
}
