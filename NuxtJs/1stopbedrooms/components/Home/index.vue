<template>
  <div>
    <h1>Home Page</h1>
    <button @click="hanldRoutes">Check</button>
  </div>
</template>

<script>
export default {
  methods: {
    hanldRoutes() {
      this.$router.push({ path: "/bedroom/bedroom-sets" });
    },
  },
};
</script>

<style scoped></style>
