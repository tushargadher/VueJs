<template>
  <v-app>
    <Navbar />
    <v-main color="primary">
      <v-container>
        <Nuxt />
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: "DefaultLayout",
};
</script>
