<template>
  <div>
    <Navbar v-if="accessToken" />
    <Nuxt />
  </div>
</template>

<script>
export default {
  computed: {
    accessToken() {
      return this.$store.state.accessToken;
    },
  },
};
</script>

<style lang="scss" scoped></style>
