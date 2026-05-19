function AmbientBackground() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 overflow-hidden"
    >
      <div className="absolute left-[-10rem] top-[-8rem] h-72 w-72 rounded-full bg-sky-500/20 blur-3xl" />
      <div className="absolute right-[-6rem] top-1/4 h-80 w-80 rounded-full bg-violet-500/18 blur-3xl" />
      <div className="absolute bottom-[-10rem] left-1/3 h-96 w-96 rounded-full bg-cyan-500/14 blur-3xl" />
      <div className="hero-grid absolute inset-0 opacity-50" />
    </div>
  );
}

export default AmbientBackground;
