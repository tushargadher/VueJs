<template>
  <div class="overlay">
    <div class="loader-container">
      <div class="loader"></div>
      <p>Please wait...</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "Loader",
};
</script>

<style scoped>
.overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(255, 255, 255, 0.8);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 99;
}

.loader-container {
  display: flex;
  align-items: center;
}

.loader {
  border: 4px solid #ffffff;
  border-top: 4px solid #1f10f5;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  animation: spin 1s linear infinite;
}

.loader-container p {
  margin-left: 10px;
  font-size: 18px;
  color: #1f10f5;
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
