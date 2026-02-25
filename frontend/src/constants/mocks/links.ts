import { LinksPageData } from "@/types/links";

export const LINKS_PAGE_MOCK: LinksPageData = {
  title: "Mario Wenceslao",
  description: "Mago, músico y esperantista",
  avatarUrl: "/image/icon/mago.png",
  links: [
    {
      app: "Web Oficial",
      link: "https://magomario.netlify.app/",
      description: 'Descubre los orígenes del mago'
    },
    {
      app: "Instagram",
      link: "https://instagram.com",
      user: "@mariowenceslao",
      description: "Echa un vistazo a mi día a día"
    },
    {
      app: "YouTube",
      link: "https://www.youtube.com/@mariowenceslao1930",
      description: "Canciones y actuaciones en vivo"
    }
  ]
}
