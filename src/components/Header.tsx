"use client";

import { useEffect, useState } from "react";
import Logo from "./Logo";
import { IconClose, IconMenu, IconWhatsApp } from "./Icons";
import { defaultWaMessage, waLink } from "@/lib/site";
import styles from "./Header.module.css";

const links = [
  { href: "#servicios", label: "Servicios" },
  { href: "#beneficios", label: "Beneficios" },
  { href: "#instalaciones", label: "Instalaciones" },
  { href: "#precio", label: "Precio" },
  { href: "#faq", label: "Preguntas" },
  { href: "#contacto", label: "Contacto" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
  }, [open]);

  const solid = scrolled || open;

  return (
    <header className={`${styles.header} ${solid ? styles.solid : ""}`}>
      <div className={`container ${styles.inner}`}>
        <a href="#inicio" className={styles.brand} aria-label="PueblaMed Atlixco, inicio">
          <Logo light={!solid} />
          <span className={styles.tag}>Atlixco</span>
        </a>

        <nav className={`${styles.nav} ${open ? styles.navOpen : ""}`} aria-label="Principal">
          {links.map((l) => (
            <a key={l.href} href={l.href} onClick={() => setOpen(false)} id={`nav-${l.href.slice(1)}`}>
              {l.label}
            </a>
          ))}
          <a
            href={waLink(defaultWaMessage)}
            target="_blank"
            rel="noopener noreferrer"
            className={`btn btn-whatsapp ${styles.mobileCta}`}
          >
            <IconWhatsApp /> Agenda una visita
          </a>
        </nav>

        <a
          id="header-cta"
          href={waLink(defaultWaMessage)}
          target="_blank"
          rel="noopener noreferrer"
          className={`btn ${styles.cta}`}
        >
          Agenda una visita
        </a>

        <button
          id="menu-toggle"
          className={styles.toggle}
          aria-label={open ? "Cerrar menú" : "Abrir menú"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <IconClose /> : <IconMenu />}
        </button>
      </div>
    </header>
  );
}
