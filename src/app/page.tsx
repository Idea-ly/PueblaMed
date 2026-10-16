import Image from "next/image";
import Header from "@/components/Header";
import Gallery, { type GalleryItem } from "@/components/Gallery";
import VisitForm from "@/components/VisitForm";
import RevealObserver from "@/components/RevealObserver";
import Logo from "@/components/Logo";
import {
  IconArrow,
  IconBadge,
  IconBuilding,
  IconCalendar,
  IconCheck,
  IconClock,
  IconNetwork,
  IconParking,
  IconPhone,
  IconPiggy,
  IconPin,
  IconReception,
  IconShield,
  IconSofa,
  IconSparkle,
  IconStethoscope,
  IconTrend,
  IconUsers,
  IconWhatsApp,
  IconWifi,
} from "@/components/Icons";
import { defaultWaMessage, site, waLink } from "@/lib/site";
import styles from "./page.module.css";

import hero from "@/assets/img/hero.webp";
import fachada from "@/assets/img/fachada.webp";
import letreroNoche from "@/assets/img/letrero-noche.webp";
import edificioNoche from "@/assets/img/edificio-noche.webp";
import consultorio1 from "@/assets/img/consultorio-1.webp";
import consultorio2 from "@/assets/img/consultorio-2.webp";
import consultorio3 from "@/assets/img/consultorio-3.webp";
import consultorio4 from "@/assets/img/consultorio-4.webp";
import recepcion1 from "@/assets/img/recepcion-1.webp";
import recepcion2 from "@/assets/img/recepcion-2.webp";
import lobby from "@/assets/img/lobby.webp";
import estacionamiento from "@/assets/img/estacionamiento.webp";
import acceso from "@/assets/img/acceso.webp";

/* ---------- Contenido (presentación "Renta consultorios Atlixco") ---------- */

const servicios = [
  { icon: IconReception, title: "Recepción de pacientes", text: "Personal que recibe y orienta a tus pacientes desde su llegada." },
  { icon: IconSparkle, title: "Limpieza", text: "Instalaciones impecables todos los días, sin que tengas que preocuparte." },
  { icon: IconWifi, title: "Internet", text: "Conectividad para tu expediente electrónico, agenda y facturación." },
  { icon: IconSofa, title: "Sala de espera", text: "Un espacio cómodo y agradable para que tus pacientes esperen." },
  { icon: IconParking, title: "Estacionamiento", text: "Fácil acceso y lugar para estacionarse, para ti y tus pacientes." },
  { icon: IconShield, title: "Seguridad", text: "Vigilancia en áreas comunes con cámaras, personal y alarma." },
];

const paraTi = [
  "Consultorio listo para comenzar a atender desde el primer día.",
  "Sin realizar una gran inversión en adecuaciones o mobiliario.",
  "Reduce gastos operativos y administrativos.",
  "Flexibilidad para hacer crecer tu práctica médica.",
  "Espacios profesionales que fortalecen tu imagen.",
  "Ambiente diseñado exclusivamente para el ejercicio médico.",
];

const paraPacientes = [
  "Recepción profesional y atención desde su llegada.",
  "Sala de espera cómoda y agradable.",
  "Instalaciones modernas, limpias y seguras.",
  "Fácil acceso y estacionamiento.",
  "Diversas especialidades médicas en un mismo lugar.",
  "Un entorno que genera confianza y tranquilidad.",
];

const porQue = [
  "Excelente ubicación en Atlixco.",
  "Consultorios modernos, funcionales y completamente equipados.",
  "Forma parte de una comunidad de especialistas comprometidos con la salud.",
  "Imagen profesional que fortalece la confianza de tus pacientes.",
  "Infraestructura diseñada para brindar una atención médica de calidad.",
  "Servicios incluidos que simplifican tu operación diaria.",
  "Costos accesibles sin sacrificar calidad.",
  "Espacios que proyectan profesionalismo desde la primera impresión.",
];

const podras = [
  { icon: IconClock, text: "Dedicar más tiempo a tus pacientes." },
  { icon: IconPiggy, text: "Reducir costos de operación." },
  { icon: IconBadge, text: "Proyectar una imagen profesional." },
  { icon: IconBuilding, text: "Atender en instalaciones de primer nivel." },
  { icon: IconNetwork, text: "Integrarte a una comunidad médica multidisciplinaria." },
  { icon: IconTrend, text: "Enfocarte en hacer crecer tu consulta." },
];

