<template>
  <div class="navbar">
    <NuxtLink to="/"> <coreLogo /></NuxtLink>
    <NuxtLink to="/">Departments</NuxtLink>
    <NuxtLink to="/">Brands</NuxtLink>
    <SearchInput placeholder="Search Furniture" width="40vw" />
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.navbar {
  height: 13vh;
  padding: 0 20px;
  background-color: #0e259a;
  display: flex;
  align-items: center;
}
.navbar a {
  text-decoration: none;
  color: white;
  font-weight: bold;
  margin: 0px 20px;
}
</style>
