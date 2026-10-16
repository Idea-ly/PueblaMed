"use client";

import Image, { type StaticImageData } from "next/image";
import { useCallback, useEffect, useState } from "react";
import { IconChevron, IconClose } from "./Icons";
import styles from "./Gallery.module.css";

export type GalleryItem = { src: StaticImageData; alt: string; label: string };

export default function Gallery({ items }: { items: GalleryItem[] }) {
  const [index, setIndex] = useState<number | null>(null);

  const close = useCallback(() => setIndex(null), []);
  const move = useCallback(
    (d: number) => setIndex((i) => (i === null ? i : (i + d + items.length) % items.length)),
    [items.length],
  );

  useEffect(() => {
    if (index === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowRight") move(1);
      if (e.key === "ArrowLeft") move(-1);
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [index, close, move]);

  return (
    <>
      <div className={styles.grid}>
        {items.map((it, i) => (
          <button
            key={it.label + i}
            id={`gallery-item-${i}`}
            className={`${styles.item} reveal`}
            style={{ "--delay": `${(i % 4) * 80}ms` } as React.CSSProperties}
            onClick={() => setIndex(i)}
            aria-label={`Ampliar foto: ${it.alt}`}
          >
            <Image
              src={it.src}
              alt={it.alt}
              placeholder="blur"
              sizes="(max-width: 700px) 100vw, (max-width: 1100px) 50vw, 33vw"
              className={styles.img}
            />
            <span className={styles.label}>{it.label}</span>
          </button>
        ))}
      </div>

      {index !== null && (
        <div className={styles.lightbox} role="dialog" aria-modal="true" aria-label={items[index].alt} onClick={close}>
          <button className={`${styles.lbBtn} ${styles.lbClose}`} onClick={close} aria-label="Cerrar" id="lightbox-close">
            <IconClose />
          </button>
          <button
            className={`${styles.lbBtn} ${styles.lbPrev}`}
            onClick={(e) => {
              e.stopPropagation();
              move(-1);
            }}
            aria-label="Foto anterior"
            id="lightbox-prev"
          >
            <IconChevron style={{ transform: "rotate(180deg)" }} />
          </button>
          <figure className={styles.lbFigure} onClick={(e) => e.stopPropagation()}>
            <Image
              key={index}
              src={items[index].src}
              alt={items[index].alt}
              sizes="100vw"
              className={styles.lbImg}
              placeholder="blur"
            />
            <figcaption>
              {items[index].label} <span>{index + 1} / {items.length}</span>
            </figcaption>
          </figure>
          <button
            className={`${styles.lbBtn} ${styles.lbNext}`}
            onClick={(e) => {
              e.stopPropagation();
              move(1);
            }}
            aria-label="Foto siguiente"
            id="lightbox-next"
          >
            <IconChevron />
          </button>
        </div>
      )}
    </>
  );
}
