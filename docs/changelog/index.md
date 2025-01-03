---
title: Changelog
editLink: true
---

# Novinky v aktuální verzi

## Verze 11.3 <Badge type="info" text="03.01.2025" />

### :mega: Novinky
- Konkrétní kreditní bankovní transakce lze jednoduše přiřadit **ručně uživateli**.
    - transakce nemusí být přiřazena celá, lze jí rozdělit mezi více uživatelů.
    - k přidávané transakci lze **automaticky přidat poznámku**, kterou zároveň uvidí uživatel ve přehledu financí na účtu.
    - automaticky přiřazené transakce jdou taktéž viditelné v přehledu transakcí
- uživetli je možné nechat **vyresetovat heslo** a toto poslat na jeho e-mail.
- možnost autentizace přihlášek POST požadavků (jakékoliv přihlášky na závody) skrze **`clubKey`**. Původně bylo možné _pouze_ skrze `user` a `password`.

### :wrench: Upravené funkce
- při načítání závodního profilu se nově načítá i ID uživatele registrovaného ke **konkrétnímu klubu**. Bez spr8vně vyplněného `ClubOrisID` se nejde přihlašovat k závodům.
- 

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