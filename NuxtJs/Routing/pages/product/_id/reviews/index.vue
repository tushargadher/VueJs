<template>
  <div>
    <v-container>
      <v-row>
        <v-col cols="12">
          <!-- <h2>Reviews for Product {{ product.title }}</h2> -->
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="12">
          <v-card v-for="(review, index) in reviews" :key="index">
            <v-card-title>{{ review.title }}</v-card-title>
            <v-card-text>{{ review.text }}</v-card-text>
            <v-card-actions>
              <v-btn text color="primary" @click="deleteReview(review.id)">
                Delete
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="12">
          <v-form ref="form" v-model="valid">
            <v-text-field
              v-model="newReview.title"
              label="Title"
              :rules="[(v) => !!v || 'Title is required']"
              required
            ></v-text-field>
            <v-textarea
              v-model="newReview.text"
              label="Review"
              :rules="[(v) => !!v || 'Review is required']"
              required
            ></v-textarea>
            <v-btn color="success" @click="submitReview"> Submit Review </v-btn>
          </v-form>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import products from "../../../../static/products";

export default {
  name: "product-id",
  data() {
    return {
      reviews: [
        {
          id: 1,
          title: "Great product!",
          text: "I love this product, it is exactly what I was looking for.",
        },
      ],
      newReview: {
        title: "",
        text: "",
      },
      valid: false,
    };
  },
  computed: {
    product() {
      return products.find((product) => product.id === this.$route.params.id);
    },
  },
  methods: {
    submitReview() {
      this.reviews.push({
        id: this.reviews.length + 1,
        title: this.newReview.title,
        text: this.newReview.text,
      });
      this.newReview = {
        title: "",
        text: "",
      };
      this.$refs.form.resetValidation();
    },
    deleteReview(reviewId) {
      this.reviews = this.reviews.filter((review) => review.id !== reviewId);
    },
  },
};
</script>
