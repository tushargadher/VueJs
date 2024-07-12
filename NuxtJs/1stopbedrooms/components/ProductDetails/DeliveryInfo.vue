<template>
  <div class="delivery-info">
    <DeliveryTag v-show="delivery.isFreeShipping" />
    |
    <p class="shipping-date">Ships by {{ delivery.date }}</p>
  </div>
</template>

<script>
import DeliveryTag from "../../components/Product/Tags/DeliveryTag.vue";

export default {
  props: {
    delivery: {
      type: Object,
      required: true,
    },
  },
  components: { DeliveryTag },
};
</script>

<style scoped>
.delivery-info {
  margin-top: 10px;
  display: flex;
  align-items: center;
  /* justify-content: space-between; */
  width: 100%;
  padding: 10px 0;
  border-bottom: 1px solid #dadada;
}
.shipping-date {
  padding: 0 10px;
  font-size: 0.9rem;
  opacity: 0.8;
}
</style>
