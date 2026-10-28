import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Gourav Kashiv — Full-Stack Engineer",
    short_name: "Gourav Kashiv",
    description:
      "Gourav Kashiv builds and ships full-stack products, from application architecture to production.",
    start_url: "/",
    display: "standalone",
    background_color: "#0b1220",
    theme_color: "#0b1220",
    icons: [
      {
        src: "/favicon.png",
        sizes: "180x180",
        type: "image/png",
      },
    ],
  };
}
