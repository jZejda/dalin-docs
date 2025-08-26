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

## Verze 11.5 <Badge type="info" text="13.08.2025" />

### :mega: Novinky
- **Projekt přepnut na PHP 8.4**.
- Přidán filtr na **neaktivní/aktivního** uživatele. 
- Na řádku uživatele je možné vyvolat modál kde je možné **aktivovat nebo deaktivovat** uživatele. **Deaktivovaní uživatelé se nemohou přihlásit** do systému. Nejsou jim zasílány zprávy, původní data jako přehled financí a pod zůstává nezměněny.
- **Vypnul** jsem **nefungující** cron ulohu na posílání novinek. Nově novinku může hromadně poslat redaktor v případě že uzná za vhodné že je text novinky hotový přímo ze seznamu novinek.
  - Pokud se jedná o důležitou **novinku**, může jí poslat **všem** uživatelům
- V seznamu závodů je možné **filtrovat** podle **ORIS ID** závodu
- Opraveny překlepy na různých místech aplikace
- Přídán **konektor** pro **[Fio banku](https://github.com/jZejda/dalin/issues/16)**. Klasicky aplikace umožňuje stahování plateb z různých účtů. Aplikace prochází všechny aktivní účty a páruje transakce.

### :wrench: Opravené bugy
- **[oprava bugu](https://github.com/jZejda/dalin/commit/0611ce8c1e755013a20efbd3839cee1005c2b7d5)** správného přiřazení `userClubKey` u uživatelů kteří měli hystoricky více registrací. Aktuálně se porovnává s `RegNo`.
- [ISSUE19](https://github.com/jZejda/dalin/issues/19) - Opraven bug **vypnutí** tlačítka pro **Správce závodu**, pokud se sám přihlásil do závodu všemi vlastními registracemi. Nově se tlačítko zneaktivní pouze u stornovaných závodů.
- [ISSUE18](https://github.com/jZejda/dalin/issues/18) - Opraven bug **importu závodu** u kterého není vyplněn čas startu nebo se zasílá v nesprávném tvaru.

## Verze 11.4.1 <Badge type="info" text="28.07.2025" />

### :mega: Novinky
- **Ladíme PHP 8.4**. Dlouho odkládaný přechod na PHP verze 8.4. Nová verze PHP 8.5 už klepe na dveře tak není na co čekat. Aktualizace umožní projekt provozovat dlouhou dobu.
- Security fix uvedený v [CVE-2025-54068](https://github.com/advisories/GHSA-29cq-5w36-x7w3)
- Upravení stránky novinky k aktuálnímu používání. Nepovině schovaný editorial, uprava jedné možné volby obsahu. Opět se zde připravujeme na TipTam editor který bude obsažen ve FilamentPHP V4 jako default editor.

### :wrench: Opravené bugy
- **opraveno možnosti vkládání ulice u registrací**.


## Verze 11.4 <Badge type="info" text="09.06.2025" />

### :mega: Novinky
- **Nový [formulář](https://jirizejda.cz/dalin/napoveda/jednoduche-cestovni-vyrovnani.html) pro přiřazení cestovních náhrad**. Jedná se o zjednodušený proces vyúčtování dopravy mezi členy. Jednomu členu se částka strhne, druhému se přidá.
- Přípravné fáze na **přechod na verzi PHP 8.4**
- Bylo opraveno skritp který **vybírá závody k aktualizaci**. Toto asi nefungovalo, nově by se měly aktualizovat závody co jeden den
- Stále bojujeme s Monetou ohledně aktualizace stahování plateb. Rok toto bezproblému fungovalo. Avšak, zdá se být vše na dobré cestě.

### :wrench: Opravené bugy
- **opravena funce na vybírání závodu k hromadné aktualizaci oproti ORISu**. Pravděpodobně to nikdy moc nefungovalo, jelikož tam byla celkem velká chyba.


## Verze 11.3 <Badge type="info" text="03.01.2025" />

### :mega: Novinky
- Konkrétní kreditní bankovní transakce lze jednoduše přiřadit **ručně uživateli**.
    - transakce nemusí být přiřazena celá, lze jí rozdělit mezi více uživatelů.
    - k přidávané transakci lze **automaticky přidat poznámku**, kterou zároveň uvidí uživatel v přehledu financí na účtu.
    - automaticky přiřazené transakce jdou taktéž viditelné v přehledu transakcí
- uživetli je možné nechat **vyresetovat heslo** a toto poslat na jeho e-mail.
- při založení nového uživatele se na jeho e-mail zašle heslo k portálu.
- pokud se v přihláškách neORISových závodů nachází už poslední závodní profil, je tento automaticky vybrán v selectBoxu.
- v přehledu uživatelů byl přidán sloupec variabilního symbolu uživatele
- možnost autentizace přihlášek `POST` požadavků (jakékoliv přihlášky na závody) skrze **`clubKey`**. Původně bylo možné _pouze_ skrze `user` a `password`.

### :wrench: Upravené funkce
- při načítání závodního profilu se nově načítá i ID uživatele registrovaného ke **konkrétnímu klubu**. Bez spr8vně vyplněného `ClubOrisID` se nejde přihlašovat k závodům.
- drobné překlepy a nelogičnosti
- změna datového typu variabilního symbolu z `int` na `string` jelikož některé VS začínají nulou

## Verze 11.2 <Badge type="info" text="18.09.2024" />

### :mega: Novinky
- Vyplepšené **zobrazení bankovních transakcí**.
- U bankovních transakcí je možné upravit **poznámku a popis** transakce
- Přidána **mapa** akcí z aktuálního kalendáře.
  - Mapa se zobrazuje na titulní stránce po přihlášení
  - Mapa se zobrazuje na titulní stránce webu s omezenými údaji pro public část webu
- Změna v přiřazování opravnění jednotlivým skupinám. Aktuálně je možné vybrat pouze relevantní oprávnění, které opravdu i na něco mají vliv.
- Uprava vizuálu stránek, `backend` i `frontend`
- Přidána sekce dokumentace k instalaci projektu. Měla by se dále rozšiřovat.


## Verze 11.1 <Badge type="info" text="12.06.2024" />

### :mega: Novinky
- Přechod na **Laravel verzi 11**.
  - Upgrade projektu a všech závislosti poplatné k verzi Laravelu 11.
- Implementace **stahování plateb z banky**. Zatím je pro **Finančníka** možné vidět pohyby na účtu. Příprava na automatické párování příchozích plateb na soukromé učty členů klubu.

### :wrench: Opravené bugy
- Drobné **opravy** a přidání **překladů** napříč systémem.