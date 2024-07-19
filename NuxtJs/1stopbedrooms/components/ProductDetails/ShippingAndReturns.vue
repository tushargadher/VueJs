<template>
  <div class="shipping-and-returns">
    <h2>Shipping & Returns</h2>
    <div class="content">
      <div class="delivery-options">
        <div class="shipping-info">
          <img src="../../static/delivery_icon.svg" alt="Shipping Icon" />
          <div>
            <p>Ships by {{ productData.additional.delivery.date }}</p>
          </div>
        </div>
        <h3>Delivery Options</h3>
        <ul>
          <li
            v-for="(item, index) in shippingData.shippingAndReturn.shipping"
            :key="index"
          >
            <strong>{{ item.title }}</strong>
            <p>{{ item.subtitle }}</p>
          </li>
        </ul>
        <nuxt-link to="/delivery-process" class="more-info">
          More About Our Delivery Process →
        </nuxt-link>
      </div>
      <div class="returns-info">
        <div class="return-icon">
          <img src="../../static/30days_delivery.svg" alt="Returns Icon" />
          <h3>{{ shippingData.shippingAndReturn.return.title }}</h3>
        </div>

        <p>
          {{ shippingData.shippingAndReturn.return.subtitle }}
          <a :href="shippingData.shippingAndReturn.return.url">here</a>.
        </p>
      </div>
    </div>
  </div>
</template>
<script>
import { mapState } from "vuex";

export default {
  name: "ShippingAndReturns",
  computed: {
    ...mapState({
      shippingData: (state) => state.productStore.shippingData,
      productData: (state) => state.productStore.productData,
    }),
  },
};
</script>
<style scoped>
.shipping-and-returns {
  width: 100%;
  margin: 0 auto;
  padding: 20px 60px;
}

.content {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-top: 20px;
  padding-bottom: 30px;
  border-bottom: 1px solid #dadada;
}

.shipping-info,
.returns-info {
  display: flex;
  align-items: center;
  width: 50%;
}
.shipping-info {
  margin-bottom: 20px;
}
.returns-info {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}
.shipping-info img,
.returns-info img {
  width: 48px;
  height: 48px;
  margin-right: 10px;
}

.delivery-options {
  flex: 2;
}

.delivery-options ul {
  list-style-type: none;
  padding: 0;
}

.delivery-options li {
  margin-bottom: 10px;
}

.more-info {
  display: block;
  margin-top: 20px;
  color: blue;
  text-decoration: none;
}

.more-info:hover {
  text-decoration: underline;
}

.returns-info a {
  color: blue;
  text-decoration: none;
}
.returns-info p {
  width: 70%;
}

.returns-info a:hover {
  text-decoration: underline;
}
.return-icon {
  display: flex;
  align-items: center;

  margin-bottom: 20px;
}
h3 {
  margin: 10px 0;
}
</style>
