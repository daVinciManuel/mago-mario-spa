import { query } from "@/lib/strapi";
import qs from "qs";
import { LinksPageData } from "@/types/links";
export async function getLinksPageData(): Promise<LinksPageData> {
  const queryString = qs.stringify({
    populate: ["avatar", "Redes"]
  }, { encodeValuesOnly: true })

  const response = await query(`links-page?${queryString}`);
  const raw = response.data

  return {
    title: raw.titulo,
    description: raw.descripcion,
    avatarUrl: raw.avatarUrl?.url,
    links: raw.redes.map((r: any) => ({
      app: r.app,
      link: r.link,
      user: r.user,
      description: r.descripcion
    }))
  }
}
