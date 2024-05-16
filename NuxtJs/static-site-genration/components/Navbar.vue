<template>
  <nav class="navbar">
    <NuxtLink to="/" class="navbar-link">Home</NuxtLink>
    <NuxtLink to="/product" class="navbar-link">Products</NuxtLink>
  </nav>
</template>

<script>
export default {};
</script>

<style scoped>
.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  border: 1px solid gray;
  border-radius: 10px;
  background-color: rgb(200, 248, 200);
}

.navbar-link {
  font-size: 20px;
  margin-right: 20px;
  text-decoration: none;
  color: black;
}

.navbar-link:hover {
  color: gray;
}
</style>
