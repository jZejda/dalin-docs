---
title: Prostředí pro vývoj
editLink: true
---

# Vlastní devel prostředí

Popíšu jak je možné spustit vývoj na lokálu. V zásadě jsou dvě možnosti. Než se pustím do spolupráce skrze gitlab, je vhodné nejdříve projekt rozjet na lokále trochu si ho osahta a pohrát si sním. Následně pak spolupracovat standardně skrze git GitLab

Celkem pěkný návod na GItHub (GitLab je podobné) najdete [tady](https://github.com/firstcontributions/first-contributions/blob/master/translations/README.cs.md).

Pro vývojové prostředí v konfiguraci **1** je potřeba PHP (>8.3) a MySQL (8.0). Do databáze je možné koukat skrze **phpMyadmin** nebo **MySQL Workbench** nebo jiného klienta. Záleží na každém jak je zvyklý. Dále je nutné zprovoznit composer, nejlépe globálně volaný odkudkoliv `composer`, nebo alespoň lokálně `php composer phar`.
Pokud bude potřeba kompilovat CSS a javascript, je nutné mít zprovozněny [npm](https://www.npmjs.com/) a [Node.js](https://nodejs.org/en/).
Pro konfiguraci **2** je pak nutné pouze **PHP** a rozchodit **composer**.

## Prostředí localhost-u

::: warning Upozornění
Nejprve je nutné zprovoznit PHP >8.3 a MySQL 8+ na lokále, vhodný bude i nějaký klient pro práci s databází (phpMyAdmin, MySQL Workbench ...)
:::

1.  Vytvořím adresář projektu - do něj naklonoju `git clone git@gitlab.com:jzejda/dalin.git` (nebo v první fázi pouze stáhnu) soubory projektu.
2.  V rootu projektu spustím `composer update`, projekt si natáhne aktuální knihovny
3.  Pokud si budu hrát s *css* nebo *javascriptem*, musím nakonfigurovat prostředí **vite** bundelru se všemi závislostmi. Klasicky spustím `npm install`, který mi stáhne všechno potřebné.
4.  Ve vlastním souboru .env nakonfiguruji potřebné, minimálně spojení s databází `DB_`
5.  Spustím **Migration** skrze vnitřní CLI Artisan rozhranní `php artisan migrate:fresh` - databáze by se měla naplnit tabulkami
6.  Spustím **Seed** naplnění databáze výchozími daty `php artisan db:seed`
7.  Spustím ----
8.  Pak už jen stačí spustit vývojové prostředí `php artisan serve` - spustím vývojové prostředí, v konsoli vidím adresu vývojového serveru _Laravel development server started: <http://127.0.0.1:8000>_, tu pak už dám jen do prohlížeče a měl bych vidět stránku projektu
9.  Pokud upravuji CSS a JS v bodě 4., spustím v druhém terminálovém okně příkaz `npm run ----`, měla by se mi skompilovat všechna css a js vždy do jednoho souboru umístěných v `./public/css` a `./public/js`, navíc při každé změně v `*.css`, `*.sass` a `*.vue` souboru se automaticky public soubory zkompilují.
10. Super!! mám vyhráno a mohu nerušeně vyvýjet.