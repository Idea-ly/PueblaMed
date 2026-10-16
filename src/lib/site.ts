/** Datos centrales del sitio (tomados de la presentación "Renta consultorios Atlixco"). */
export const site = {
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://atlixco.pueblamed.com",
  name: "PueblaMed Atlixco",
  price: "$8,000",
  phoneDisplay: "222 324 74 65",
  phoneTel: "+522223247465",
  whatsapp: "522223247465",
  address: "Blvd. Niños Héroes 1208 A, Col. La Alfonsina",
  city: "Atlixco, Puebla",
  mapsQuery: "Blvd. Niños Héroes 1208 A, La Alfonsina, Atlixco, Puebla",
  mainSite: "https://www.pueblamed.com",
};

export const waLink = (text: string) =>
  `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(text)}`;

export const defaultWaMessage =
  "Hola, me interesa rentar un consultorio en PueblaMed Atlixco. ¿Me pueden dar más información?";
