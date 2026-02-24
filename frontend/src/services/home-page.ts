import { query } from "@/lib/strapi";
import qs from "qs";
import { HomePageData } from "@/types/home";

export async function getHomePageData(): Promise<HomePageData> {
  const queryString = qs.stringify({
    populate: {
      portada: {
        populate: {
          botones: { populate: "*" },
          sellosDeConfianza: { populate: "*" }
        }
      },
      servicios: {
        populate: {
          servicios: { populate: "*" }
        }
      },
      cta: {
        populate: {
          botones: { populate: "*" },
          tranquilizante: { populate: "*" }
        }
      }
    }
  }, {
    encodeValuesOnly: true,
  });

  const response = await query(`home-page?${queryString}`);
  const raw = response.data;

  return {
    hero_section: {
      pretitle: raw.portada.pretitulo,
      title: raw.portada.titulo,
      subtitle: raw.portada.subtitulo,
      subtitle2: raw.portada.subtitulo2,
      cta: raw.portada.botones.map((b: any) => ({
        link: b.link || '',
        text: b.text || '',
        emoji: b.emoji || ''
      })),
      trustSeals: raw.portada.sellosDeConfianza.map((s: any) => ({
        text: s.text,
        emoji: s.emoji
      }))
    },
    services_section: {
      title: raw.servicios.titulo || "Servicios",
      subtitle: "Artes Místicas",
      services: raw.servicios.servicios.map((s: { icono: string, titulo: string, descripcion: string, link: string }) => ({
        icon: s.icono,
        title: s.titulo,
        description: s.descripcion,
        link: s.link
      }))
    },
    cta_section: {
      icon: raw.cta.icono,
      subtitle: raw.cta.subtitulo,
      title1: raw.cta.titulo1,
      title2: raw.cta.titulo2,
      description1: raw.cta.descripcion1,
      description2: raw.cta.descripcion2,
      cta: raw.cta.botones.map((b: any) => ({
        link: b.link || '',
        text: b.text || '',
        emoji: b.emoji || ''
      })),
      microscopy: {
        text: raw.cta.tranquilizante.text,
        emoji: raw.cta.tranquilizante.emoji
      }
    }
  };
}

