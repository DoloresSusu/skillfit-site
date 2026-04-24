const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://get-skill-fit.com";

export const zhRouteMap: Record<string, string> = {
  "/": "/zh",
  "/guides": "/zh/guides",
  "/how-to-choose-ai-skills": "/zh/how-to-choose-ai-skills",
  "/ai-skill-marketplace-list": "/zh/ai-skill-marketplace-list",
  "/best-ai-skill-for-user-research": "/zh/best-ai-skill-for-user-research",
  "/best-ai-skill-for-ai-agent-workflows": "/zh/best-ai-skill-for-ai-agent-workflows"
};

export const enRouteMap = Object.fromEntries(
  Object.entries(zhRouteMap).map(([enPath, zhPath]) => [zhPath, enPath])
) as Record<string, string>;

export const zhRoutes = Object.values(zhRouteMap);

export function getAlternateLanguages(path: string) {
  const normalizedPath = path === "" ? "/" : path;
  const zhPath = zhRouteMap[normalizedPath];
  const enPath = enRouteMap[normalizedPath];

  if (zhPath) {
    return {
      en: normalizedPath,
      "zh-Hans": zhPath,
      "x-default": normalizedPath
    };
  }

  if (enPath) {
    return {
      en: enPath,
      "zh-Hans": normalizedPath,
      "x-default": enPath
    };
  }

  return undefined;
}

export function absoluteUrl(path: string) {
  return `${baseUrl}${path === "/" ? "" : path}`;
}
