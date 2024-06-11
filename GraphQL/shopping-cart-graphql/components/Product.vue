<template>
  <div class="product">
    <img
      :src="product.images[0]"
      alt="Product Image"
      v-if="product.images.length > 0"
      @click="redirectToProduct(product.id)"
      @error="handleImageError"
    />
    <h2>{{ product.title }}</h2>

    <p class="price">Price: ${{ product.price }}</p>
    <p class="category">Category: {{ product.category.name }}</p>
    <div class="button-group">
      <button class="delete-btn btn" @click="deleteProduct">
        <span class="icon-wrapper red-bg"
          ><i class="fas fa-trash-alt"></i
        ></span>
      </button>
      <button class="update-btn btn" @click="redirectToUpdatePage(product.id)">
        <span class="icon-wrapper green-bg"><i class="fas fa-edit"></i></span>
      </button>
      <button class="add-to-cart-btn btn" @click="handleAddtoCart(product)">
        ADD TO CART
        <span class="icon-wrapper yellow-bg"
          ><i class="fas fa-cart-plus"></i
        ></span>
      </button>
    </div>
  </div>
</template>

<script>
import gql from "graphql-tag";
export default {
  props: {
    product: {
      type: Object,
      required: true,
    },
  },

  methods: {
    // Add to cart product
    handleAddtoCart(productData) {
      console.log(productData);
      this.$store.commit("ADD_TO_CART", productData);
    },

    handleImageError(e) {
      e.target.src =
        "https://www.feed-image-editor.com/sites/default/files/perm/wysiwyg/image_not_available.png";
    },
    redirectToProduct(id) {
      this.$router.push(`product/${id}`);
    },

    redirectToUpdatePage(id) {
      this.$router.push(`product/update_product/${id}`);
    },
    async deleteProduct() {
      let conform = confirm("Delete Product?");
      if (conform) {
        try {
          // Make GraphQL mutation call to delete product
          const response = await this.$apollo.mutate({
            mutation: gql`
              mutation deleteProduct($id: ID!) {
                deleteProduct(id: $id)
              }
            `,
            variables: {
              id: this.product.id,
            },
          });
          console.log(response);
          if (response) {
            // Emit delete product so we can listen into parent
            this.$emit("deleteProduct", this.product.id);
          }
        } catch (error) {
          console.error(`Error while deleting product ${error}`);
        }
      }
    },
  },
};
</script>

<style scoped>
.product {
  border: 1px solid #ccc;
  border-radius: 8px;
  padding: 16px;
  margin-bottom: 16px;
  width: 30%;
  min-width: 250px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  background-color: #fff;
}

.product:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
}

.product img {
  max-width: 100%;
  height: auto;
  border-radius: 8px;
  margin-bottom: 16px;
}

.product h2 {
  font-size: 1.25rem;
  color: #333;
  margin-bottom: 8px;
}

.product p {
  font-size: 1rem;
  color: #666;
  margin-bottom: 8px;
}

.product .price {
  font-weight: bold;
  color: #007bff;
  margin-bottom: 8px;
}

.product .category {
  font-style: italic;
  color: #555;
}

.button-group {
  margin-top: 10px;
  display: flex;
  justify-content: space-between;
}

.delete-btn,
.update-btn,
.add-to-cart-btn {
  background-color: transparent;
  border: none;
  padding: 0;
  cursor: pointer;
  font-size: 1rem;
  transition: color 0.3s ease;
}

.delete-btn .icon-wrapper,
.update-btn .icon-wrapper,
.add-to-cart-btn .icon-wrapper {
  display: inline-block;
  padding: 10px;
  border-radius: 50%;
}

.red-bg {
  background-color: #dc3545;
}

.green-bg {
  background-color: #218838;
}

.yellow-bg {
  background-color: #ffc107;
}

.btn:hover .icon-wrapper {
  transform: scale(1.1);
}
</style>
