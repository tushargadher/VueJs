<template>
  <div class="popup">
    <h3>{{ title }}</h3>

    <!-- here we are sending closepopup event to parent using the $emit -->
    <CustomButton buttonTitle="Close" @clicked="$emit('closepopup')" />
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
.popup {
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
