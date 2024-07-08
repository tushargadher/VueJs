<template>
  <div class="product-images" @click="handleClick">
    <img :src="mainImage?.src" :alt="mainImage?.alt" class="main-image" />
    <img :src="hoverImage?.src" :alt="hoverImage?.alt" class="hover-image" />
  </div>
</template>

<script>
export default {
  props: {
    mainImage: {
      type: Object,
      require: true,
    },
    hoverImage: {
      type: Object,
    },
    slug: {
      type: String,
      require: true,
    },
  },
  methods: {
    handleClick() {
      alert(`${this.slug}`);
    },
  },
};
</script>

<style scoped>
.product-images {
  display: flex;
  justify-content: center;
  position: relative;
}

.main-image {
  width: 100%;
}

.hover-image {
  width: 100%;
  position: absolute;
  top: 0;
  opacity: 0;
  transition: opacity 0.3s;
}

.product-images:hover .hover-image {
  cursor: pointer;
  opacity: 1;
}
</style>
