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

    <input
      type="text"
      placeholder="enter some data and see console"
      v-model="inputText"
    />

    <button v-on:click="changeFullName">change FullName</button>

    <!-- when  we enter the value in input v-model chage the value of inputText and page render and normal method execute every time , but computed propertly get the value from cached and computed property call only when the dependaccy chanegs -->
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
      inputText: "",
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
    changeFullName() {
      //computed property is by default is readonly
      this.fullname = "Jack Neo";
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

    fullname: {
      //get method to get the value of computed property
      get() {
        return this.firstName + " " + this.lastName;
      },

      //set method to change value of computed property,set method get argument of new value
      set(fullname) {
        const name = fullname.split(" ");
        this.firstName = name[0];
        this.lastName = name[1];
      },
    },
  },
};
</script>

<style scoped>
.container {
  margin: 20px;
}
</style>
