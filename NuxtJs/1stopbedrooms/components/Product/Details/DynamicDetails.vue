<template>
  <div class="image-gallery">
    <img
      v-for="item in details.items"
      :key="item.webId"
      :src="item.image"
      alt="Thumbnail"
      class="thumbnail"
    />
  </div>
</template>

<script>
export default {
  props: {
    details: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style scoped>
.image-gallery {
  display: flex;
  gap: 10px;
}

.thumbnail {
  width: 35px;
  height: auto;
  border-radius: 4px;
  cursor: pointer;
}
</style>
