export function InfiniteSlider({ children, duration = 40, gap = 24, durationOnHover = 75 }) {
  return (
    <div className="relative overflow-hidden">
      <div 
        className="flex animate-infinite-scroll hover:[animation-duration:var(--duration-hover)]"
        style={{
          '--duration': `${duration}s`,
          '--duration-hover': `${durationOnHover}s`,
          gap: `${gap}px`
        }}
      >
        {children}
        {children}
        {children}
        {children}
      </div>
    </div>
  );
}