const galeria: GalleryItem[] = [
  { src: consultorio1, alt: "Consultorio amueblado con escritorio de madera, sillas y libreros", label: "Consultorio equipado" },
  { src: recepcion1, alt: "Recepción con mostrador iluminado de PueblaMed Grupo Médico", label: "Recepción" },
  { src: consultorio2, alt: "Escritorio de consultorio con sillas para pacientes", label: "Área de consulta" },
  { src: letreroNoche, alt: "Letrero iluminado de PueblaMed Grupo Médico de noche", label: "PueblaMed Atlixco" },
  { src: consultorio3, alt: "Consultorio con ventanal y luz natural", label: "Luz natural" },
  { src: estacionamiento, alt: "Estacionamiento frente al edificio de PueblaMed", label: "Estacionamiento" },
  { src: recepcion2, alt: "Recepción y elevador del edificio", label: "Elevador y recepción" },
  { src: consultorio4, alt: "Consultorio con lavabo y mobiliario moderno", label: "Mobiliario moderno" },
  { src: lobby, alt: "Vestíbulo de acceso con recepción y escaleras", label: "Vestíbulo" },
  { src: acceso, alt: "Acceso principal con fachada de madera y logotipo PueblaMed", label: "Acceso principal" },
];

/* ---------- Página ---------- */

