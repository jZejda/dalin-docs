---
title: Napojení na banku
editLink: true
---

# Napojení na banku

Napojením na banku získáte možnost automatického připisování momožádných šlenských příspěvků jednotlivých členů. Pro správné nastavení této funce je nutné:

- Minimálně **jeden aktivní bankovní účet** správně nastavený v systému.
- **Automatické zpracování plateb aktivní** v nastavení stránek.
- Platby zalsané pod **správným variabilním symbolem.**

V současnosti je implementován konektor na banku **Moneta Moeny banku**. Všechny bankovní spojení jsou definovány v tabulce `bank_accounts`. Nastavení bankovního účtu nelze z administrace stránek upravovat ani přidávat.

## Bank Enums 

- `monetaMoneyBank` - Moneta Moneta bank

## Connector - Moneta Money Bank

Konkrétní nastavení pro tento konektor.

Povinná pole do `account_credentials` která získá majitel bankovního účtu. Token je nutné jednou ročně obnovit:
```{json}
{
    "token": "---TOKEN----",
    "account_id": "0123456789"
}
```

