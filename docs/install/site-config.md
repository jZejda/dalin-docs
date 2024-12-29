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

## Přístupy k OpenWeather

```php
'open_map_forecast_api_key' => env('OPEN_MAP_API_KEY', 'open_map_forecast_api_key'),
```

- **open_map_forecast_api_key** - soukromý klíč k Open Weather API
  API využívá [Free plan](https://openweathermap.org/price), kde je možné volat 1 milion volání za měsíc
  V případě validních souřadnit LAT/LNG bude pět dní dopředu stránka zobrazovat předpověď počasi na danou hodinu startu závodu.

## Cron úlohy

### Hodinový cron

::: warning Popis nastavení hodinového
Systém se bude chovat předvídatelně, pokud si hodinový kron nastavíte opravdu jedno volání
za hodinu. Takto je služba koncipována.
:::

::: info Popis nastavení hodinového cron-u individiální nastavení

```
active      - zapíná/vypíná spouštění ulohy (true/false)
hours       - hodiny kdy se má uloha spouštět ['08', '22']
days        - dny v měsíci kdy se má úloha spouštět ['01', '05', '22']
months      - měsíce kdy se má uloha spouštět['01', '12']
day_in_week - dny v týdnu, kdy se má uloha spouštět ['0', '1', '5'] 0 = neděle, 1 = ponedělí

```

:::

**Příklad nastavení hodinového cronu:**

```php
'cron_hourly' => [
    'url_key' => env('CRON_HOURLY_URL_KEY', 'url_key'),
    'weather_forecast' => [
        'active' => true,
        'hours' => ['08', '15'],
        'days_in_month' => ['*'],
        'months' => ['*'],
        'days_in_week' => ['*'],
    ],
    'event_update' => [
        'active' => true,
        'hours' => ['22', '04', '06'],
        'days_in_month' => ['*'],
        'months' => ['*'],
        'days_in_week' => ['*'],
    ],
    'bank_transaction_sync' => [
        'active' => true,
        'hours' => ['*'],
        'days_in_month' => ['*'],
        'months' => ['*'],
        'days_in_week' => ['*'],
    ],
    'mail_monthly_user_debit_report' => [
        'active' => true,
        'hours' => ['08'],
        'days_in_month' => ['01'],
        'months' => ['*'],
        'days_in_week' => ['*'],
    ],
    'mail_weekly_user_event_summary' => [
        'active' => true,
        'hours' => ['08'],
        'days_in_month' => ['*'],
        'months' => ['*'],
        'days_in_week' => ['0'],
    ],
    'mail_entry_ends_to_pay' => [
        'active' => true,
        'hours' => ['*'],
        'days_in_month' => ['*'],
        'months' => ['*'],
        'days_in_week' => ['*'],
    ],
],

```

- **weather_forecast** - volá OpenWeather API, do volání jsou zahrnuty pouze akce, které maji do začátku 5 a méně dnů. S ohledem na limit free volání a počet eventů volte frekvenci volání.
- **event_update** - frekvence aktualizace s ORIS-em
- **bank_transaction_sync** - časy stahování nových bankovních transakcí
- **mail_monthly_user_debit_report** - report uživatelů, kteří mají záporný stav uživatelského konta, e-mail chodí na roli Finančník
- **mail_weekly_user_event_summary** - měsíční souhrn nadcházejících akcí, chodí na uživatele, kteří mají tento report zapnut
- **mail_entry_ends_to_pay** - e-mail na finančníka v hodinu kdy byl ukončen pro zaplacení startovného