export default function Home() {
  const wa = waLink(defaultWaMessage);
  const mapSrc = `https://www.google.com/maps?q=${encodeURIComponent(site.mapsQuery)}&output=embed`;

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "MedicalBusiness",
    name: "PueblaMed Atlixco · Renta de consultorios",
    url: site.url,
    telephone: site.phoneTel,
    image: `${site.url}/og.jpg`,
    priceRange: `Desde ${site.price} MXN + IVA`,
    address: {
      "@type": "PostalAddress",
      streetAddress: "Blvd. Niños Héroes 1208 A, Col. La Alfonsina",
      addressLocality: "Atlixco",
      addressRegion: "Puebla",
      addressCountry: "MX",
    },
    parentOrganization: { "@type": "MedicalOrganization", name: "PueblaMed Grupo Médico", url: site.mainSite },
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <RevealObserver />
      <Header />

      <main>
        {/* ===================== HERO ===================== */}
        <section id="inicio" className={styles.hero}>
          <Image src={hero} alt="Recepción iluminada de PueblaMed Atlixco" fill priority placeholder="blur" sizes="100vw" className={styles.heroImg} />
          <div className={styles.heroOverlay} />
          <div className={styles.heroGlow} />

          <div className={`container ${styles.heroInner}`}>
            <div className={styles.heroContent}>
              <span className={styles.heroPill}>
                <span className={styles.dot} /> Nueva sede · Grupo Médico PueblaMed
              </span>
              <h1 className={styles.heroTitle}>
                Renta tu consultorio médico en <span className="text-gradient">Atlixco</span>
              </h1>
              <p className={styles.heroLead}>
                ¿Quieres iniciar o hacer crecer tu consulta privada <strong>sin realizar una gran inversión?</strong>{" "}
                Consultorios listos para atender desde el primer día, con todos los servicios incluidos.
              </p>
              <div className={styles.heroActions}>
                <a id="hero-whatsapp" href={wa} target="_blank" rel="noopener noreferrer" className="btn btn-whatsapp">
                  <IconWhatsApp /> Agenda una visita
                </a>
                <a id="hero-gallery" href="#instalaciones" className="btn btn-ghost">
                  Recorre las instalaciones <IconArrow />
                </a>
              </div>
              <ul className={styles.heroFacts}>
                <li>
                  <IconCheck /> Servicios incluidos
                </li>
                <li>
                  <IconCheck /> Listo desde el día 1
                </li>
                <li>
                  <IconCheck /> Comunidad multidisciplinaria
                </li>
              </ul>
            </div>

            <aside className={styles.priceCard} aria-label="Precio de renta">
              <span className={styles.priceKicker}>Renta tu consultorio desde</span>
              <p className={styles.priceValue}>
                {site.price}
                <small>+ IVA</small>
              </p>
              <div className={styles.priceDivider} />
              <ul className={styles.priceIcons}>
                {servicios.map(({ icon: Icon, title }) => (
                  <li key={title} title={title}>
                    <Icon />
                    <span>{title.replace(" de pacientes", "")}</span>
                  </li>
                ))}
              </ul>
              <a href="#precio" className={styles.priceLink} id="hero-price-link">
                Ver lo que incluye <IconArrow />
              </a>
            </aside>
          </div>

          <a href="#servicios" className={styles.scrollCue} aria-label="Ir a servicios">
            <span />
          </a>
        </section>

        {/* ===================== SERVICIOS ===================== */}
        <section id="servicios" className="section">
          <div className={`container ${styles.services}`}>
            <div className={`${styles.servicesIntro} reveal`}>
              <span className="eyebrow">Servicios incluidos</span>
              <h2 className="section-title">
                Todo listo para comenzar a consultar <span className="text-gradient">desde el primer día.</span>
              </h2>
              <p className="section-lead">
                Olvídate de contratar personal, internet, limpieza o vigilancia. En PueblaMed Atlixco tu renta ya
                incluye la operación del día a día para que tú solo te enfoques en atender.
              </p>
              <div className={styles.servicesPhoto}>
                <Image src={recepcion1} alt="Recepción de PueblaMed Atlixco" placeholder="blur" sizes="(max-width: 960px) 100vw, 40vw" />
                <div className={styles.photoBadge}>
                  <IconStethoscope />
                  <div>
                    <strong>Concéntrate en tus pacientes</strong>
                    <span>nosotros nos encargamos del resto</span>
                  </div>
                </div>
              </div>
            </div>

            <div className={styles.serviceGrid}>
              {servicios.map(({ icon: Icon, title, text }, i) => (
                <article key={title} className={`${styles.serviceCard} reveal`} style={{ "--delay": `${i * 70}ms` } as React.CSSProperties}>
                  <span className={styles.serviceIcon}>
                    <Icon />
                  </span>
                  <h3>{title}</h3>
                  <p>{text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* ===================== PARA TI / PACIENTES ===================== */}
        <section id="beneficios" className={`section ${styles.benefits}`}>
          <div className="container">
            <div className={`${styles.centerHead} reveal`}>
              <span className="eyebrow">Beneficios</span>
              <h2 className="section-title">Todo lo que necesitas para ejercer tu práctica con tranquilidad.</h2>
            </div>

            <div className={styles.audGrid}>
              <article className={`${styles.audCard} ${styles.audDark} reveal`}>
                <div className={styles.audHead}>
                  <span className={styles.audIcon}>
                    <IconStethoscope />
                  </span>
                  <h3>Para ti como especialista</h3>
                </div>
                <ul className={styles.checkList}>
                  {paraTi.map((t) => (
                    <li key={t}>
                      <IconCheck /> {t}
                    </li>
                  ))}
                </ul>
                <p className={styles.audQuote}>Concéntrate en tus pacientes, nosotros nos encargamos del resto.</p>
              </article>

              <article className={`${styles.audCard} ${styles.audLight} reveal`} style={{ "--delay": "120ms" } as React.CSSProperties}>
                <div className={styles.audPhoto}>
                  <Image src={lobby} alt="Vestíbulo de PueblaMed Atlixco" placeholder="blur" sizes="(max-width: 960px) 100vw, 50vw" />
                </div>
                <div className={styles.audHead}>
                  <span className={styles.audIcon}>
                    <IconUsers />
                  </span>
                  <h3>Para tus pacientes</h3>
                </div>
                <ul className={styles.checkList}>
                  {paraPacientes.map((t) => (
                    <li key={t}>
                      <IconCheck /> {t}
                    </li>
                  ))}
                </ul>
                <p className={styles.audQuote}>La mejor experiencia también comienza antes de la consulta.</p>
              </article>
            </div>
          </div>
        </section>

        {/* ===================== GALERÍA ===================== */}
        <section id="instalaciones" className="section">
          <div className="container">
            <div className={`${styles.splitHead} reveal`}>
              <div>
                <span className="eyebrow">Instalaciones</span>
                <h2 className="section-title">Recorre nuestras instalaciones</h2>
              </div>
              <p className="section-lead">
                Espacios modernos, funcionales y completamente equipados, diseñados exclusivamente para el ejercicio
                médico. Haz clic en cualquier foto para verla en grande.
              </p>
            </div>
            <Gallery items={galeria} />
          </div>
        </section>

        {/* ===================== POR QUÉ ===================== */}
        <section id="por-que" className={`section ${styles.why}`}>
          <div className={`container ${styles.whyInner}`}>
            <div className={`${styles.whyMedia} reveal`}>
              <Image src={fachada} alt="Fachada del edificio PueblaMed Atlixco" placeholder="blur" sizes="(max-width: 960px) 100vw, 45vw" className={styles.whyImg} />
              <div className={styles.whyBadge}>
                <span>El grupo médico</span>
                <strong>más consolidado en Puebla</strong>
                <em>ahora en Atlixco</em>
              </div>
            </div>
            <div className="reveal" style={{ "--delay": "120ms" } as React.CSSProperties}>
              <span className={`eyebrow ${styles.eyebrowLight}`}>¿Por qué elegir PueblaMed?</span>
              <h2 className={`section-title ${styles.titleLight}`}>
                Porque somos el lugar donde <span className="text-gradient">tu práctica médica puede crecer.</span>
              </h2>
              <ul className={styles.whyList}>
                {porQue.map((t) => (
                  <li key={t}>
                    <span>
                      <IconCheck />
                    </span>
                    {t}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* ===================== PODRÁS ===================== */}
        <section className="section">
          <div className="container">
            <div className={`${styles.centerHead} reveal`}>
              <span className="eyebrow">Tu próximo paso</span>
              <h2 className="section-title">
                Al elegir PueblaMed <span className="text-gradient">podrás…</span>
              </h2>
            </div>
            <div className={styles.canGrid}>
              {podras.map(({ icon: Icon, text }, i) => (
                <article key={text} className={`${styles.canCard} reveal`} style={{ "--delay": `${i * 70}ms` } as React.CSSProperties}>
                  <span className={styles.canNum}>0{i + 1}</span>
                  <span className={styles.canIcon}>
                    <Icon />
                  </span>
                  <p>{text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* ===================== NUEVA SEDE ===================== */}
        <section className={`section ${styles.about}`}>
          <div className={`container ${styles.aboutInner}`}>
            <div className="reveal">
              <span className="eyebrow">Grupo Médico PueblaMed llega a Atlixco</span>
              <h2 className="section-title">
                ¡Atlixco y sus alrededores <span className="text-gradient">necesitan tu experiencia!</span>
              </h2>
              <p className="section-lead">
                Una nueva sede que combina experiencia, infraestructura moderna y una ubicación estratégica en el
                corredor gastronómico de la ciudad. Después del éxito de nuestra clínica en Puebla capital, abrimos
                este segundo espacio para acercar atención médica especializada de calidad a más comunidades y
                brindar a los profesionales de la salud un lugar ideal para crecer su práctica.
              </p>
              <ul className={styles.aboutPoints}>
                <li>Respondemos a la demanda creciente de salud privada en la zona.</li>
                <li>Reducimos la necesidad de viajar a la capital para consultas.</li>
                <li>Expande tu consulta con el prestigio de una marca médica consolidada.</li>
              </ul>
              <div className="stats stats-vertical sm:stats-horizontal shadow-lg bg-base-100 border border-slate-200/80 rounded-2xl w-full mt-8">
                <div className="stat py-4 px-5">
                  <div className="stat-figure text-primary">
                    <IconUsers />
                  </div>
                  <div className="stat-title text-xs font-semibold uppercase text-slate-500">Comunidad</div>
                  <div className="stat-value text-primary text-3xl font-extrabold">+30</div>
                  <div className="stat-desc text-slate-500 font-medium text-xs">Especialistas médicos</div>
                </div>
                <div className="stat py-4 px-5">
                  <div className="stat-figure text-accent">
                    <IconBuilding />
                  </div>
                  <div className="stat-title text-xs font-semibold uppercase text-slate-500">Expansión</div>
                  <div className="stat-value text-secondary text-3xl font-extrabold">2ª Sede</div>
                  <div className="stat-desc text-slate-500 font-medium text-xs">Ahora en Atlixco</div>
                </div>
                <div className="stat py-4 px-5">
                  <div className="stat-figure text-success">
                    <IconBadge />
                  </div>
                  <div className="stat-title text-xs font-semibold uppercase text-slate-500">Espacios</div>
                  <div className="stat-value text-emerald-600 text-3xl font-extrabold">23–28</div>
                  <div className="stat-desc text-slate-500 font-medium text-xs">Metros cuadrados</div>
                </div>
              </div>
            </div>
            <div className={`${styles.aboutMedia} reveal`} style={{ "--delay": "120ms" } as React.CSSProperties}>
              <Image src={edificioNoche} alt="Edificio de PueblaMed Atlixco iluminado de noche" placeholder="blur" sizes="(max-width: 960px) 100vw, 50vw" className={styles.aboutImgMain} />
              <Image src={consultorio1} alt="Interior de consultorio" placeholder="blur" sizes="(max-width: 960px) 50vw, 22vw" className={styles.aboutImgSmall} />
            </div>
          </div>
        </section>

        {/* ===================== PRECIO ===================== */}
        <section id="precio" className={`section ${styles.pricing}`}>
          <div className="container">
            <div className={`${styles.pricingCard} reveal`}>
              <div className={styles.pricingLeft}>
                <span className={`eyebrow ${styles.eyebrowLight}`}>Planes de renta y costos</span>
                <h2 className={`section-title ${styles.titleLight}`}>Renta tu consultorio desde</h2>
                <div className="flex items-baseline gap-3 my-4">
                  <span className="text-5xl sm:text-6xl font-black text-white tracking-tight">{site.price}</span>
                  <div className="badge badge-accent badge-lg font-bold">MXN + IVA al mes</div>
                </div>
                <div className="inline-block bg-white/10 text-cyan-300 font-semibold text-xs px-3 py-1.5 rounded-full mb-3 border border-cyan-400/30">
                  🎁 Promoción de apertura: Primeros 6 meses de mantenimiento incluidos
                </div>
                <p className={styles.pricingNote}>
                  Opciones amuebladas y sin amueblar (23 a 28 m²). Opciones de Consultorio 1 ($8,000 + IVA) y Consultorio 2 ($9,100 + IVA) con contrato anual para profesionales con cédula.
                </p>
                <div className={styles.pricingActions}>
                  <a id="price-whatsapp" href={waLink("Hola, me interesa conocer los planes de renta de consultorios en PueblaMed Atlixco.")} target="_blank" rel="noopener noreferrer" className="btn btn-whatsapp">
                    <IconWhatsApp /> Solicitar información
                  </a>
                  <a id="price-call" href={`tel:${site.phoneTel}`} className="btn btn-ghost">
                    <IconPhone /> {site.phoneDisplay}
                  </a>
                </div>
              </div>
              <div className={styles.pricingRight}>
                <h3>Tu renta incluye</h3>
                <ul>
                  {servicios.map(({ icon: Icon, title }) => (
                    <li key={title}>
                      <span>
                        <Icon />
                      </span>
                      {title}
                    </li>
                  ))}
                  <li>
                    <span>
                      <IconBuilding />
                    </span>
                    Elevador y acceso a áreas comunes
                  </li>
                  <li>
                    <span>
                      <IconCheck />
                    </span>
                    Farmacia dentro del complejo médico
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* ===================== PREGUNTAS FRECUENTES (DAISYUI ACCORDION) ===================== */}
        <section id="faq" className="section bg-slate-50/70 border-y border-slate-200/60">
          <div className="container max-w-4xl mx-auto">
            <div className="text-center mb-12 reveal">
              <span className="eyebrow">Dudas comunes</span>
              <h2 className="section-title">Preguntas frecuentes</h2>
              <p className="section-lead mx-auto">
                Respuestas claras sobre costos, servicios incluidos, horarios y requisitos para iniciar tu consulta médica en Atlixco.
              </p>
            </div>

            <div className="flex flex-col gap-3 reveal">
              {/* FAQ 1: Tipos y medidas */}
              <div className="collapse collapse-plus bg-base-100 border border-slate-200/80 rounded-2xl shadow-sm">
                <input type="radio" name="pueblamed-faq" defaultChecked />
                <div className="collapse-title text-base sm:text-lg font-bold text-slate-800 pr-10">
                  ¿Qué consultorios tienen disponibles y de qué tamaño son?
                </div>
                <div className="collapse-content text-slate-600 text-sm leading-relaxed">
                  <p>
                    Contamos con consultorios completamente nuevos de <strong>23 a 28 m²</strong> aproximadamente. Ofrecemos opciones <strong>amuebladas</strong> (con escritorio, sillas ejecutivas y para pacientes) y <strong>sin amueblar</strong>, para que elijas la que mejor se adapte a tu especialidad e inversión.
                  </p>
                </div>
              </div>

              {/* FAQ 2: Costos y opciones */}
              <div className="collapse collapse-plus bg-base-100 border border-slate-200/80 rounded-2xl shadow-sm">
                <input type="radio" name="pueblamed-faq" />
                <div className="collapse-title text-base sm:text-lg font-bold text-slate-800 pr-10">
                  ¿Cuánto cuesta la renta mensual?
                </div>
                <div className="collapse-content text-slate-600 text-sm leading-relaxed">
                  <p className="mb-2">
                    Contamos con dos esquemas según las dimensiones y características de cada espacio:
                  </p>
                  <ul className="list-disc pl-5 space-y-1 mb-2">
                    <li><strong>Consultorio 1:</strong> $8,000 + IVA mensuales.</li>
                    <li><strong>Consultorio 2:</strong> $9,100 + IVA mensuales.</li>
                  </ul>
                  <p className="text-xs text-primary font-semibold">
                    * Incluye promoción especial: los primeros 6 meses de cuota de mantenimiento van por nuestra cuenta.
                  </p>
                </div>
              </div>

              {/* FAQ 3: Qué incluye la renta */}
              <div className="collapse collapse-plus bg-base-100 border border-slate-200/80 rounded-2xl shadow-sm">
                <input type="radio" name="pueblamed-faq" />
                <div className="collapse-title text-base sm:text-lg font-bold text-slate-800 pr-10">
                  ¿Qué servicios y áreas incluye el pago de renta?
                </div>
                <div className="collapse-content text-slate-600 text-sm leading-relaxed">
                  <p>
                    Tu renta incluye el uso completo de tu consultorio privado, recepción de pacientes con personal calificado, cómoda sala de espera, elevador moderno, estacionamiento, limpieza, internet y seguridad. Además, el complejo médico cuenta con <strong>farmacia dentro de las instalaciones</strong> para mayor comodidad de tus pacientes.
                  </p>
                </div>
              </div>

              {/* FAQ 4: Horarios */}
              <div className="collapse collapse-plus bg-base-100 border border-slate-200/80 rounded-2xl shadow-sm">
                <input type="radio" name="pueblamed-faq" />
                <div className="collapse-title text-base sm:text-lg font-bold text-slate-800 pr-10">
                  ¿Qué horarios de consulta puedo utilizar? ¿Se atiende en fines de semana?
                </div>
                <div className="collapse-content text-slate-600 text-sm leading-relaxed">
                  <p className="mb-2">
                    Los horarios de servicio del complejo están diseñados para brindar la máxima cobertura a tus pacientes:
                  </p>
                  <ul className="list-disc pl-5 space-y-1">
                    <li><strong>Lunes a viernes:</strong> 9:00 a.m. a 8:00 p.m.</li>
                    <li><strong>Sábados:</strong> 9:00 a.m. a 4:00 p.m. (atención activa en fin de semana).</li>
                  </ul>
                </div>
              </div>

              {/* FAQ 5: Contrato y requisitos */}
              <div className="collapse collapse-plus bg-base-100 border border-slate-200/80 rounded-2xl shadow-sm">
                <input type="radio" name="pueblamed-faq" />
                <div className="collapse-title text-base sm:text-lg font-bold text-slate-800 pr-10">
                  ¿Hay contrato forzoso y qué requisitos se piden para ejercer?
                </div>
                <div className="collapse-content text-slate-600 text-sm leading-relaxed">
                  <p>
                    El contrato de arrendamiento se celebra por un plazo mínimo de <strong>1 año</strong>. Está dirigido a médicos especialistas, médicos generales y profesionales de la salud con <strong>título y cédula profesional</strong> vigente para garantizar los más altos estándares a nuestra comunidad médica.
                  </p>
                </div>
              </div>

              {/* FAQ 6: Promoción primeros 6 meses */}
              <div className="collapse collapse-plus bg-base-100 border border-slate-200/80 rounded-2xl shadow-sm">
                <input type="radio" name="pueblamed-faq" />
                <div className="collapse-title text-base sm:text-lg font-bold text-slate-800 pr-10">
                  ¿Hay promociones vigentes para nuevos médicos?
                </div>
                <div className="collapse-content text-slate-600 text-sm leading-relaxed">
                  <p>
                    ¡Sí! Actualmente contamos con la promoción de bienvenida donde los <strong>primeros 6 meses de mantenimiento están totalmente incluidos</strong> sin costo adicional para que arranques tu consulta con menor carga operativa.
                  </p>
                </div>
              </div>

              {/* FAQ 7: Ubicación y visita */}
              <div className="collapse collapse-plus bg-base-100 border border-slate-200/80 rounded-2xl shadow-sm">
                <input type="radio" name="pueblamed-faq" />
                <div className="collapse-title text-base sm:text-lg font-bold text-slate-800 pr-10">
                  ¿Dónde están ubicados y cómo puedo agendar una visita guiada?
                </div>
                <div className="collapse-content text-slate-600 text-sm leading-relaxed">
                  <p>
                    Nos encontramos en <strong>Blvd. Niños Héroes 1208 A, Col. La Alfonsina, Atlixco, Puebla</strong>. Puedes enviarnos un mensaje por WhatsApp o dejarnos tus datos en el formulario para agendar una visita personalizada y recorrer los consultorios físicos disponibles.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ===================== CONTACTO ===================== */}
        <section id="contacto" className={`section ${styles.contact}`}>
          <Image src={letreroNoche} alt="" fill sizes="100vw" className={styles.contactBg} aria-hidden />
          <div className={styles.contactOverlay} />
          <div className={`container ${styles.contactInner}`}>
            <div className="reveal">
              <span className={`eyebrow ${styles.eyebrowLight}`}>Agenda una visita</span>
              <h2 className={`section-title ${styles.titleLight}`}>
                Conoce tu <span className="text-gradient">próximo consultorio.</span>
              </h2>
              <ul className={styles.contactList}>
                <li>
                  <span>
                    <IconPin />
                  </span>
                  <div>
                    <strong>{site.address}</strong>
                    <small>{site.city}</small>
                  </div>
                </li>
                <li>
                  <span>
                    <IconPhone />
                  </span>
                  <div>
                    <a href={`tel:${site.phoneTel}`} id="contact-phone">
                      <strong>{site.phoneDisplay}</strong>
                    </a>
                    <small>Llámanos o escríbenos por WhatsApp</small>
                  </div>
                </li>
                <li>
                  <span>
                    <IconCalendar />
                  </span>
                  <div>
                    <strong>Visitas con cita</strong>
                    <small>Te mostramos los consultorios disponibles</small>
                  </div>
                </li>
              </ul>
              <div className={styles.map}>
                <iframe
                  title="Mapa de ubicación de PueblaMed Atlixco"
                  src={mapSrc}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>
            <div className="reveal" style={{ "--delay": "120ms" } as React.CSSProperties}>
              <VisitForm />
            </div>
          </div>
        </section>
      </main>

      {/* ===================== FOOTER ===================== */}
      <footer className={styles.footer}>
        <div className={`container ${styles.footerInner}`}>
          <div className={styles.footerBrand}>
            <Logo light />
            <p>Conviértete en parte de una comunidad médica sólida, enfocada en resolver lo que más importa: la salud de nuestra gente.</p>
          </div>
          <div className={styles.footerCol}>
            <h4>Sede Atlixco</h4>
            <p>{site.address}</p>
            <p>{site.city}</p>
            <a href={`tel:${site.phoneTel}`}>{site.phoneDisplay}</a>
          </div>
          <div className={styles.footerCol}>
            <h4>Explora</h4>
            <a href="#servicios">Servicios incluidos</a>
            <a href="#instalaciones">Instalaciones</a>
            <a href="#precio">Precio</a>
            <a href={site.mainSite} target="_blank" rel="noopener noreferrer">
              pueblamed.com
            </a>
          </div>
        </div>
        <div className={`container ${styles.footerBottom}`}>
          <span>© 2026 PueblaMed Grupo Médico. Todos los derechos reservados.</span>
          <span>Médicos de calidad, servicio de excelencia.</span>
        </div>
      </footer>

      <a id="floating-whatsapp" href={wa} target="_blank" rel="noopener noreferrer" className={styles.fab} aria-label="Escríbenos por WhatsApp">
        <IconWhatsApp />
      </a>
    </>
  );
}
