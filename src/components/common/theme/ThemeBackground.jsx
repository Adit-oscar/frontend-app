export default function ThemeBackground() {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      <div className="absolute top-[-10%] left-[-10%] w-[50vw] max-w-150 h-[50vw] max-h-150 bg-indigo-600/20 rounded-full blur-[100px] sm:blur-[140px]" />
      <div className="absolute top-[30%] right-[-5%] w-[45vw] max-w-125 h-[45vw] max-h-125 bg-purple-600/15 rounded-full blur-[100px] sm:blur-[140px]" />
      <div className="absolute bottom-[-10%] left-[20%] w-[60vw] max-w-175 h-[60vw] max-h-175 bg-blue-600/15 rounded-full blur-[120px] sm:blur-[160px]" />

      {/* Grid Pattern Overlay */}
      <div
        className="absolute inset-0 animate-grid-move bg-size-[32px_32px]"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(99, 102, 241, 0.15) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(168, 85, 247, 0.15) 1px, transparent 1px)
            `,
          maskImage: `radial-gradient(ellipse at center, black 40%, transparent 80%)`,
          WebkitMaskImage: `radial-gradient(ellipse at center, black 40%, transparent 80%)`,
        }}
      />
    </div>
  );
}
