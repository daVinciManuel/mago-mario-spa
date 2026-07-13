// CONTACT PAGE
export interface ContactPageData {
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
