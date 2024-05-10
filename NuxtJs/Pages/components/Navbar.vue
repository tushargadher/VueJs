<template>
  <div>
    <nuxt-link to="/" class="link">Home</nuxt-link>
    <nuxt-link to="/about" class="link">About</nuxt-link>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.link {
  margin-right: 10px;
  padding: 5px 10px;
  border-radius: 5px;
  background-color: #42b983;
  color: white;
  text-decoration: none;
  transition: background-color 0.3s ease;
}
.link:hover {
  background-color: #3aa374;
}
</style>
