import { HomePageData } from "@/types/home"

export const HOME_MOCK: HomePageData = {
  hero_section: {
    pretitle: 'El Gran',
    title: 'Mario Wenceslao',
    subtitle: 'Guardián de los antiguos secretos arcanos y maestro de las artes místicas.',
    subtitle2: '"Donde la sabiduría milenaria cobra vida en la modernidad"',
    cta: [
      {
        link: '/contact',
        text: 'Reservar evento',
        emoji: '🗡️',
      },
      {
        link: '/services',
        text: 'consultar servicios',
        emoji: '',
      },],
    trustSeals: [
      {
        text: '+100 Espectáculos',
        emoji: '⚔️'
      },
      {
        text: '20 Años de Magia',
        emoji: '📜'
      },
      {
        text: 'Comunidad de Madrid',
        emoji: '🏰'
      }
    ],
  },
  services_section: {
    title: 'Artes & Servicios',
    subtitle: 'Del Grimorio de Conocimientos Ancestrales',
    services: [
      {
        icon: '⚔️',
        title: 'Cuentacuentos',
        description: 'Descubre mundos mágicos. Historias que cautivan a niños y adultos. ¡Magia para toda la familia!',
        link: '/services/cuentacuentos',
      },
      {
        icon: '🔮',
        title: 'Magia de salón',
        description: 'Ilusiones que desafían la realidad. Cartas, cuerdas y asombro en cada truco. ¡Magia en vivo increíble!',
        link: '/services/magia',
      },
      {
        icon: '📜',
        title: '12 Encantamientos',
        description: '12 melodías que acarician el alma. Ritmos suaves con esencia bossa nova. Relájate y déjate envolver.',
        link: '/services/workshops',
      },
    ]
  },
  cta_section: {
    icon: '🔮',
    subtitle: 'Convocatoria Real',
    title1: '¿Quieres Magia',
    title2: 'para tu día especial?',
    description1: 'Sea para ceremonias corporativas, celebraciones privadas, o grupos de turistas,',
    description2: 'te aguarda una experiencia que quedará grabada en los anales del tiempo.',
    cta: [
      {
        link: '/contact',
        text: 'Consulta',
        emoji: '📜',
      },
      {
        link: 'tel:+34123456789',
        text: 'Invócale',
        emoji: '🕯️',
      }
    ],
    microscopy: {
      text: 'Respuesta en menos de XXIV horas · Primera consulta sin coste',
      emoji: '⚔️'
    }
  }
}
