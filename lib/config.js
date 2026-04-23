const DEFAULT_SITE_URL = "https://inweblife.net";

const configuredSiteUrl = process.env.NEXT_PUBLIC_SITE_URL?.trim() || DEFAULT_SITE_URL;

export const SITE_URL = configuredSiteUrl.endsWith("/")
  ? configuredSiteUrl.slice(0, -1)
  : configuredSiteUrl;

export const SITE_HOST = new URL(SITE_URL).host;
