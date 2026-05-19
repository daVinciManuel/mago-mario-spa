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
        link: '#servicios',
        text: 'Ver servicios',
        emoji: '',
      },
    ],
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
        text: 'Madrid · Ávila',
        emoji: '🏰'
      }
    ],
  },
  services_section: {
    title: 'Artes & Servicios',
    subtitle: 'Del Grimorio de Conocimientos Ancestrales',
    services: [
      {
        icon: '🤲',
        title: 'Magia de Cerca',
        description: 'Ilusiones imposibles a centímetros de tus manos. Cartas, monedas y objetos cotidianos cobran vida. La magia más íntima y asombrosa.',
        link: 'contacto',
        image: '/image/service/magia-cerca.jpg',
        objectPosition: 'center 27%',
      },
      {
        icon: '🎭',
        title: 'Magia de Escena',
        description: 'Espectáculos de gran formato para teatros, auditorios y eventos corporativos. Ilusiones que dejan sin aliento a cientos de espectadores.',
        link: 'contacto',
        image: '/image/service/magia-escena.jpg',
        objectPosition: 'center 20%',
      },
      {
        icon: '🔮',
        title: 'Magia de Salón',
        description: 'El ambiente perfecto para bodas, celebraciones privadas y reuniones exclusivas. Magia íntima que convierte cada mesa en un escenario.',
        link: 'contacto',
        image: '/image/service/magia-salon.jpg',
        objectPosition: 'center 10%',
      },
      {
        icon: '🎵',
        title: '12 Encantamientos',
        description: '12 melodías que acarician el alma. Un concierto íntimo con esencia bossa nova donde la música y la magia se funden en una sola experiencia.',
        link: 'contacto',
        image: '/image/service/encantamientos.jpg',
        objectPosition: 'center 7%',
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
        text: 'Solicitar presupuesto',
        emoji: '📜',
      },
      {
        link: 'tel:+34123456789',
        text: 'Llamar ahora',
        emoji: '🕯️',
      }
    ],
    microscopy: {
      text: 'Respuesta en menos de 24 horas · Primera consulta sin coste',
      emoji: '⚔️'
    }
  }
}
