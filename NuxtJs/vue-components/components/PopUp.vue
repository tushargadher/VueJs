<template>
  <div class="container">
    <div class="popup">
      <h3>{{ title }}</h3>

      <!-- here we are sending closepopup event to parent using the $emit -->
      <CustomButton buttonTitle="Close" @clicked="$emit('closepopup')" />
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: "Default Message",
    },
  },
};
</script>

<style scoped>
.container {
  height: 100vh;
  widows: 100vw;
}
.popup {
  display: absolute;
  border: 1px solid gray;
  height: 30%;
  width: 30%;
  border-radius: 10px;
  background-color: rgb(200, 248, 200);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
</style>
