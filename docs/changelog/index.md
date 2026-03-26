---
title: Changelog
description: Změny ve verzích projektu

head:
  - - meta
    - name: description
      content: Změny ve verzích projektu
  - - meta
    - name: keywords
      content: DaLin changelog
  - - meta
    - property: og:url
      content: /changelog/
  - - meta
    - property: og:type
      content: article

editLink: true
outline: deep
lastUpdated: true
---

# Novinky v aktuální verzi

## Verze 12.0 <Badge type="info" text="06.01.2026" />

### :mega: Novinky
- Projekt byl převeden na **Laravel v12.x**
- Dále jsme přešli na **FilamentPHP v5.x**
- S tímto souvísí i navýšení verze **TailwindCSS 4.x**
- Celkem bylo přepsáno velké množství kódu. Může se toho hodně rozbít :-)


### :sparkles: Nové funkce

- **Export ČSOS** — závodní přihlášky lze nyní exportovat ve formátu IOF XML v3 pro import do systému ČSOS
- **API pro stránky a příspěvky** — nové veřejné endpointy `/api/v1/pages` a `/api/v1/posts` umožňují strojové dotazování na obsah CMS
- **Správa API klíče** — v Uživatelském nastavení lze generovat a spravovat vlastní API klíč pro přístup k veřejnému API
- **Filtry závodů s UUID** — závodní filtry nyní mají stabilní UUID identifikátory pro spolehlivé reference

### :wrench: Vylepšení

- **Filtry zobrazení** - tyto umožňují uživateslky definovat záložky zobrazení rychlých filtrů na stránce závodů. 
Myšlenka byla taková, že si každý uživatel vytvoří vlastní záložky podle typů závodů kterých se zůčastnuje.
Pokud něko nechodí na tréninky, vůbec tyto nikdy nemusí vidět apod.

- **API Klíč** - Vzniklo nové veřejné api pro strojové dotazování na systém. Prozatím jsou dostupné
vybrané endPointy, nicméně toto je by měla být výkop dalších možností.

V sekci **CMS Stránky** je možné zvolit ze tří typů tvorby obsahu.
- stávající _Markdown_ a _HTML_ obohatil **TipTap** editor, který umožňuje do databáze ukládat objekty,
které mohou mít vlastní stylování. Jedná se o celkem mocný pro zobrazování obsahu tak aby styl
byl vždy pod kontrolou systému (uživateli by se nemělo podařit nějaký nevhodným html tagem rozbít stránku).
- **Upgrade na Filament v5** — administrační panel byl aktualizován na novou hlavní verzi s vylepšeným vzhledem a výkonem
- **TipTap editor pro stránky** — CMS stránky nově podporují vizuální editor TipTap (vedle stávajícího Markdown a HTML); umožňuje vkládat vlastní boxy a upozornění
- **Skupinové zobrazení kategorií v přihlášce** — kategorie závodů jsou při přihlašování přehledně rozděleny do skupin
- **Export přihlášek** — aktualizovaný export závodních přihlášek s rozšířenými možnostmi
- **Opravena tmavá verze frontendu** — dark mode na veřejných stránkách zobrazuje barvy správně
- **Kód klubu z konfigurace** — ORIS API dotazy nově využívají kód klubu ze sdílené konfigurace místo pevně zadané hodnoty
- **Jednotný formát data a času** — celá aplikace používá konstanty `AppHelper::DATE_*_FORMAT` pro konzistentní zobrazení datumů

### :beetle: Opravy

- **Výběr kategorie při přihlášení na závod** — opravena chyba kdy nebylo možné vybrat kategorii při vytváření nebo přihlašování na závod
- **Discord notifikace** — opraveno tiché selhání při odeslání webhookové zprávy na neznámou nebo prázdnou URL
- **Bankovní transakce** — opravena fatální chyba při zpracování transakce s neznámým kódem banky, která zastavila celý cron job
- **Rozložení kreditů uživatele** — opraveno zobrazení stránky detailu kreditu v admin panelu
- **Chybné texty a překlepy** — opraveny překlepy a chybějící háčky/čárky v UI
- **Zobrazení uvítací stránky** — opravena chyba při renderování welcome page
- **Tooltip texty** — opraveny popisky v admin panelu

### :lock: Bezpečnost

- **Generování hesel** — nahrazeno zastaralé `sha1(time())` kryptograficky bezpečnou funkcí `Str::random()`
- **Odstraněna nezabezpečená testovací routa** — `/admin/test` umožňovala neautentizovaným návštěvníkům přegenerovat API klíč správce; odstraněno
- **HTTPS session cookie** — session cookie je nyní ve výchozím nastavení odesílána pouze přes HTTPS

#### Poděkování
[onovy](https://github.com/onovy),  [thejoeejoee](https://github.com/thejoeejoee)