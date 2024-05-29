<template>
  <div class="loader"></div>
</template>

<script>
export default {
  name: "Loader",
};
</script>

<style scoped>
.loader {
  border: 3px solid #ffffff; /* Light grey */
  border-top: 3px solid #1f10f5; /* Blue */
  border-radius: 50%;
  width: 20px; /* Adjusted to a more standard size */
  height: 20px; /* Adjusted to a more standard size */
  animation: spin 1s linear infinite;
}

@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>
