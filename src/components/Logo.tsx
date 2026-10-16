import Image from "next/image";

type Props = {
  light?: boolean;
  className?: string;
  width?: number;
  height?: number;
};

/** Logotipo oficial PueblaMed Grupo Médico */
export default function Logo({ light = false, className, width = 140, height = 44 }: Props) {
  return (
    <Image
      src="/img/logo-blanco.png"
      alt="PueblaMed Grupo Médico"
      width={width}
      height={height}
      priority
      className={className}
      style={{
        width: "auto",
        height: `${height}px`,
        maxWidth: "100%",
        objectFit: "contain",
        display: "block",
        filter: light ? "none" : "brightness(0) saturate(100%) invert(14%) sepia(45%) saturate(2850%) hue-rotate(205deg) brightness(95%) contrast(100%)",
        transition: "filter 0.3s ease",
      }}
    />
  );
}

