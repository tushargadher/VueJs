<template>
  <div class="card">
    <!-- <div class="card-body">{{ content }}</div> -->
    <div class="card-header">
      <slot name="header">enter header</slot>
    </div>
    <div class="card-body">
      <!-- if we dont assign name then it is default slots -->
      <slot>enter body</slot>
    </div>

    <div class="card-footer">
      <slot name="footer">enter footer</slot>
    </div>
  </div>
</template>

<script>
/* eslint-disable */
export default {
  name: "Card",
  props: {
    content: {
      type: String,
    },
  },
};
</script>

<style scoped>
.card {
  border: 1px solid #ddd;
  width: 30vw;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  padding: 16px;
  background-color: #dadada;
  margin: 10px;
}

.card-header {
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 12px;
}

.card-body {
  font-size: 16px;
  color: #333;
}
.card-footer {
  font-size: 12px;
  color: #333;
}
</style>
