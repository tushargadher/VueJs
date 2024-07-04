<template>
  <div class="category-list">
    <div
      v-for="category in categories"
      :key="category.name"
      class="category-item"
      @click="navigateToCategory(category.slug)"
    >
      {{ category.name }}
    </div>
  </div>
</template>

<script>
export default {
  name: "BedroomCategories",
  data() {
    return {
      categories: [
        { name: "Bedroom Sets", slug: "bedroom-sets" },
        { name: "Beds", slug: "beds" },
        { name: "Nightstands", slug: "nightstands" },
        { name: "Dressers", slug: "dressers" },
        { name: "Dresser Mirrors", slug: "dresser-mirrors" },
        { name: "Chests", slug: "chests" },
        { name: "Bedroom Benches", slug: "bedroom-benches" },
        { name: "Bed Frames & Headboards", slug: "bed-frames-headboards" },
        { name: "Armoires and Wardrobes", slug: "armoires-wardrobes" },
        { name: "Bedroom Vanities", slug: "bedroom-vanities" },
        { name: "Media Chests", slug: "media-chests" },
        { name: "Jewelry Armoires", slug: "jewelry-armoires" },
        { name: "Day Beds and Futons", slug: "day-beds-futons" },
        { name: "Kids Room", slug: "kids-room" },
        { name: "Mattresses", slug: "mattresses" },
        { name: "Box Springs & Foundations", slug: "box-springs-foundations" },
        { name: "Adjustable Beds", slug: "adjustable-beds" },
        { name: "Pillows", slug: "pillows" },
        { name: "Bedding and Comforter Sets", slug: "bedding-comforter-sets" },
      ],
    };
  },
  computed: {
    fullPath() {
      return this.$route.path.replace(/^\//, "");
    },
  },
  methods: {
    navigateToCategory(slug) {
      this.$router.push({ path: `/${this.fullPath}/${slug}` });
    },
  },
};
</script>

<style scoped>
.category-list {
  display: flex;
  flex-direction: column;
}

.category-item {
  margin: 10px 0;
  cursor: pointer;
  color: blue;
}
</style>
