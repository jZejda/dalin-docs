---
title: Napojení na banku
editLink: true
---

# Napojení na banku

Napojením na banku získáte možnost automatického připisování momožádných šlenských příspěvků jednotlivých členů. Pro správné nastavení této funce je nutné:

- Minimálně **jeden aktivní bankovní účet** správně nastavený v systému.
- **Automatické zpracování plateb aktivní** v nastavení stránek.
- Platby zalsané pod **správným variabilním symbolem.**

V současnosti je implementován konektor na banku **Moneta Moeny banku** a **Fio banku**. Všechny bankovní spojení jsou definovány v tabulce `bank_accounts`. Nastavení bankovního účtu nelze z administrace stránek upravovat ani přidávat.

## Konektory

- `monetaMoneyBank` - Moneta Moneta bank
- `fioBank` - Fio banka

## Connector - Moneta Money Bank

<img src="/install/img/logo-moneta-money-bank.jpg" alt="Zavod/Akce" class="pure-image">

Konkrétní nastavení pro tento konektor.

Povinná pole do `account_credentials` která získá majitel bankovního účtu. Token je nutné jednou ročně obnovit:

- **token**
- **account_id**

```{json}
{
    "token": "---TOKEN----",
    "account_id": "0123456789"
}
```

## Connector - Fio banka

<img src="/install/img/fio_banka_logo.png" alt="Zavod/Akce" class="pure-image" style="max-width: 300px">

Konkrétní nastavení pro tento konektor.

Návod na získání **API tokenu** naleznete [zde](https://www.fio.cz/bankovni-sluzby/api-bankovnictvi).

**Databázová reprezentace** v tabulce `bank_accounts` pak bude vypadata:

| název | hodnota | vysvětlení |
| --- | --- | --- |
| `name` | \{libovolný název\} | název propojení napojení na banku  |
| `clase` | `fioBank` | název **třídy**, která bude výstup z banky zpracovávat |
| `account_credentials` | viz příklad níže | upřesnění přístupových údajů konektoru |
| `currency` | `CZK` | měna transakcí, pouze `CZK`  |
| `active` | 1 | aktivuje/deaktivuje napojení na banku |

```{json}
{
    "token": "---TOKEN VYGENEROVANÝ BANKOU----"
}
```

Token je nutné jednou ročně obnovit. Případně je možné nechat `token` periodicky obnovovat.

::: warning Upozornění
Connector data pouze **stahuje**, neposílá nic zpět do banky. Pro vyšší bezpečnosti si nechte vygenerovat token **pouze pro čtení**.

Pokud již máte token vygenerovaný pro jinou aplikaci, nechte si opět pro vyšší bezpečnost vygenerovat **nový token pro tuto aplikaci**. Nesdílejte tokeny mezi různými aplikacemi.
:::



