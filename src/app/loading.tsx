export default function Loading() {
  return (
    <div className="fixed inset-0 flex items-center justify-center min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800">
      <div className="flex flex-col items-center justify-center">
        {/* Sleek Spinner */}
        <div className="mb-8">
          <div className="w-12 h-12 border-4 border-slate-700 border-t-blue-400 rounded-full animate-spin shadow-lg"></div>
        </div>
        {/* Modern Loading Text */}
        <h1 className="text-xl font-semibold bg-gradient-to-r from-blue-400 via-indigo-400 to-cyan-400 bg-clip-text text-transparent tracking-tight">
          Loading
        </h1>
        <p className="mt-2 text-sm text-slate-400">Preparing your experience...</p>
      </div>
    </div>
  )
}
