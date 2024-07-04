<template>
  <a :href="url" target="_blank">More options</a>
</template>

<script>
export default {
  name: "ProductLink",
  props: {
    url: {
      type: String,
      required: true,
    },
  },
};
</script>
<style scoped>
a {
  text-decoration: none;
  color: #666;
}
</style>
