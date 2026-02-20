import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Gourav Kashiv | DevOps Developer",
    short_name: "Gourav Kashiv",
    description:
      "DevOps Developer specializing in scalable cloud applications, infrastructure automation, and modern CI/CD pipelines.",
    start_url: "/",
    display: "standalone",
    background_color: "#0a192f",
    theme_color: "#64ffda",
    icons: [
      {
        src: "/favicon.png", // Or a 192x192 icon if available
        sizes: "192x192",
        type: "image/png",
      },
      {
        src: "/favicon.png", // Or a 512x512 icon if available
        sizes: "512x512",
        type: "image/png",
      },
    ],
  };
}
