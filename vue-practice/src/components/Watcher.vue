<template>
  <div class="container">
    <h1>Watch Components</h1>
    <h4>Watcher Example</h4>
    <h5>Volumn Tracker(0-20)</h5>
    <p>Cuurent Volumn : {{ Volumn }}</p>
    <button v-on:click="increaseVolumn">+</button>
    <button v-on:click="descreaseVolumn">-</button>
    <div>
      <input type="text" placeholder="search Product" v-model="product" />
      <input
        type="text"
        placeholder="Product Name"
        v-model="productDetails.name"
      />
      <input
        type="text"
        placeholder="Product Details"
        v-model="productDetails.details"
      />
    </div>
  </div>
</template>
<script>
export default {
  name: "Watcher",
  data() {
    return {
      Volumn: 0,
      product: "",
      productDetails: {
        name: "",
        details: "",
      },
    };
  },
  methods: {
    increaseVolumn() {
      this.Volumn += 2;
    },
    descreaseVolumn() {
      this.Volumn -= 2;
    },
  },

  //watchers in Vue.js are used to monitor changes to specific data properties in a Vue component.
  // When the value of a watched property changes, a custom function associated with the watcher is automatically called.
  // This allows you to perform actions or execute logic in response to data changes, such as updating other data properties,
  //   making API requests,

  //usecase:call the api in respone to change in application data,like in dropdown,when use user sort product
  watch: {
    //propertky name and watcher name must be same
    Volumn(newValue, oldValue) {
      if (newValue === 18 && newValue > oldValue) {
        alert("Volumn to high");
      }
      console.log(`New Value : ${newValue},Old Value : ${oldValue}`);
    },
    product: {
      handler(newValue) {
        console.log(`Searching Product with Product Name : ${newValue}`);
      },
      immediate: true, //this will basically inform vue that handler function should be run initially on page load
    },
    productDetails: {
      handler(newValue) {
        console.log(newValue);
      },
      //to observer the chnages in object property
      deep: true,
    },
  },
};
</script>
<style scoped>
.container {
  margin: 20px;
}
</style>
