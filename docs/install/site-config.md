---
title: Základní konfigurace stránky
editLink: true
---

# Konfigurace

Veškerá konfigurace specifikací klubu je v souboru `config/site-config.php`. Tento soubor je nutné nakonfigorovat podle 
vlastních preferencí. Pojdme si projít jednotlivé oblasti konfigurace.

::: details Pokud je použita funce `env()`
V případě že je nějaká proměnná obalená funkcní `env()` viz [Laravel dokumentace](https://laravel.com/docs/11.x/configuration), znamená to, že webserver se nejdříve dívá do souboru
`.env` v kořenové složce projektu. Pokud zde nalezne hodnotu uvozenou názvem proměnné, tak jí aplikuje ze souboru `.env`
Pokud v souboru promennou nenalezne použije jako výchozí hodnotu druhý argument z funkce `env()`

**Příklad, soubor: `config/site-config.php` obsahuje tento zápis:**
```php
'club' => [
        ...
        'abbr' => env('CLUB_ABBR', 'ABM'), // [!code focus]
        'full_name' => 'Klub orientačního běhu ABM Brno',
        'iban' => env('CLUB_IBAN', null), // [!code focus]
        'user_credit_limit' => env('USER_CREDIT_LIMIT', -2000),
        ...
    ],
```

**V souboru `.env` se nachází**:

```php
CACHE_DRIVER=file
CLUB_ABBR=ABM // [!code focus]
MAIL_MAILER="smtp"
```

Bude mít konfigurace ve výsledku nastavenu v prvku pole `$config['club']['abbr']` hodnotu **ABM**, kdežto hodnota
prvku pole `$config['club']['iban']` bude `null` (v .env souboru se nenachází a druhý argument funkce říká `null`).
:::

## Klub

Základní informace o klubu.

```php
'club' => [
        'abbr' => 'ABM', 
        'full_name' => 'Klub orientačního běhu ABM Brno',
        'iban' => env('CLUB_IBAN', null),
        'user_credit_limit' => env('USER_CREDIT_LIMIT', -2000),
        'regular_membership_fees_prefix' => 111,
        'extra_membership_fees_prefix' => 888,
    ],
```

- **abbr** - zkratka klubu, je celkem důležitá, odvozuje se registrace členů a pod.
- **full_name** - celý náze klubu
- **iban** - IBAN hlavního účtu, na který se zasílají členské vklady
- **user_credit_limit** - `celé číslo` financí osobního konta člena, hodnota od které se nebude moci uživatel přihlásit na závod
- **regular_membership_fees_prefix** - předpona variabilního symbolu pro řádné vklady
- **extra_membership_fees_prefix** - předpona variabilního symbolu člena pro mimořádné vklady


## Přístupy na ORIS

Abyste mohli využívat API ORISu, je potřeba vložit jméno a heslo oris uživatele, který má vysoká práva jako přihlášení
odhlášení členů do závodu, čtení informací o registrací a pod.

::: warning Uživatel ORISu
Veškeré přihlášky do závodů jsou prováděny pod tímto uživatelem. Členové klubu nemusí mít právo se sami přihlašovat do ORISu.
:::

```php
'oris_credentials' => [
        'general' => [
            'username' => env('ORIS_GENERAL_USERNAME', null),
            'password' => env('ORIS_GENERAL_PASSWORD', null),
        ],
    ],
```