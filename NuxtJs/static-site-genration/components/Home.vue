<template>
  <div>
    <h1>Product Page</h1>
    <div class="container">
      <Product
        v-for="product in products"
        :key="product.id"
        :product="product"
      />
    </div>
  </div>
</template>

<script>
const api = "https://api.escuelajs.co/api/v1/products";
export default {
  mounted() {
    this.fetchProduct();
  },
  data() {
    return {
      products: [],
    };
  },
  methods: {
    fetchProduct() {
      console.log("Product API Calling...");
      fetch(api)
        .then((res) => {
          return res.json();
        })
        .then((data) => {
          console.log(data)
          this.products = data;
        })
        .catch((err) => console.error(err));
    },
  },
};
</script>

<style lang="scss" scoped></style>
