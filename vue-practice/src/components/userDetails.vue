<template>
  <div>
    <!-- prop name -->
    <h1 :class="isFriend ? 'green' : 'red'">
      {{ number }} {{ userName }} {{ lastName }}
    </h1>
  </div>
</template>
<style scoped></style>
<script>
export default {
  name: "userDetail",
  // props: ["userName", "lastName", "isFriend"],
  props: {
    userName: String,
    lastName: String,
    isFriend: {
      type: Boolean,
      required: true,
    },
    number: {
      type: Number,
      required: true,
      default: 4,
    },
  },
  // data() {
  //   return {
  //     friend: "green",
  //     enemy: "red",
  //   };
  // },
};
</script>
<style scoped>
.green {
  color: green;
}
.red {
  color: red;
}
</style>
