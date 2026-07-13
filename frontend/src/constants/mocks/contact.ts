import { ContactPageData } from "@/types/contact";

export const CONTACT_MOCK: ContactPageData = {
  title: 'Contacta al mago',
  description: 'Describe tu evento y recibirás respuesta en menos de 24 horas. La primera consulta es siempre sin coste.',
  services: [
    'Magia de Cerca',
    'Magia de Escena',
    'Magia de Salón',
    '12 Encantamientos / Concierto',
    'No lo tengo claro aún',
  ],
  trustSeals: [
    {
      emoji: '🏰',
      title: 'Zona de actuación',
      text: 'Toda España.',
    },
    {
      emoji: '⏳',
      title: 'Respuesta',
      text: 'En menos de 24 horas en días laborables.',
    },
    {
      emoji: '📜',
      title: 'Primera consulta',
      text: 'Sin compromiso y sin coste. Cuéntanos tu evento.',
    },
    {
      emoji: '📞',
      title: 'Teléfono',
      text: '+34 675 639 191',
      link: 'tel:+34675639191',
    },
  ]
}
