<!-- Computed properties are like memoize it only executes itself onetime where 1st
time it has been used then it stores it's results for next.  -->

<template>
  <div class="container">
    <h1>Home components</h1>
    <h2>Computed Properties:</h2>
    <h3>{{ fullname }}</h3>
    <h4>{{ calcDiscount() }}</h4>
    <h4>{{ calcDiscount() }}</h4>

    <h4>{{ compCalcDiscount }}</h4>
    <h4>{{ compCalcDiscount }}</h4>
  </div>

  <!-- when we call it second time it get value from cache and does not executed
  compCalcDiscount function -->
</template>

<script>
export default {
  name: "Home",

  data() {
    return {
      firstName: "Tushar",
      lastName: "Gadher",
      fees: 100,
      discount: 25,
    };
  },
  methods: {
    calcDiscount() {
      for (let i = 0; i <= 10000000; i++) {
        Math.random();
      }
      console.log("calc executed Normal!");
      return this.fees - (this.fees * this.discount) / 100;
    },
  },
  computed: {
    compCalcDiscount() {
      for (let i = 0; i <= 10000000; i++) {
        Math.random();
      }
      console.log("calc executed Computed!");
      return this.fees - (this.fees * this.discount) / 100;
    },

    fullname() {
      return this.firstName + this.lastName;
    },
  },
};
</script>

<style scoped>
.container {
  margin: 20px;
}
</style>
