<template>
  <div class="price">
    <p class="final-price">{{ formatCurrency(price.finalPrice) }}</p>
    <p class="mrp">{{ formatCurrency(price.regularPrice) }}</p>
    <p class="discount">{{ price.discount }}% off</p>
    <a v-show="price.priceMatch">Price match Guarantee</a>
  </div>
</template>

<script>
export default {
  props: {
    price: {
      type: Object,
      required: true,
    },
  },
  methods: {
    formatCurrency(value) {
      return value.toLocaleString("en-US", {
        style: "currency",
        currency: "USD",
      });
    },
  },
};
</script>

<style scoped>
.price {
  display: flex;
  align-items: baseline;
  /* border: 1px solid black; */
  width: fit-content;
  margin: 5px 0;
}
.final-price {
  font-weight: bolder;
  font-size: 1.8rem;
  margin-right: 10px;
}
.mrp {
  text-decoration: line-through;
  font-size: 1.2rem;
  opacity: 0.7;
  margin-right: 10px;
}
.discount {
  color: green;
  font-weight: bold;
  font-size: 0.9rem;
  margin-right: 10px;
}
</style>
