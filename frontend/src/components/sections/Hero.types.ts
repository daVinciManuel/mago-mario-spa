import { CtaButtonData } from "@/types/types";

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
