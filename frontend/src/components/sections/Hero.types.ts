interface CTAButton {
  link: string;
  text: string;
  emoji: string;
}

interface TrustSeal {
  text: string;
  emoji: string;
}

export interface HeroSectionData {
  pretitle: string;
  title: string;
  subtitle: string;
  subtitle2: string;
  cta: CTAButton[];
  trustSeals: TrustSeal[];
}
