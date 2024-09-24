import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "DaLin",
  description: "DaLin dokumentace k projektu",
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
      { text: 'Vývoj projektu', link: '/develop/index' },
      {
        text: 'Verze 11.2',
        items: [
          { text: 'Aktuality ve verzi 11.x', link: '/changelog/index' },
          { text: 'Verze 10.x', link: '/changelog/v10' },
          { text: 'GitHub releases', link: 'https://github.com/jZejda/dalin/releases' }
        ]
      },
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
              text: 'Admin klubu',
              items: [
                { text: 'Vytvořit registraci', link: '/napoveda/jak-pridat-uzivateli-registraci' },
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
      copyright: 'Copyright © 2023-dosud Jiří Zejda'
    }
  }
})
