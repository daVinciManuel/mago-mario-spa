import type { Schema, Struct } from '@strapi/strapi';

export interface ComponentCta extends Struct.ComponentSchema {
  collectionName: 'components_component_ctas';
  info: {
    displayName: 'cta';
    icon: 'typhoon';
  };
  attributes: {
    emoji: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'\uD83D\uDDE1\uFE0F'>;
    link: Schema.Attribute.String;
    text: Schema.Attribute.String &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 22;
      }>;
  };
}

export interface ComponentService extends Struct.ComponentSchema {
  collectionName: 'components_component_services';
  info: {
    displayName: 'service';
  };
  attributes: {
    descripcion: Schema.Attribute.Text &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 150;
      }> &
      Schema.Attribute.DefaultTo<'Ilusiones que desaf\u00EDan la realidad. Cartas, cuerdas y asombro en cada truco. \u00A1Magia en vivo incre\u00EDble!'>;
    icono: Schema.Attribute.String & Schema.Attribute.DefaultTo<'\uD83D\uDD2E'>;
    link: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'/services/magia'>;
    titulo: Schema.Attribute.String &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 24;
      }> &
      Schema.Attribute.DefaultTo<'Magia de sal\u00F3n'>;
  };
}

export interface ComponentTranquilizante extends Struct.ComponentSchema {
  collectionName: 'components_component_tranquilizantes';
  info: {
    displayName: 'tranquilizante';
  };
  attributes: {
    emoji: Schema.Attribute.String & Schema.Attribute.DefaultTo<'\u2694\uFE0F'>;
    text: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'Respuesta en menos de XXIV horas \u00B7 Primera consulta sin coste'>;
  };
}

export interface ComponentTrustSeal extends Struct.ComponentSchema {
  collectionName: 'components_component_trust_seals';
  info: {
    displayName: 'trust seal';
  };
  attributes: {
    emoji: Schema.Attribute.String &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 2;
      }> &
      Schema.Attribute.DefaultTo<'\uD83D\uDCDC'>;
    text: Schema.Attribute.String &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 24;
      }> &
      Schema.Attribute.DefaultTo<'+100 Espect\u00E1culos'>;
  };
}

export interface LayoutCtaHome extends Struct.ComponentSchema {
  collectionName: 'components_layout_cta_homes';
  info: {
    displayName: 'cta-home';
  };
  attributes: {
    botones: Schema.Attribute.Component<'component.cta', true> &
      Schema.Attribute.SetMinMax<
        {
          max: 2;
          min: 1;
        },
        number
      >;
    descripcion1: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'Sea para ceremonias corporativas, celebraciones privadas, o grupos de turistas,'>;
    descripcion2: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'te aguarda una experiencia que quedar\u00E1 grabada en los anales del tiempo.'>;
    icono: Schema.Attribute.String & Schema.Attribute.DefaultTo<'\uD83D\uDD2E'>;
    subtitulo: Schema.Attribute.String &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 24;
      }> &
      Schema.Attribute.DefaultTo<'Convocatoria Real'>;
    titulo1: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'\u00BFQuieres Magia'>;
    titulo2: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'para tu d\u00EDa especial?'>;
    tranquilizante: Schema.Attribute.Component<
      'component.tranquilizante',
      false
    > &
      Schema.Attribute.SetMinMax<
        {
          max: 2;
          min: 1;
        },
        number
      >;
  };
}

export interface LayoutHeroSection extends Struct.ComponentSchema {
  collectionName: 'components_layout_hero_sections';
  info: {
    displayName: 'Hero Section';
    icon: 'alien';
  };
  attributes: {
    heading: Schema.Attribute.String;
    image: Schema.Attribute.Media<'images'> & Schema.Attribute.Required;
    subHeading: Schema.Attribute.String;
  };
}

export interface LayoutPortadaHome extends Struct.ComponentSchema {
  collectionName: 'components_layout_portada_homes';
  info: {
    displayName: 'portada-home';
  };
  attributes: {
    botones: Schema.Attribute.Component<'component.cta', true> &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMax<
        {
          max: 3;
          min: 1;
        },
        number
      >;
    pretitulo: Schema.Attribute.String & Schema.Attribute.DefaultTo<'El Gran'>;
    sellosDeConfianza: Schema.Attribute.Component<
      'component.trust-seal',
      true
    > &
      Schema.Attribute.SetMinMax<
        {
          max: 5;
          min: 2;
        },
        number
      >;
    subtitulo: Schema.Attribute.Text &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 100;
      }> &
      Schema.Attribute.DefaultTo<'Guardi\u00E1n de los antiguos secretos arcanos y maestro de las artes m\u00EDsticas.'>;
    subtitulo2: Schema.Attribute.Text &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 100;
      }> &
      Schema.Attribute.DefaultTo<'"Donde la sabidur\u00EDa milenaria cobra vida en la modernidad"'>;
    titulo: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'Mario Wenceslao'>;
  };
}

export interface LayoutServiciosHome extends Struct.ComponentSchema {
  collectionName: 'components_layout_servicios_homes';
  info: {
    displayName: 'servicios-home';
  };
  attributes: {
    servicios: Schema.Attribute.Component<'component.service', true>;
    titulo: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'Artes & Servicios'>;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'component.cta': ComponentCta;
      'component.service': ComponentService;
      'component.tranquilizante': ComponentTranquilizante;
      'component.trust-seal': ComponentTrustSeal;
      'layout.cta-home': LayoutCtaHome;
      'layout.hero-section': LayoutHeroSection;
      'layout.portada-home': LayoutPortadaHome;
      'layout.servicios-home': LayoutServiciosHome;
    }
  }
}
