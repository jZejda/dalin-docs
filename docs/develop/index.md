---
title: Popis projektu
editLink: true
---

# Jak pomoci projektu

Pokud se chceš aktivně zapojit do vývoje stránek, jsi na správné adrese. Pomoci je možné několika způsoby.

1. **Stránky používám a chtěl bych na nich něco změnit**. Je tam nelogičnost, špatně se to ovládá. V takovém případě 
je super napsat co je špatně a třeba o tom i podiskutovat jestli by se to dalo udělat lépe.

2. **Chtěl bych se podílet na nových vlastnostech**. Aktivně přemýšlím o tom co by se mohlo dále rozvíjet. Chápu danou problematiku
a dokážu popsat chování nové funkce. Takový malý produktová manager. Ukoly pak naplánovat a případně prioritizovat co by se mělo udělat dříve a co později.

3. **Chtěl bych nové věci testovat**. Připravuje se nová verze systému a bude potřeba jí pořádně otestovat.
4. **Chtěl bych psát a upravovat tuto dokumentaci**.
5. **Chtěl bych přímo přispívat v projektu jako programátor**. Není žádný problém. Kód je verzovaný, spolupráci se meze nekladou.

Diskutovat nad věcmi můžeme společně na skupinovém chatu Discord. viz dále.

::: tip Diskuse
Již delší dobu je na **Discord**-u založena místnost abychom se nemuseli případně opakovat. Chceš se podělit s nápadem, dotazem a pod jsi
vítán pod [tímto odkazem](https://discord.gg/tVGRPXPF). **Discord** běží i v prohlížeči stačí se [zaregistrovat](https://discord.com/register) a skrze pozvánku přihlásit do naší skupiny.
:::

### Pokud chci pomoci projektu:

Jaké jsou požadavky pro člověka na vývoj? Znalost **PHP**, frameworku **Laravel** nebo Symfony, **JavaScript** plus okrajově **Vue.js**. Nově ještě
**Livewire** v kombinaci s **alpine.js**, které používa knihovna FilamentPHP.
Co je ale nejdůležitější, _chuť něco dělat případně se naučit_. Existuje spoustu kvalitních návodů, popisů nebo dokumentace.
Zároveň není problém něco konkrétně vysvětlit, co jak bylo myšleno.

## Jak je to poskládané

V roli backendu je zde [Laravel](https://laravel.com/) (aktuálně ve verzi 10). Půjdeme cestou časté aktualizace. Aktuálně 
je nejnižší verze **PHP 8.3**. Dále doporučuji MySQL databázi 8+ u nižších verzích MySQL je potřeba trochu upravit migrace.

Líbilo by se mi dělat krásnou aplikaci rozdělenou na backena a frontend bohužl na toto nemám čas takže jsem šel kompromisem.
Tedy konkrétně
 - [BACKEND]- **Laravel** + **MySQL**
 - [FRONTEND]- **[Laravel LiveWire](https://laravel-livewire.com/)** 
   - [Filamentphp v3](https://filamentphp.com/) - nástroj kde je udělaná administrace rozhranní 
   - **[.blade](https://laravel.com/docs/10.x/blade)** - použití standardního template jazyka Blade v Laravelu pro jakoukoliv jinou stránku
   - [Tailwind CSS](https://tailwindcss.com/) - je možné použít jakoukoliv třídu z verze **3.x**
     - [Flowbite](https://flowbite.com/) - je možné použít komponenty z free verze

# Chtěl bych se zeptat

Je tu [Discord](https://discord.gg/BcrhnNSaG5) pro nápady, dotazy a pod.

Případně je možné napsat na e-mail: dalin@jirizejda.cz, ozveme se nazpět.