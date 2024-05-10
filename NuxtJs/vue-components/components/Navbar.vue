<template>
  <nav class="navbar">
    <nuxt-link to="/">Home</nuxt-link>
    <nuxt-link to="/about">About</nuxt-link>
    <nuxt-link to="/contact">Contact</nuxt-link>
  </nav>
</template>

<script>
export default {};
</script>

<style scoped>
* {
  margin: 0;
}
.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  background-color: #42b983;
  color: white;
}

a {
  margin-right: 10px;
  padding: 5px 10px;
  border-radius: 5px;
  text-decoration: none;
  transition: background-color 0.3s ease;
  color: "black";
}
a:hover {
  background-color: #3aa374;
}
</style>
