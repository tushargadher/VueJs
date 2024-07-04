<template>
  <div class="skeleton-container">
    <Skeleton width="100%" height="40px" class="skeleton-header" />
    <div class="skeleton-item" v-for="index in 5" :key="index">
      <Skeleton width="20px" height="20px" circle />
      <Skeleton width="200px" height="20px" />
    </div>
  </div>
</template>

<script>
import { Skeleton } from "vue-loading-skeleton";

export default {
  name: "SkeletonLoader",
  components: {
    Skeleton,
  },
};
</script>

<style scoped>
.skeleton-container {
  padding: 20px;
  background-color: #fff;
}
.skeleton-header {
  margin-bottom: 40px;
  border-radius: 30px;
}
.skeleton-item {
  display: flex;
  align-items: center;
  margin-top: 10px;
  margin-bottom: 10px;
}
/* .skeleton-icon {
  border-radius: 100%;
  margin-right: 10px;
}
.skeleton-text {
  border-radius: 20px;
} */
</style>
