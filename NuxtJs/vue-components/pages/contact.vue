<template>
  <div class="container">
    <!-- emiting custom evet to button component -->
    <CustomButton buttonTitle="Open Model" @clicked="handleOpen" />
    <PopUp
      title="click on close buttton to close popup"
      v-show="isVisible"
      @closepopup="handleClose"
    />
  </div>
</template>

<script>
export default {
  data() {
    return {
      isVisible: false,
    };
  },
  methods: {
    handleOpen() {
      console.log("Handle popup is called");
      this.isVisible = true;
    },
    handleClose() {
      this.isVisible = false;
    },
  },
};
</script>

<style scoped>
.container {
  background-color: rgb(233, 232, 232);
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
}
</style>
