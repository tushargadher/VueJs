<template>
  <div class="product-images" @click="handleClick">
    <img :src="src" :alt="src" class="main-image" />
    <img :src="hoverImage" :alt="hoverImage" class="hover-image" />
  </div>
</template>

<script>
export default {
  props: {
    src: {
      type: [Object, String],
      required: true,
    },
    hoverImage: {
      type: [Object, String],
    },
  },
  methods: {
    handleClick() {
      this.$emit("clicked");
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
