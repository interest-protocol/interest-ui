export interface NavbarItemProps {
  title: string;
  href: string;
  asPath: string;
  isExternalLink?: boolean;
}

export interface NavbarProps {
  Routes: Record<string, RouteItemProps>;
  data: Record<string, string>;
  asPath: string;
}

export interface RouteItemProps {
  href: string;
  isExternalLink?: boolean;
}
