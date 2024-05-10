<template>
  <div>
    <h1>
      {{ message }}
    </h1>
  </div>
</template>

<script>
export default {
  props: {
    message: {
      type: String,
      required: true,
    },
  },
};
</script>

<style lang="scss" scoped></style>
