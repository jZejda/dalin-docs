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

## Verze 12.0 <Badge type="info" text="06.01.2026" />

### :mega: Novinky
- Projekt byl převeden na **Laravel v12.x**
- Dále jsme přešli na **FilamentPHP v4.x**
- S tímto souvísí i navýšení verze **TailwindCSS 4.x**
- Celkem bylo přepsáno velké množství kódu. Může se toho hodně rozbít :-)

### Novinky v systému 

Zcela byla přepracována stránka **Uživatelskáho nastavení**. Nově byly přídány dvě další sekce.
 
- **Filtry zobrazení** - tyto umožňují uživateslky definovat záložky zobrazení rychlých filtrů na stránce závodů. 
Myšlenka byla taková, že si každý uživatel vytvoří vlastní záložky podle typů závodů kterých se zůčastnuje.
Pokud něko nechodí na tréninky, vůbec tyto nikdy nemusí vidět apod.

- **API Klíč** - Vzniklo nové veřejné api pro strojové dotazování na systém. Prozatím jsou dostupné
vybrané endPointy, nicméně toto je by měla být výkop dalších možností.

V sekci **CMS Stránky** je možné zvolit ze tří typů tvorby obsahu.
- stávající _Markdown_ a _HTML_ obohatil **TipTap** editor, který umožňuje do databáze ukládat objekty,
které mohou mít vlastní stylování. Jedná se o celkem mocný pro zobrazování obsahu tak aby styl
byl vždy pod kontrolou systému (uživateli by se nemělo podařit nějaký nevhodným html tagem rozbít stránku).

V projektu bylo provedeno velké množstí změn, které by neměly rozbíjet stávající logiku projektu.