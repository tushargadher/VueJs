<template>
  <div class="skeleton-container">
    <div v-for="index in count" :key="index" class="skeleton-product">
      <Skeleton width="100%" height="300px" />
      <div class="skeleton-details">
        <div class="skeleton-icons">
          <Skeleton width="40px" height="40px" class="margin" />
          <Skeleton width="40px" height="40px" class="margin" />
          <Skeleton width="40px" height="40px" class="margin" />
          <Skeleton width="40px" height="40px" class="margin" />
        </div>
        <Skeleton width="100%" height="20px" style="margin-bottom: 10px" />
        <Skeleton width="100%" height="10px" style="margin-bottom: 10px" />
        <Skeleton width="100%" height="10px" style="margin-bottom: 10px" />
        <Skeleton width="100%" height="10px" />
      </div>
    </div>
  </div>
</template>

<script>
import { Skeleton } from "vue-loading-skeleton";

export default {
  props: {
    count: {
      type: Number,
      default: 1,
    },
  },
  components: {
    Skeleton,
  },
};
</script>

<style scoped>
.skeleton-container {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
}

.skeleton-product {
  padding: 20px;
  width: 33%;
}

.skeleton-details {
  margin-top: 10px;
}

.skeleton-icons {
  display: flex;
  justify-content: flex-start;
  margin-bottom: 10px;
}
.margin {
  margin-right: 5px;
}
</style>
