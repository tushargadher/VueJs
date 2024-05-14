<template>
  <div class="container">
    <!-- <p>Vue js has {{ forks }} forks and {{ issues }} issues at the moment</p> -->
    <Product v-for="product in products" :key="product.id" :product="product" />
  </div>
</template>

<script>
const api = "https://api.escuelajs.co/api/v1/products";
export default {
  //   mounted() {
  //     this.fetchProduct();
  //   },
  data() {
    return {
      products: [],
    };
  },

  //if we disable js on browser then still it gonna work because fetch is server side rendering
  async fetch() {
    const result = await fetch(api);
    const data = await result.json();
    this.products = data;
    console.log(data);
  },
  //   methods: {
  //     fetchProduct() {
  //       fetch(api)
  //         .then((res) => {
  //           return res.json();
  //         })
  //         .then((data) => {
  //           console.log(data);
  //           this.products = data;
  //         })
  //         .catch((err) => console.error(err));
  //     },
  //   },
};
</script>

<style scoped>
.container {
  width: 90vw;
}
</style>
