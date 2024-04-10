<template>
  <div>
    <h1>404</h1>
    <h3>Page Not Found</h3>
    <router-link :to="{ name: 'Home' }">GO Home</router-link>
  </div>
</template>
<script>
export default {
  name: "NotFound",
};
</script>
