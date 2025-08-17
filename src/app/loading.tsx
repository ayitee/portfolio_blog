export default function Loading() {
  return (
    <div className="fixed inset-0 flex items-center justify-center min-h-screen" style={{ background: 'linear-gradient(135deg, #0a0a0b 0%, #111112 50%, #171718 100%)' }}>
      <div className="flex flex-col items-center justify-center">
        {/* Sleek Spinner */}
        <div>
          <div className="w-12 h-12 border-4 border-slate-700 border-t-slate-300 rounded-full animate-spin shadow-lg"></div>
        </div>
      </div>
    </div>
  )
}
