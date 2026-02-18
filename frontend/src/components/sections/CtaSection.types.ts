import { CTAButton } from "@/types/types";

export interface CtaSectionData {
  icon: string;
  subtitle: string;
  title1: string;
  title2: string;
  description1: string;
  description2: string;
  cta: CTAButton[];
  microscopy: {
    text: string;
    emoji: string
  }
}
