import { getStrapiData } from "@/lib/strapi"
export default async function Strapitest() {
  const strapiData = await getStrapiData('/api/home-pages');

  console.log(strapiData.data);
  const { title, description } = strapiData.data[0];

  return (
    <main className="container mx-auto py-6">
      <h1 className="text-3xl font-bold text-black">{title}</h1>
      <p className="text-gray-600">{description}</p>
    </main>
  )

}
