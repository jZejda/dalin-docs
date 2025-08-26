<template>
  <div class="card">
    <img :src="icon" alt="" class="icon" />
    <h4>{{ title }}</h4>
    <p>{{ description }}</p>
    <a :href="link" class="link">Zjistit více →</a>
  </div>
</template>

<script setup>
defineProps({
  icon: String,
  title: String,
  description: String,
  link: String
})
</script>

<style scoped>
.card {
  border: 1px solid #e0e0e0;
  padding: 15px;
  border-radius: 8px;
  width: 210px;
  text-align: left;
  transition: box-shadow 0.3s ease;
}
.card:hover {
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
}
.icon {
  width: 40px;
  height: 40px;
  margin: 1px;
  background-color: #f0f0f0;

}
.link {
  display: inline-block;
  margin-top: 1rem;
  color: #007acc;
  text-decoration: none;
  font-weight: bold;
}
.link:hover {
  text-decoration: underline;
}
</style>
