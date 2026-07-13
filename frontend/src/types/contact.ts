// CONTACT PAGE
export interface ContactPageData {
  title: string;
  description: string;
  services: string[];
  trustSeals: TrustSeal[];
}
// sidebar
interface TrustSeal {
  emoji: string;
  title: string;
  text: string;
  link?: string;
}
