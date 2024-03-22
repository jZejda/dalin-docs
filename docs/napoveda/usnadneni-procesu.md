---
title: Usnadnění
editLink: true
---

# Usnadnění správy

Aplikace vznikla hlavně za účelem zjednodušit agendu okolo správy klubu dále usnadnit život samotným členům / závodníkům.

## Exporty

Aktuálně aplikace umí exportovat následující data:

 - **Seznam členů** `xlsx` aktivní/neaktivní/všichni členové
 - **Seznam přihlášený závodníků v konkrétním závodě** `xlsx` - na kartě přihlášek závodů, je možné exportovat aktuální seznam přihlášených závodníků. Vhodné pro pořádání akcí mimo ORIS.

::: info
V plánu je export závodu v IOFv3 pro jednodenní závod.
:::

## Zasílání e-mailových upozornění

Z aplikace jsou pravidelně podle zadaných pravidel zasílány e-mailové zprávy. 

V nastavení **notifikací** je možné zapnout

 - Zasílat upozornění před koncem termínu přihlášek - je možné nastavit počet dnů před koncem termínu a hodinu zaslání upozornění.
 - Zasílat souhrn co se bude dít následující týden - reflektuje aktuální termínovou listinu
 - Pokud má člen [příslušné oprávnění](role-v-aplikaci), může zaslat hromadnou zprávu přihláčeným závodníkům v konkrétním závodě.
 - [Členové s vyšším oprávněním](role-v-aplikaci) mohou zaslat hromadnou zprávu všem aktivním šlenům nebo vybrané skupině členů.
 - Uživatelům s oprávněním **Finančník**, je zasílán e-mail k prvnímu v měsíci, členů se zápornou hodnotou osobního konta.
 - Uživetelům s oprávněímí **Finančník**, je zasílán e-mail v době konce termínů závodů s upozorněním na zaslání platby příhlášeným členům

## Automatizované systémové funkce

 - **AUTOMATICKY - aktualizuje data v závodu oproti ORISu**. Na termínovou listinu je možné vložit závod v případě, kdy má přiděleno ORSI ID následně se data aktualizují v předepsaném intervalu.
 - **Na vyžádání je možné provádět** téměř veškeré API volání do ORISu.
 - **Ze služby [OpenWeather](https://openweathermap.org/) stahuje 5 dnů před akcí aktuální počasí** s předpovědí v den konání.
 - Na konkrích odkazech je možné nalinkovat do vlastních kalendářů `icl` **kalendáře závodů a tréninků**.
