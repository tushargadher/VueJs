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
    <p>{{ productId }}</p>
    <!-- <p>{{ product.description }}</p> -->
    <p class="price">Price: ${{ product.price }}</p>
    <p class="category">Category: {{ product.category.name }}</p>
    <div>
      <button class="delete-btn btn" @click="deleteProduct(product.id)">
        Delete
      </button>
      <button class="update-btn btn" @click="redirectToUpdatePage(product.id)">
        Update
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
      let confrom = confirm("Delete Product?");
      if (confrom) {
        try {
          //make graphql mutation call to delete product
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
            //emit delete product so we can listen into parent
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
.product img:hover {
  cursor: pointer;
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
.delete-btn {
  background-color: #dc3545;
}
.update-btn {
  background-color: #218838;
}
.btn {
  color: white;
  border: none;
  padding: 10px 20px;
  font-size: 1rem;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease, transform 0.3s ease;
}
</style>
