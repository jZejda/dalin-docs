---
title: Instalace projektu
editLink: true
---

# Jak instalovat projekt

Pokud byste chtěli vyzkoušet **dalin-a** správce klubu orientačních sportů, budete potřebovat:
 - standardní webové prostředí **PHP** ve verzi >= **8.3** _(snažíme se mít projekt aktuální aby ho bylo možné provozovat beze změn co nejdéle)_
 - MySQL databázi ve verzi **8.x**
 - **cron** úlohu spouštěnou **jednou za hodinu**

## Doporučená konfigurace

Není podmínkou provozu projektu ale aby vše fungovalo tak jak bylo zamýšleno, bylo by vhodné aby
hosting spolňoval ještě následující podmínky

 - ještě jedna **cron** uloha **co 5 minut**
 - nějaký rychlý přístup k souborům jako **ssh** a pod.

## Vhodný webhosting

Nechci dělat reklamu ale aktuálně nám to běží na serverech **Webglobe**. Pokud byste o hostingu uvažovali
a chtěli mě podpořit, tak jej objednejte pod tímto linkem.

Proč zrovna **Webglobe**. Mají v základu možnost využít ssh přístup, což je pro mě naprosto stěžejní v případě kdy:
 - aktualizuji projekt skrze `rsync`
 - provádím aktualizaci nad projektem spouštěním `composer install`
 - provádím aktualizaci na frontendu `npm install` 

To jsou hlavní výhody hostingu.

::: tip Standardní hosting
Projekt ale lze rozjet kdekoli, kde mají vhodnou verzi PHP a MySQL serveru. 
:::