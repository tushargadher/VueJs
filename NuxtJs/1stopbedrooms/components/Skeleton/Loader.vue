<template>
  <div>
    <Skeleton :width="width" :height="height" v-if="loading" />
  </div>
</template>

<script>
import { Skeleton } from "vue-loading-skeleton";
import { mapState } from "vuex";
export default {
  components: {
    Skeleton,
  },
  props: {
    width: String,
    height: String,
  },
  computed: {
    ...mapState(["loading"]),
  },
};
</script>

<style lang="scss" scoped></style>
