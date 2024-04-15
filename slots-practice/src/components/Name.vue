<template>
  <h1 v-for="name in namelist" v-bind:key="name.firstName">
    <slot :firstname="name.firstName" :lastname="name.lastName"></slot>
    <slot name="lastname" :lastname="name.lastName"></slot>
  </h1>
</template>

<script>
export default {
  name: "NameComponent",
  data() {
    return {
      namelist: [
        {
          firstName: "Tushar",
          lastName: "Gadher",
        },
        {
          firstName: "Rohit",
          lastName: "sharma",
        },
        {
          firstName: "Virat",
          lastName: "Kohli",
        },
        {
          firstName: "MS",
          lastName: "Thala",
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped></style>
