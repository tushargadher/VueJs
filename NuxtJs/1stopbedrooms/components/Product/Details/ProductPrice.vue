<template>
  <div class="price">
    <p class="final-price">{{ formattedFinalPrice }}</p>
    <p class="MRP-price" v-if="!getExcludePromo">{{ formattedMsrp }}</p>
    <p v-else class="special-price" >Special Price</p>
  </div>
</template>

<script>
export default {
  name: "ProductPrice",
  props: {
    finalPrice: {
      type: Number,
      required: true,
    },
    msrp: {
      type: Number,
      required: true,
    },
    onSale: {
      type: Boolean,
      required: true,
    },
    getExcludePromo: {
      type: Boolean,
      required: true,
    },
  },
  computed: {
    formattedFinalPrice() {
      return this.formatCurrency(this.finalPrice);
    },
    formattedMsrp() {
      return this.formatCurrency(this.msrp);
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
  align-items: flex-end;
}

.final-price {
  font-weight: bold;
  padding-right: 5px;
  font-size: 1.1rem;
}

.MRP-price {
  text-decoration: line-through;
  font-size: 0.8rem;
  opacity: 0.9;
}

.special-price {
  font-size: 0.7rem;
  font-weight: bolder;
  color: green;
}
</style>
