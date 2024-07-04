<template>
  <div>
    <p class="delivery-text">{{ deliveryType }}</p>
  </div>
</template>

<script>
export default {
  props: {
    deliveryType: {
      type: String,
      require: true,
    },
  },
};
</script>

<style scoped>
.delivery-text {
  font-size: 0.9rem;
  opacity: 0.9;
}
</style>
