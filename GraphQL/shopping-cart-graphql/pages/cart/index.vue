<template>
  <div class="cart-container">
    <h1 class="cart-title">Shopping Cart</h1>

    <div class="cart-content" v-if="cartItems.length">
      <div class="cart-items">
        <div class="cart-item" v-for="item in cartItems" :key="item.id">
          <div class="item-image">
            <img :src="item.images[0]" :alt="`Image of ${item.title}`" />
          </div>
          <div class="item-details">
            <h2 class="item-title">{{ item.title }}</h2>
            <p class="item-price">{{ item.price }} &#36;</p>
            <div class="item-quantity">
              <button @click="decreaseQuantity(item)">-</button>
              <span>{{ item.quantity }}</span>
              <button @click="increaseQuantity(item)">+</button>
            </div>
          </div>
          <div class="item-total">
            <p>{{ itemTotal(item) }} &#36;</p>
          </div>
          <button class="remove-item" @click="removeItem(item)">Remove</button>
        </div>
      </div>

      <div class="cart-summary">
        <h2>Order Summary</h2>
        <table class="summary-table">
          <thead>
            <tr>
              <th>Product title</th>
              <th>Quantity</th>
              <th>Price</th>
              <th>Total</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="item in cartItems" :key="item.id">
              <td>{{ item.title }}</td>
              <td>{{ item.quantity }}</td>
              <td>{{ item.price }} &#36;</td>
              <td>{{ itemTotal(item) }} &#36;</td>
            </tr>
          </tbody>
        </table>
        <p>Total Items: {{ totalItems }}</p>
        <p>Total Price: {{ totalPrice }}</p>
        <button class="checkout-button" @click="handlePlaceOrder">
          Place Order
        </button>
      </div>
    </div>

    <div v-else>
      <h2>Cart is empty</h2>
    </div>
  </div>
</template>

<script>
export default {
  head() {
    return {
      title: "Shopping Cart - My Cart",
      meta: [
        {
          title: "description",
          content:
            "Review your shopping cart items, update quantities, and proceed to checkout.",
        },
      ],
    };
  },
  computed: {
    cartItems() {
      return this.$store.state.cart;
    },
    totalItems() {
      return this.cartItems.reduce((total, item) => total + item.quantity, 0);
    },
    totalPrice() {
      return this.cartItems.reduce(
        (total, item) => total + item.price * item.quantity,
        0
      );
    },
  },
  data() {
    return {
      showSummary: false,
    };
  },
  methods: {
    increaseQuantity(item) {
      this.$store.commit("INCREASE_QUANTITY", item);
    },
    decreaseQuantity(item) {
      this.$store.commit("DECREASE_QUANTITY", item);
    },
    removeItem(item) {
      this.$store.commit("REMOVE_ITEM", item);
    },
    itemTotal(item) {
      return item.price * item.quantity;
    },
    handlePlaceOrder() {
      alert("Order Placed");
      this.$store.commit("CLEAR_CART");
      let conform = confirm("Redirect to product page?");
      if (conform) {
        this.$router.push("/product");
      }
    },
  },
};
</script>

<style scoped>
.cart-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 100px 20px;
}

.cart-title {
  text-align: center;
  font-size: 2rem;
  margin-bottom: 20px;
}

.cart-content {
  display: flex;
  justify-content: space-between;
  gap: 20px;
}

.cart-items {
  flex: 2;
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.cart-item {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  border: 1px solid #ccc;
  padding: 10px;
  border-radius: 8px;
  background-color: #fff;
}

.item-image img {
  max-width: 100px;
  border-radius: 8px;
}

.item-details {
  flex-grow: 1;
  padding: 0 20px;
}

.item-title {
  font-size: 1.5rem;
}

.item-price {
  color: #888;
  margin-bottom: 10px;
}

.item-quantity {
  display: flex;
  align-items: center;
  gap: 10px;
}

.item-quantity button {
  border: 1px solid #ccc;
  background-color: #f5f5f5;
  padding: 5px 10px;
  cursor: pointer;
}

.item-total {
  font-size: 1.2rem;
  margin-left: auto;
  padding: 0 20px;
}

.remove-item {
  background-color: #ff4d4f;
  border: none;
  color: #fff;
  padding: 5px 10px;
  cursor: pointer;
}

.cart-summary {
  flex: 1;
  text-align: center;
  border: 1px solid #ccc;
  padding: 20px;
  border-radius: 8px;
  background-color: #fff;
}

.cart-summary h2 {
  font-size: 1.8rem;
  margin-bottom: 10px;
}

.checkout-button {
  background-color: #007bff;
  color: #fff;
  padding: 10px 20px;
  border: none;
  cursor: pointer;
  border-radius: 8px;
  margin-top: 20px;
}

.summary-table {
  width: 100%;
  border-collapse: collapse;
  margin-top: 20px;
}

.summary-table th,
.summary-table td {
  border: 1px solid #ccc;
  padding: 10px;
  text-align: left;
}

.summary-table th {
  background-color: #f5f5f5;
}

@media (max-width: 768px) {
  .cart-content {
    flex-direction: column;
  }

  .cart-summary {
    margin-top: 20px;
  }
}
</style>
