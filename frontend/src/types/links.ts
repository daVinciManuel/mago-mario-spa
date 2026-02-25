export interface SocialLink {
  app: string;
  link: string;
  user?: string;
  description?: string;
}

export interface LinksPageData {
  title: string;
  description: string;
  avatarUrl?: string;
  links: SocialLink[];
}
