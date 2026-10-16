type Props = { light?: boolean; className?: string };

/** Wordmark inspirado en el logotipo de PueblaMed (isotipo "M" + Grupo Médico). */
export default function Logo({ light = false, className }: Props) {
  const text = light ? "#ffffff" : "#0a2150";
  const sub = light ? "rgba(255,255,255,.75)" : "#1d4fd1";
  return (
    <svg
      className={className}
      viewBox="0 0 210 48"
      role="img"
      aria-label="PueblaMed Grupo Médico"
      height={44}
    >
      <defs>
        <linearGradient id={light ? "lg-l" : "lg-d"} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#4cc9f0" />
          <stop offset="1" stopColor="#1d4fd1" />
        </linearGradient>
      </defs>
      <circle cx="24" cy="24" r="21" fill="none" stroke={`url(#${light ? "lg-l" : "lg-d"})`} strokeWidth="3.2" strokeDasharray="100 32" strokeLinecap="round" transform="rotate(-60 24 24)" />
      <path
        d="M13 33 L17 15 L24 27 L31 15 L35 33"
        fill="none"
        stroke={`url(#${light ? "lg-l" : "lg-d"})`}
        strokeWidth="4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <text x="54" y="27" fontFamily="var(--font-display)" fontWeight="800" fontSize="22" fill={text} letterSpacing="-0.5">
        Puebla<tspan fill={light ? "#86e0ff" : "#1d4fd1"}>Med</tspan>
      </text>
      <text x="55" y="42" fontFamily="var(--font-body)" fontWeight="600" fontSize="9.2" fill={sub} letterSpacing="3.2">
        GRUPO MÉDICO
      </text>
    </svg>
  );
}
