---
title: Changelog
editLink: true
---

# Changelog projektu

## Verze 10.10 <Badge type="info" text="05.05.2024" />

### :mega: Novinky
- Přídán update **rychlých novinek** viz [5.6.4 verze ORISu](https://oris.orientacnisporty.cz/Verze).
  - Novinky se zobrazují na kartě závodu chronologicky jak jsou zapsány v ORISu. Při editaci závodu je možné novinky upravovat.
- V uživatelích je **možné editovat závodní profily** konkrétního uživatele.
- Do seznamu závodů byly přidány **ikony poplatné sportID** (OB, MTBO, LOB a Trail)

### :wrench: Opravené bugy
- Oprava v detailu závodu - Vytváření / upravování kategorií.
- Oprava v detailu závodu - Vytváření / upravování doplňkových služeb.

## Verze 10.9.1 <Badge type="info" text="30.03.2024" />

### :mega: Novinky
- Přepracovaný dialog přihlášek na závody.
  - poznámka a požadavek na start byl sktyt do rozvíracího menu
  - požadavek na start je možné doplnit z připravenéhé vzoru. Mělo by se jednat o nejčastěji používané vzory požadavků.

### :wrench: Opravené bugy
- Opravena automatický update Závodů/udáslostí z ORISu.
- Už se neposílají notifikace neaktivním uživatelům.

## Verze 10.9 <Badge type="info" text="20.03.2024" />

### :mega: Novinky
- Přidána stránka zobrazení Registrací členů / alias závodní profily.
  - Na nové stránce je vidět přehled všech aktuálních i ukončených registrací (dostupné skrze filtr **všechny registrace**)
  - **ROLE: Organizátor akcí** může exportovat registrace do Excelu, **ROLE:Správce** může jednoduše profil **aktivovat/deaktivovat**
  - V závodním profilu bude povinné pole **e-mail** a **telefon** pro snadnější kontakt dané osoby.
- Přidána možnost deaktivovat uživatele stránek, tento se nebude moci dále přihlašovat.
- Přidána možnost deaktivovat **závodní profil**. Neaktivním závodním profilem se nelze přihlásit na oficiální i neoficiální závody. Není vůbec nabízen.
- Byl přidán limit osobního konta
  - Při přechodu do záporu se bude zobrazovat upozornění.
  - Při přechodu pod stanovenou hranici se nebude možné přihlásit do závodů.
- Na stránce **financí** byl přidán sloupec konání akce.
- Na stránce **Vyúčtovaní akcí** byl taktéž přidán sloupec datum akce.
  - Vznikly další typy finančních transakcí:
    - Počáteční vklad - pro příchodu nového člena
    - Převod mezi členy závislé na členovi ke kterému se finance přesouvá
- Jsou dostupné kalendáře akci, jednoduše linkovatelné například do **GoogleCalendar**, **iCloud** nebo **MS Office**
  - pro závody se jedná o odkaz: [https://abmbrno.cz/api/feed/kalendar/zavody/all/](https://abmbrno.cz/api/feed/kalendar/zavody/all/)
  - pro tréninky se jedná o odkaz: [https://abmbrno.cz/api/feed/treninky/all/](https://abmbrno.cz/api/feed/kalendar/treninky/all/)

### :wrench: Opravené bugy
- Vylepšené zobrazení uživatelů, hlavně jejich sjednocení v aplikaci.

### Tech update
- Minimální verze **PHP** je nově **8.3** :tada:
- Refaktor ORIS parseru a celé ORIS servisy

## Verze 10.8 <Badge type="info" text="20.02.2024" />

### :mega: Novinky
- Nově je v editaci závodu možné přidat **datum do**, vhodné u vícedenních závodů. Datum od - do se pak zobrazuje v přehledu závodů.
- Nově je taky možné upravovat/nastavovat počet etap závodu.
- V přehledu závodníků jejich financí, se nově zobrazuje stav transakcí uživatele.
- Na stránce přihlášek došlo u výpisu ke skrytí položek `poznámka` a `klubová poznámka`. Při delších poznámkách by tato pole nedávala smysl. Nově je možné je zobrazit pod odkazem **více**.
- **Zmizela lupa** v modálním okně přihlášek. Nově se na vhodné kategorie dotazuje stránka při každé změně závodního profilu. Výsledek se načte automaticky do pole pro kategorie.
- V přehledu Vyúčtování akci sem zase přidal součty financí na vyfiltrované záznamy.

### :wrench: Opravené bugy
- Nefungovala jednorázové přiřazení platby uživatelem.
- Opravila se nefunkční aktualizace závodních profilů s ORISem.
- Opravil jsem všechny zbývající notifikace, které nebyly kompatibilní s novou verzí Filamentu v3.x

## Verze 10.7 <Badge type="info" text="20.01.2024" />

### :mega: Novinky
- **Nasazená stabilní verze** výcházející z verze 10.6 BETA
- Nově je možné:
  - Přihlašovat se na **vícedenní závody**. Pokud se jedná o etapový závod, zobrazí se v dialogu přihlášení na jaké etapy se hlásíte.
  - Lze se odhlásit z etapového závodu.
    - API volání pro Etapové závody nedovoluje (nebo jsem nezjistil jak) případně editovat takovou etapovou přilášku. Volání případný update přihlášky taktéž nic neříká o etapových přihláškách. Změnu lze tedy provést tak, že se odhlásíte a přihlásíte na konkrétní etapy. Nebo požádáte někoho, kdo má oprávnění toto udělat v ORISu.
  - V přehledu přihlášek vidíte **na jaké etapy jste se přihlásili**. Platí u etapových závodů.
  - Nově si můžete **změnit heslo** :skull: na úvodní stránce. Prosím dávejte tam něco smysluplnýho.
  - Dále mají vybrané role (Správce závodů, Oranizárot závodů a Finančních) možnost :e-mail: **poslat hromadný e-mail**.
  - Stránka závodů má v záhlavní **rychlé filtry** na typ akce.
  - Na stránce Finance, vidíte na konci řádku odkaz na **Info**. Nově už vidíte co nám tam Adams píše do **poznámky** a dokonce na to můžete reagovat tím že transakci rozporujete.

### :wrench: Opravené bugy
- Opravila se tuna chyb a kód se trochu refaktoroval. Z viditelných pak :bar_chart: statistika, do jakých závodů jsem aktuálně přihlášen. Po staru to počítalo i přihlášky stornované.


## Verze 10.6 BETA <Badge type="info" text="01.01.2024" />

### :up: Velký upgrade
- Jedná se o upgrade verze **Filament** z [verze 2.x](https://filamentphp.com/docs/2.x/admin/installation) na [verzi 3.x](https://filamentphp.com/docs/3.x/panels/installation)
- S tímto byl proveden upgrade verze **Livewire** z [verze 2](https://laravel-livewire.com/docs/2.x/quickstart) na [verzi 3](https://livewire.laravel.com/)
  - S tímto bylo spojeno celkem hodně změn a je možné, že se něco rozbilo. Nové stránky jsou k proklikání na adrese [staging.abmbrno.cz](https://staging.abmbrno.cz/)

::: info Důvod
Bez tohoto průběžného upgrade by nebyly nebylo možné stránků průběžně aktualizovat až by technicky zastaraly. Nové technologie pak umožní vytvářet nově vylepšení snadněji. 

S tímto jsme se museli rozloučit s mapou na hlavní stránce. Na stránce závodů zůstane ve vylepšené podobě. 
:::

### :mega: Novinky
- Nová úvodní stránka pro přihlášené.
  - Je možné zvolit vlastní heslo :-) 
  - Odkaz na nápovědu která by se měla aktualizovat
- Na stránce **financí** je možné vidět komentáře od **Finančníka** ale halvně je možné komentáře přidat. Pokud naleznete nějakou nestrovnalost, pošlete komentáž, odpovědné osoby by se měli připomínkou zabývat.
- Na stránce závodů je možné rychle filtrovat akce rychlých filtrů na závody, soustředění a pod.

### :wrench: Opravené bugy
- Opravilo se spoustu chyb. Celý merge request je [zde](https://gitlab.com/jzejda/dalin/-/merge_requests/30).

## Verze 10.5 <Badge type="info" text="05.10.2023" />
### :mega: Novinky
- Upraveny kategorie obsahu
  - Když se vytváří kategorie nová, vytváří se automaticky `slug` na web. U editace již `slug` zůstává nezměněn.
  - Kategorie může odkazovat na Akci/Závod. Vazba se používá v případě, kdy na Akci/Závod odkazují startovky nebo výsledky V takovém případě se zobrazují pod odkazy kategorie.
- Přepracovaná stránka **Výstupy pro pořádání**
  - Zpracovává IOF xml v3 pro startovku. Tuto zobrazí na samostatné stránce v URL /startovak/`{slug}` viz: [11. JML startovka](https://abmbrno.cz/startovka/11-jml-uhrice-startovka-2023) 
  - Zpracovává IOF xml v3 výsledky jednoetapového závodu na samostatné stránce zobrazuje v URL /vysledky/`{slug}` viz: [11. JML vysledky](https://abmbrno.cz/vysledky/11-jml-uhrice-vysledky-2023)
    - v obou případech stačí odkaz na soubor na serveru. Ostatní je zpracováno automaticky. Lze použít pro on-line výsledky
- Nává stránka která umí zobrazovat stránky v jedné kategorii + odkazy na danou kategorii
  - Například stránky závodu + odkazy na startovku a výsledky [11. JML info](https://abmbrno.cz/stranka/11-jml-2023-uhrice)
- Možnost exportu přihlášených členů do Excelu ze stránky detailu závodu
- Pokud je závod registrován na ORISu je možné se prokliknout z badge tlačítek na stránky v ORISu
- V dialogu odeslání zprávy přihlášeným členům se automaticky převyplní odpovědní e-mail na přihlášeného uživatele.

### :wrench: Opravené bugy
- Pokud se posílá zpráva z detailu závodu, je uživateli zaslána jen jednou i když je v závodu přihlášen více profily


## Verze 10.4 <Badge type="info" text="12.09.2023" />
### :mega: Novinky
- Přidány pěknější stránky **404** Nenalezeno a **500** Asi se něco nepovedlo
- Upraveno řeazení v seznamu přihlášek, je tam trochu problém se sortováním, jelikož je tam takový složitý `select`.
- Přidán list financí na detail závodu. V náhledu závodu je možné aktuálně vidět jaké náklady závod měl. V seznamu je vidět suma.
- Nachystána akce na hromadné zaslání hesla.
- Přepnul jsem stránky do `production` prostředí, chyby by se měly zobrazovat tak nějak **pěkné** bez debugových hlášek. Pokud narazíte na nějakou :bug: chybu, byl bych moc rád za její popis co a kde.

### :wrench: Opravené bugy
- Ve vyučtování akci byla chyba v **datu** posledního stahnutí nákladů. Místo měsíce se zobrazovala hodina.
- Stupně celsia u počasí se zaokrouhlují na desetinu stupně. Přidal jsem ikonu deště.

## Verze 10.3 <Badge type="info" text="27.08.2023" />

### :mega: Novinky
- Na kartě závodu je možné závod **aktualizovat** mimo pravidelnou aktualizaci systémem. Aktualizaci je možné spustit dvakrát za den.
- Upravil jsem **vzhled** e-mailových šablon
- Bylo upraveno chování novinek, již není potřeba vyplnit úvodník ale je potřeba vyplnit obsah.

### :wrench: Opravené bugy
- Jakákoliv aktualizace nově promazává neaktivní odkazy/linky viz [commit](https://gitlab.com/jzejda/dalin/-/commit/5592507bea4b836b9753a15bf0e61a506ff70ec1)

## Verze 10.2 <Badge type="info" text="11.08.2023" />

### :mega: Novinky
- přepracovaný hodinový cron, nově je možné jej definovat ala `crontab`, hodiny, dny v týdnu, měsíce případně konkrétní den v měsici
- přidán e-mail, zasílá se jednou za měsíc pro role `biling_specialist`. Předmětem mailu jsou uživatele se záporným zůstatkem na účtu.
- drobné úpravy v textaci modálních oken.
- možnost zvolit týdenní report ohledně termínů závodů které konči na přihlášení příští týden viz [issue](https://gitlab.com/jzejda/dalin/-/issues/9).
- změnil jsem **layout e-mailových** zpráv aby se mi to  více líbilo, poladil jsem e-mailové šablony
- na výchozí stránce **administrace jsou v tooltipech jednotlivých bodů zobrazeny úplné informace** s URL odkazy na ORIS a interní administraci [ticket](https://gitlab.com/jzejda/dalin/-/issues/10)
- změny viz [ticket](https://gitlab.com/jzejda/dalin/-/issues/8)

## Verze 10.1 <Badge type="info" text="28.05.2023" />

### :mega: Novinky
- závody z ORISu nově aktualizují jak **Odkazy** tak **Dokumenty**. V minulosti byly aktualizovány pouze Odkazy. [ticket](https://gitlab.com/jzejda/dalin/-/issues/4)
- závody z ORISu aktualizují **Locations** (body zájmu), body zájmu. Tyto jsou přiřazeny k závodu a je možné je vidět na detailu závodu [ticket](https://gitlab.com/jzejda/dalin/-/issues/3)
- do databáze se ukládají informace o **počtu etap** v případě ORIS závodu (zatím není vizuálně reprezentováno)
- do databáze se ukládají informace o **multisportovní akci** v případě ORIS závodu (zatím není vizuálně reprezentováno)

### :wrench: Opravené bugy
- tlačítko **zpět** je funkční a nevrací uživatele na výchozí URL. (na serveru se změnil document_root do /public složky, vyhodily se .htaccess přesměrování)
- funkční hodinový **cron**. Nepředávala se správně proměnná z `.env` proměnných. Přehozeno do site-app.php a vytahováno skrze `config('param');`