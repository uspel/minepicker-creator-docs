import { themes as prismThemes } from "prism-react-renderer";
import type { Config } from "@docusaurus/types";
import type * as Preset from "@docusaurus/preset-classic";

const config: Config = {
  title: "Minepicker Creator",
  tagline: "Craft experiences for others to play!",
  favicon: "icons/favicon.ico",

  // Set the production url of your site here
  url: "https://creator.minepicker.com",
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: "/",

  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  presets: [
    [
      "classic",
      {
        docs: {
          sidebarPath: "./sidebars.ts",
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl: "https://github.com/uspel/minepicker-creator-docs/tree/main/",
        },
        blog: false,
        theme: {
          customCss: "./src/css/custom.css",
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    colorMode: {
      defaultMode: "dark",
    },
    navbar: {
      title: "Minepicker Creator",
      logo: {
        alt: "Minepicker Logo",
        src: "icons/icon.svg",
      },
      items: [
        {
          type: "docSidebar",
          sidebarId: "cliSidebar",
          position: "left",
          label: "CLI",
        },
        {
          href: "https://github.com/uspel/minepicker-creator",
          label: "GitHub",
          position: "right",
        },
      ],
    },
    footer: {
      style: "dark",
      links: [
        {
          title: "Docs",
          items: [
            {
              label: "Beginner's Guide",
              to: "/docs/cli/guide/intro",
            },
            {
              label: "GitHub",
              href: "https://github.com/uspel/minepicker-creator-docs",
            },
            {
              label: "Issues",
              href: "https://github.com/uspel/minepicker-creator-docs/issues",
            },
          ],
        },
        {
          title: "CLI",
          items: [
            {
              label: "GitHub",
              href: "https://github.com/uspel/minepicker-creator",
            },
            {
              label: "Issues",
              href: "https://github.com/uspel/minepicker-creator/issues",
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Uspel. Not approved by or associated with Mojang or Microsoft.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.vsDark,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
