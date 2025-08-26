<template>
  <div class="feature-section">
    <h2>Kam se podívat dále</h2>
    <p class="intro">Prozkoumejte další funkce aplikace.</p>
    <div class="cards">
      <Card
          icon="/dalin/assets/icons/hugeicons-user-multiple-02.svg"
          title="Uživatelé"
          description="Přihlašování na závody, správa registrací, sledování termínovek."
          link="stranka-zavody-akce.html"
      />
      <Card
          icon="/dalin/assets/icons/hugeicons-tools.svg"
          title="Instalace a nastavení"
          description="Jak správně aplikaci nainstalovat, nastavit a provozovat."
          link="/dalin/install/"
      />
      <Card
          icon="/dalin/assets/icons/hugeicons-news.svg"
          title="Novinky"
          description="Jaká jsou novinky v aplikaci? Chci se dozvědět více."
          link="/dalin/changelog/"
      />
    </div>
  </div>
</template>

<script setup>
import Card from './Card.vue'
</script>

<style scoped>
.feature-section {
  text-align: center;
}
.intro {
  margin-bottom: 2rem;
  font-size: 1.1rem;
}
.cards {
  display: flex;
  gap: 1rem;
  justify-content: center;
  flex-wrap: wrap;
  margin-bottom: 2rem;
}
</style>
