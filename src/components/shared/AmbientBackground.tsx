function AmbientBackground() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 overflow-hidden"
    >
      <div className="absolute left-[-8rem] top-[-6rem] h-56 w-56 rounded-full bg-sky-500/14 blur-[96px] md:h-72 md:w-72" />
      <div className="absolute right-[-5rem] top-1/4 h-64 w-64 rounded-full bg-violet-500/12 blur-[110px] md:h-80 md:w-80" />
      <div className="absolute bottom-[-8rem] left-1/3 h-72 w-72 rounded-full bg-cyan-500/10 blur-[120px] md:h-96 md:w-96" />
      <div className="hero-grid absolute inset-0 opacity-30 dark:opacity-50" />
    </div>
  );
}

export default AmbientBackground;
