import { Metadata } from 'next'
import { ContactSection } from '@/components/sections/ContactSection'
import { CONTACT_MOCK } from '@/constants/mocks/contact';
import { getContactPageData } from '@/services/contact-page'


export const metadata: Metadata = {
  title: 'Contacto | El Gran Mario Wenceslao — Mago en Madrid y Ávila',
  description: 'Contrata al mago Mario Wenceslao para tu evento en Madrid y Ávila. Magia de cerca, de escena, de salón y conciertos. Primera consulta sin coste.',
}

export default async function ContactPage() {
  let data;

  try {
    data = await getContactPageData()
  } catch (error) {
    console.warn('Sanity fetch failed, falling back to mock:', error);
    data = CONTACT_MOCK;
  }

  return (
    <main className="min-h-screen">
      <ContactSection data={data} />
    </main>
  )
}
