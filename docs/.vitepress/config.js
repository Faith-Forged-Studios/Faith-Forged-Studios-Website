import { getSidebar } from "vitepress-plugin-auto-sidebar";

export default {
  base: "/",
  title: "Faith Forged Studio",
  description: "Where Faith Inspires Code",
  lastUpdated: true,
  cleanUrls: true,
  themeConfig: {
    logo: "/Logo_NoBubs.png",
    // editLink: {
    //   pattern: "https://github.com/Faith-Forged-Studios/Faith-Forged-Studios-Website/edit/main/docs/:path",
    //   text: "Edit this page on GitHub",
    // },
    siteTitle: "Faith Forged Stduio",
    outline: "deep",
    nav: [
      { text: "Home", link: "/" },
      { text: "About Us", link: "/about-us" },
      { text: "Our Team", link: "/team" },
      { text: "Projects", link: "/projects" },
    ],
    // socialLinks: [
    //   { icon: "discord", link: "..." },
    // ],
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
