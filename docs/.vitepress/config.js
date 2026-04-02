import { getSidebar } from "vitepress-plugin-auto-sidebar";

export default {
  base: "/",
  title: "Faith Forged Studios",
  description:
    "A faith-driven software studio building tools that make a real difference in people's lives.",
  lastUpdated: true,
  cleanUrls: true,
  head: [
    ['link', { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
    ["link", { rel: "preconnect", href: "https://fonts.googleapis.com" }],
    [
      "link",
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossorigin: "" },
    ],
    [
      "meta",
      {
        property: "og:image",
        content: "https://faithforgedstudios.dev/Logo_NoBubs.png",
      },
    ],
    ["meta", { name: "twitter:card", content: "summary_large_image" }],
    [
      "meta",
      {
        name: "twitter:image",
        content: "https://faithforgedstudios.dev/Logo_NoBubs.png",
      },
    ],
  ],
  themeConfig: {
    logo: "/Logo_NoBubs.png",
    siteTitle: "Faith Forged Studios",
    outline: "deep",
    search: {
      provider: "local",
    },
    nav: [
      { text: "Home", link: "/" },
      { text: "About Us", link: "/about-us" },
      { text: "Our Team", link: "/team" },
      { text: "Projects", link: "/projects" },
      { text: "Blog", link: "/blog/" },
      { text: "Contact", link: "/contact" },
    ],
    socialLinks: [
      { icon: "github", link: "https://github.com/Faith-Forged-Studios" },
    ],
    sidebar: {
      "/projects": [
        {
          text: "Projects",
          items: [
            { text: "The SOAP Dish", link: "/projects/the-soap-dish" },
            { text: "Flock", link: "/projects/flock" },
          ],
        },
      ],
    },
    footer: {
      message: "Released under the GNU General Public License v2.0.",
      copyright: "Copyright © 2022-present Faith Forged Studios",
    },
  },
};
