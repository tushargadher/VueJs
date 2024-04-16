<template>
  <div class="container">
    <div class="model">
      <slot name="heading"></slot>

      <slot name="body"></slot>

      <button @click="$emit('closepopup')">Close</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "popup-model",
};
</script>

<style scoped>
.container {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.3);

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
}
.model {
  background-color: white;
  border: 1px solid black;
  border-radius: 10px;
  height: 50%;
  width: 30%;
  margin: 20px;
  border: 1px solid black;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  padding: 10px;
}
</style>
