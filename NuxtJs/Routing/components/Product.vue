<template>
  <v-card class="mx-auto" max-width="300">
    <v-img
      class="align-end text-white"
      height="300"
      :src="product.images[0]"
      @click="handleNavigate(product.id)"
    >
    </v-img>
    <div>
      <v-card-title>{{ product.title }}</v-card-title>
      <v-card-subtitle class="pt-4"> $ {{ product.price }} </v-card-subtitle>
    </div>

    <v-card-text>
      <p>{{ product.description }}</p>
    </v-card-text>
  </v-card>
</template>
<script>
export default {
  props: {
    product: {
      type: Object,
      required: true,
    },
  },
  methods: {
    handleNavigate(productId) {
      // Use Nuxt.js router to navigate to a new route
      // hardcord url
      this.$router.push(`/product/${productId}`);

      //named routes
      // this.$router.push({ name: "product-details", params: { id: productId } });
    },
  },
};
</script>
<!-- {
    "id": 29,
    "title": "Mid-Century Modern Wooden Dining Table",
    "price": 24,
    "description": "Elevate your dining room with this sleek Mid-Century Modern dining table, featuring an elegant walnut finish and tapered legs for a timeless aesthetic. Its sturdy wood construction and minimalist design make it a versatile piece that fits with a variety of decor styles. Perfect for intimate dinners or as a stylish spot for your morning coffee.",
    "images": [
      "https://i.imgur.com/DMQHGA0.jpeg",
      "https://i.imgur.com/qrs9QBg.jpeg",
      "https://i.imgur.com/XVp8T1I.jpeg"
    ],
    "creationAt": "2024-05-08T23:42:10.000Z",
    "updatedAt": "2024-05-08T23:42:10.000Z",
    "category": {
      "id": 3,
      "name": "Furniture",
      "image": "https://i.imgur.com/Qphac99.jpeg",
      "creationAt": "2024-05-08T23:42:10.000Z",
      "updatedAt": "2024-05-08T23:42:10.000Z"
    }
  }, -->
