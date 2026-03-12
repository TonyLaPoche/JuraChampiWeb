import { routing } from "@/i18n/routing";

export default function sitemap() {
  const baseUrl = "https://jurachampi.fr";

  const routes = [
    "",
    "/nous-trouver",
    "/produits",
    "/contact",
    "/mentions-legales",
    "/confidentialite",
    "/cgv",
  ];

  const legalRoutes = ["/mentions-legales", "/confidentialite", "/cgv"];

  return routing.locales.flatMap((locale) =>
    routes.map((route) => ({
      url: `${baseUrl}/${locale}${route}`,
      lastModified: new Date(),
      changeFrequency: legalRoutes.includes(route) ? "monthly" : "weekly",
      priority:
        route === ""
          ? 1
          : legalRoutes.includes(route)
            ? 0.3
            : 0.8,
    }))
  );
}
