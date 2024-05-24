<template>
  <div>
    <h1>Product Page</h1>
    <div class="container" v-if="products">
      <Product
        v-for="product in products"
        :key="product.id"
        :product="product"
      />
    </div>

    <p v-else>Loading product...</p>
  </div>
</template>

<script>
export default {
  head() {
    return {
      title: "Product Page",
    };
  },
  async asyncData({ $axios }) {
    try {
      let products = await $axios.$get("/products");
      console.log(products);
      return { products };
    } catch (error) {
      console.log(error);
      return { products: [] };
    }
  },
  // data() {
  //   return {
  //     products: null, // Initialize products as an empty array
  //   };
  // },
  // mounted() {
  //   this.fetchProduct(); // Call fetchProduct method when component is mounted
  // },
  // methods: {
  //   async fetchProduct() {
  //     try {
  //       console.log("fetching product");
  //       const res = await fetch(api);
  //       const products = await res.json();
  //       this.products = products; // Assign API data directly to products
  //     } catch (error) {
  //       console.error("Error fetching products:", error);
  //       // Handle error if needed
  //     }
  //   },
  // },
};
</script>

<style lang="scss" scoped></style>
