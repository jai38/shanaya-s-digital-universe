export default function Waveform({ bars = 48 }: { bars?: number }) {
  return (
    <div className="flex h-16 items-end gap-[3px]">
      {Array.from({ length: bars }).map((_, i) => {
        const h = 20 + Math.abs(Math.sin(i * 0.6)) * 70 + (i % 5) * 4;
        return (
          <span
            key={i}
            style={{
              height: `${Math.min(100, h)}%`,
              animationDelay: `${i * 60}ms`,
              animationDuration: `${900 + (i % 7) * 90}ms`,
            }}
            className="w-[3px] rounded-full bg-gradient-to-t from-magenta via-cyan to-amber animate-floaty"
          />
        );
      })}
    </div>
  );
}