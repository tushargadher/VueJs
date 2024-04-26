<template>
  <div class="cart-item card mb-3">
    <div class="row g-0">
      <!-- Product Image -->
      <div class="col-md-2">
        <img
          :src="product.images[0] ? product.images[0] : product.images[1]"
          alt=""
          class="img-fluid rounded cart-item-image"
        />
      </div>
      <!-- Product Details -->
      <div class="col-md-10">
        <div class="card-body">
          <!-- Product Title -->
          <h5 class="card-title">{{ product?.title }}</h5>
          <!-- Product Price -->
          <p class="card-text">Price: ${{ product?.price }}</p>

          <!-- Quantity Controls -->
          <div class="input-group mb-3">
            <!-- Decrement Button -->
            <button
              @click="decrementQuantity"
              class="btn btn-outline-secondary"
              type="button"
            >
              -
            </button>
            <!-- Quantity Input -->
            <input
              type="number"
              class="form-control text-center"
              v-model.number="product.quantity"
              min="1"
            />
            <!-- Increment Button -->
            <button
              @click="incrementQuantity"
              class="btn btn-outline-secondary"
              type="button"
            >
              +
            </button>
          </div>

          <!-- Remove Button -->
          <button @click="handleReomveCartitem" class="btn btn-danger">
            Remove
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  name: "CartItem",
  props: {
    product: {
      type: Object,
      required: true,
    },
  },

  methods: {
    ...mapActions(["removeCartItem", "increseQuantity", "decreseQuantity"]),

    handleReomveCartitem() {
      let confrom = confirm("Remove Product From Cart?");
      if (confrom) {
        this.removeCartItem(this.product);
      }
    },
    incrementQuantity() {
      this.increseQuantity(this.product);
    },

    decrementQuantity() {
      if (this.product.quantity <= 1) {
        alert("Product Quantity can't be zero");
      } else {
        this.decreseQuantity(this.product);
      }
    },
    // removeItem() {
    //   // Dispatch remove cart item action with the product
    //   this.$store.dispatch("removeCartItem", this.product);
    // },
    // incrementQuantity() {
    //   this.$store.dispatch("increseQuantity", this.product);
    // },
    // decrementQuantity() {
    //   if (this.product.quantity <= 1) {
    //     alert("Product Quantity can't be zero");
    //   } else {
    //     this.$store.dispatch("decreseQuantity", this.product);
    //   }
    // },
  },
};
</script>

<style scoped>
.cart-item {
  border: 1px solid #ccc;
  border-radius: 8px;
  padding: 10px;
}

.cart-item img {
  width: 100%;
  height: auto;
  border-radius: 8px;
}

.card-title {
  font-size: 1.5rem;
  font-weight: bold;
  margin-bottom: 10px;
}

.card-text {
  font-size: 1.2rem;
  color: #333;
}

.input-group {
  max-width: 200px;
  margin-top: 10px;
}

.btn {
  font-size: 1.2rem;
}

.btn-outline-secondary {
  border-color: #6c757d;
  color: #6c757d;
}

.btn-outline-secondary:hover {
  background-color: #f8f9fa;
}

.btn-danger {
  background-color: #dc3545;
  border-color: #dc3545;
}

.btn-danger:hover {
  background-color: #c82333;
  border-color: #bd2130;
}
</style>
