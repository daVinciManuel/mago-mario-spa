// -------------------- HOME PAGE -------------------- 

export interface HomePageData {
  hero_section: HeroSectionData;
  services_section: ServiceSectionData;
  cta_section: CtaSectionData;
}

// -------------------- HERO SECTION -------------------- 
interface TrustSeal {
  text: string;
  emoji: string;
}

export interface HeroSectionData {
  pretitle: string;
  title: string;
  subtitle: string;
  subtitle2: string;
  cta: CtaButtonData[];
  trustSeals: TrustSeal[];
}

// -------------------- SERVICE SECTION ----------------- 
interface service {
  icon: string;
  title: string;
  description: string;
  link: string;
}
export interface ServiceSectionData {
  title: string;
  subtitle: string;
  services: service[];
}

// -------------------- CTA SECTION --------------------- 
export interface CtaSectionData {
  icon: string;
  subtitle: string;
  title1: string;
  title2: string;
  description1: string;
  description2: string;
  cta: CtaButtonData[];
  microscopy: {
    text: string;
    emoji: string;
  }
}
export interface CtaButtonData {
  link: string;
  text: string;
  emoji: string;
}
