import { routing } from "@/i18n/routing";

export default function sitemap() {
  const baseUrl = "https://jurachampi.fr";

  const routes = ["", "/produits", "/contact"];

  return routing.locales.flatMap((locale) =>
    routes.map((route) => ({
      url: `${baseUrl}/${locale}${route}`,
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: route === "" ? 1 : 0.8,
    }))
  );
}
