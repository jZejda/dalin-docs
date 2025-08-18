import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "dalin",
  description: "dalin - příručka",
  lastUpdated: true,
  base: '/dalin/',
  sitemap: {
    hostname: 'https://jirizejda.cz/dalin/'
  },
  themeConfig: {
    search: {
      provider: 'local'
    },
    outline: {
      label: 'Na této stránce'
    },
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Domů', link: '/' },
      { text: 'Uživatelská příručka', link: '/napoveda/index' },
      { text: 'Instalace', link: '/install/index' },
      {
        text: 'Verze 11.5',
        items: [
          { text: 'Aktuality ve verzi 11.x', link: '/changelog/index' },
          { text: 'Verze 10.x', link: '/changelog/v10' },
          { text: 'GitHub releases', link: 'https://github.com/jZejda/dalin/releases' }
        ]
      },
      { text: 'O projektu', link: '/develop/index' },
    ],

    sidebar: {
      // This sidebar gets displayed when a user
      // is on `guide` directory.
      '/napoveda/': [
        {
          text: 'Aplikace',
          collapsed: false,
          items: [
            { text: 'Jsem tu nový', link: '/napoveda/index' },
            { text: 'Usnadnění procesů', link: '/napoveda/usnadneni-procesu' },
            // { text: 'Ovládání aplikace', link: '/napoveda/ovladani-aplikace' },
          ]
        },
        {
          text: 'Stránky',
          collapsed: false,
          items: [
            { text: 'Závod/Akce', link: '/napoveda/stranka-zavody-akce' },
            { text: 'Detail akce', link: '/napoveda/stranka-zavod-detail' },
            { text: 'Přihlášky na akce', link: '/napoveda/stranka-prihlasky' },
            { text: 'Nastavení notifikací', link: '/napoveda/stranka-nastaveni-notifikaci' },
            { text: 'Finance', link: '/napoveda/stranka-finance' },
            { text: 'Registrace', link: '/napoveda/stranka-registrace' },
            { text: 'Závodní profil', link: '/napoveda/member-race-profile' },
          ]
        },
        {
          text: 'Jak na to',
          collapsed: false,
          items: [
            { text: 'Role v aplikaci', link: '/napoveda/role-v-aplikaci' },
            {
              text: 'Člen',
              items: [
                { text: 'Přihlásit na závod ORISu', link: '/napoveda/jak-se-prihlasit-na-oris-zavod' },
                { text: 'Odhlásti ze závodu', link: '/napoveda/jak-se-odhlasit-ze-zavodu' },
                { text: 'Nastavení notifikací', link: '/napoveda/jak-si-nastavit-notitifikace' },
              ]
            },
            {
              text: 'Správce závodů',
              items: [
                { text: 'Přidat závod', link: '/napoveda/jak-pridat-zavod' },
              ]
            },
            {
              text: 'Organizátor závodů',
              items: [
                { text: 'Zaslat upozornění', link: '/napoveda/jak-poslat-upozorneni-prihlasenym-zavodnikum' },
                { text: 'Export dat o závodu', link: '/napoveda/jak-exportovat-data-o-zavodu' },
              ]
            },
            {
              text: 'Finančník',
              items: [
                { text: 'Cestovní vyrovnání', link: '/napoveda/jednoduche-cestovni-vyrovnani' },
              ]
            },
            {
              text: 'Admin klubu',
              items: [
                { text: 'Nová registrace', link: '/napoveda/jak-pridat-uzivateli-registraci' },
              ]
            }
          ]
        }
      ],

      // install
      '/install/': [
        {
          text: 'Instalace',
          items: [
            { text: 'Úvod', link: '/install/index' },
            { text: 'Konfigurace stránky', link: '/install/site-config' },
            { text: 'Napojen na banku', link: '/install/bank-connector' },
          ]
        }
      ],

      // is on `config` directory.
      '/develop/': [
        {
          text: 'Popis',
          items: [
            { text: 'Úvod', link: '/develop/index' },
            { text: 'Prostředí', link: '/develop/development-environment' },
          ]
        }
      ],

      // Changelog
      '/changelog/': [
        {
          text: 'Novinky',
          items: [
            { text: 'Verze 11.x', link: '/changelog/index' },
            { text: 'Verze 10.x', link: '/changelog/v10' },
          ]
        }
      ]
    },

    docFooter: {
      prev: 'Předchozí stránka',
      next: 'Následující stránka'
    },

    socialLinks: [
      { icon: "discord", link: "https://discord.gg/tVGRPXPF" },
      { icon: "github", link: "https://github.com/jZejda/dalin" },
    ],
    footer: {
      message: 'Vydáno pod MIT licencí.',
      copyright: 'Copyright © 2025-dosud Jiří Zejda'
    }
  },
  head: [
    ['meta', { name: 'theme-color', content: '#3eaf7c' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }],
    ['meta', { property: 'og:title', content: 'DaLin dokumentace' }],
    ['meta', { property: 'og:description', content: 'DaLin klubový informační systém správy orientačních sportů' }],
    ['meta', { property: 'og:image', content: 'https://jirizejda.cz/dalin/og.png' }],
    ['meta', { property: 'og:url', content: 'https://jirizejda.cz/dalin/' }],
    ['meta', { property: 'og:site_name', content: 'Dalin dokumentace' }],
    ['meta', { property: 'og:type', content: 'website' }]
  ]
})
