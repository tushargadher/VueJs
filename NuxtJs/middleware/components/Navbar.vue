<template>
  <nav class="navbar">
    <div class="navbar-brand">
      <NuxtLink to="/" class="navbar-item">Home</NuxtLink>
    </div>
    <div class="navbar-menu">
      <div class="navbar-end">
        <NuxtLink to="/about" class="navbar-item">About</NuxtLink>

        <NuxtLink to="/content" class="navbar-item">Content</NuxtLink>

        <NuxtLink to="/more" class="navbar-item">More</NuxtLink>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  // No need for methods when using NuxtLink
};
</script>

<style scoped>
.navbar {
  background-color: #ffffff;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;

  width: 100%;
  z-index: 100;
}

.navbar-brand {
  font-weight: bold;
  display: flex;
  align-items: center;
}

.navbar-item {
  cursor: pointer;
  margin-right: 1rem;
  text-transform: uppercase;
  font-weight: bold;
  color: #333333;
  transition: color 0.3s ease;
}

.navbar-item:hover {
  color: #42b983;
}
</style>
