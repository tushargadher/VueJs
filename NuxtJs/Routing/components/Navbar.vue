<template>
  <v-app-bar fixed app color="primary">
    <NuxtLink to="/"><v-btn text>Home</v-btn></NuxtLink>
    <NuxtLink :to="{ name: 'product' }"> <v-btn text>Product</v-btn></NuxtLink>
    <NuxtLink :to="{ name: 'about' }"> <v-btn text>About</v-btn></NuxtLink>

    <!-- <n-link to="/"></n-link> -->
    <!-- <nuxt-link to=""></nuxt-link> -->
    <!-- <NLink to="/"></NLink> -->
  </v-app-bar>
</template>
<!-- 
Benefits of Named Routes
Using named routes instead of hardcoding URLs directly in your components has several benefits:

Cleaner Code: You don't have to hardcode URLs, making your code more maintainable and easier to refactor.
Dynamic Routing: Named routes allow you to change the actual URL structure of your application without having to update all your route references.
Easier Navigation: You can navigate between routes more easily by referring to them by name, especially useful in larger applications with complex routing. -->