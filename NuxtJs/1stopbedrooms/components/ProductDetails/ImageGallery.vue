<template>
  <div class="image-slider">
    <div class="main-image-container">
      <img :src="mainImages[currentIndex]?.src" class="main-image" />
    </div>
    <div class="image-slider-container">
      <i class="fa-solid fa-chevron-left" @click="handlePrev"></i>
      <div class="thumbnail-container">
        <img
          v-for="(thumbnail, index) in thumbnails"
          :key="index"
          :src="thumbnail.src"
          class="thumbnail"
          :class="{ active: index === currentIndex }"
          @click="currentIndex = index"
          ref="thumbnails"
        />
      </div>
      <i class="fa-solid fa-angle-right" @click="handleNext"></i>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    mainImages: {
      type: [Array, Object],
      required: true,
    },
    thumbnails: {
      type: [Array, Object],
      required: true,
    },
  },
  data() {
    return {
      currentIndex: 0,
    };
  },
  watch: {
    currentIndex() {
      this.scrollToActiveThumbnail();
    },
  },
  methods: {
    handleNext() {
      if (this.currentIndex < this.thumbnails.length - 1) {
        this.currentIndex += 1;
      }
    },
    handlePrev() {
      if (this.currentIndex > 0) {
        this.currentIndex -= 1;
      }
    },
    scrollToActiveThumbnail() {
      const thumbnail = this.$refs.thumbnails[this.currentIndex];
      if (thumbnail) {
        thumbnail.scrollIntoView({ behavior: "smooth", block: "nearest" });
      }
    },
  },
};
</script>
<style scoped>
.image-slider {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px;
}

.main-image-container {
  width: 100%;
  /* border: 1px solid black; */
  background-color: #f8f8f8;
}

.main-image {
  height: 90vh;
  width: 100%;
  object-fit: scale-down;
}

.image-slider-container {
  margin-top: 20px;
  width: 100%;
  /* border: 1px solid black; */
  display: flex;
  align-items: center;
  justify-content: center;
}
.thumbnail-container {
  /* border: 1px solid black; */
  width: 70%;
  display: flex;
  overflow-x: scroll;
  padding: 10px 0px;
  margin: 0px 10px;
}
.thumbnail-container::-webkit-scrollbar {
  display: none;
}

.thumbnail {
  width: 60px;
  height: auto;
  margin: 0 5px;
  cursor: pointer;
}

.thumbnail.active {
  border: 3px solid #0e259a;
}
.fa-solid {
  color: #0e259a;
  font-size: 1.5rem;
  font-weight: bold;
}
.fa-solid:hover {
  cursor: pointer;
}
</style>
