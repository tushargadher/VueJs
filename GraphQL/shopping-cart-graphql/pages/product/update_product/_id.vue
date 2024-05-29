<template>
  <div class="container">
    <div v-if="loading" class="loading-indicator">Please Wait...</div>
    <div v-else class="update-product-container">
      <h1>Update Product</h1>

      <form class="update-product-form" @submit.prevent="updateProduct">
        <div class="form-group">
          <label for="title">Title:</label>
          <input
            type="text"
            id="title"
            name="title"
            v-model="product.title"
            required
          />
        </div>
        <div class="form-group">
          <label for="price">Price:</label>
          <input
            type="number"
            id="price"
            name="price"
            v-model="product.price"
            required
          />
        </div>
        <div class="form-group">
          <label for="description">Description:</label>
          <textarea
            id="description"
            name="description"
            v-model="product.description"
            required
          ></textarea>
        </div>
        <div class="form-group">
          <label>Images:</label>
          <div class="images-urls">
            <div v-for="(image, index) in product.images" :key="index">
              <input
                type="url"
                v-model="product.images[index]"
                placeholder="Image URL"
                required
              />
            </div>
          </div>
        </div>
        <button type="submit">Update Product</button>
      </form>
    </div>
  </div>
</template>

<script>
import gql from "graphql-tag";
export default {
  data() {
    return {
      product: {},
      loading: true,
    };
  },
  async mounted() {
    await this.getProductData();
  },
  methods: {
    // get product details functions

    async getProductData() {
      try {
        const response = await this.$apollo.query({
          query: gql`
            query getProduct($id: ID!) {
              product(id: $id) {
                id
                title
                price
                description
                images
              }
            }
          `,
          variables: {
            id: this.$route.params.id,
          },
        });
        console.log(response.data.product);
        this.product = response.data.product;
      } catch (error) {
        console.log(`Error while fetching product data ${error}`);
      } finally {
        this.loading = false;
      }
    },

    //update product function
    async updateProduct() {
      this.loading = true;
      const price = parseFloat(this.product.price);
      try {
        const response = await this.$apollo.mutate({
          mutation: gql`
            mutation updateProduct(
              $id: ID!
              $title: String!
              $price: Float!
              $description: String!
              $images: [String!]!
            ) {
              updateProduct(
                id: $id
                changes: {
                  title: $title
                  price: $price
                  description: $description
                  images: $images
                }
              ) {
                id
                title
                price
                description
                images
              }
            }
          `,
          variables: {
            // Corrected spelling
            id: this.$route.params.id,
            title: this.product.title,
            price: price,
            description: this.product.description,
            images: this.product.images,
          },
        });
        if (response) {
          this.loading = false;
          alert("Product Upated");
          this.$router.push("/product");
        }
      } catch (error) {
        this.loading = false;
        console.error(`Error while updating product ${error}`);
      }
    },
  },
};
</script>

<style scoped>
.update-product-container {
  width: 50%;
  margin: 0 auto;
  padding: 20px;
  background: #fff;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.update-product-container h1 {
  text-align: center;
  color: #333;
  margin-bottom: 20px;
}

.update-product-form {
  display: flex;
  flex-direction: column;
}

.form-group {
  margin-bottom: 20px;
}

.form-group label {
  display: block;
  margin-bottom: 5px;
  font-weight: bold;
  color: #555;
}

.form-group input,
.form-group textarea {
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
}

.form-group textarea {
  resize: vertical;
  height: 100px;
}

.images-urls {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.images-preview img {
  max-width: 100px;
  border-radius: 4px;
}

button {
  padding: 10px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 16px;
  transition: background-color 0.3s ease;
}

button:hover {
  background-color: #0056b3;
}
</style>
