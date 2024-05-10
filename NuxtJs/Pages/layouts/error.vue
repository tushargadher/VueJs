<!-- layouts/ErrorPage.vue -->

<template>
  <div class="error-container">
    <div class="error-content">
      <h1 class="error-title">{{ errorCode }} Page Not Found</h1>
      <p class="error-message">{{ errorMessage }}</p>
      <router-link to="/" class="back-link">Go back to home</router-link>
    </div>
  </div>
</template>

<script>
export default {
  layout: "errorLayout",
  props: {
    error: {
      type: Object,
      default: null,
    },
  },
  computed: {
    errorMessage() {
      if (this.error && this.error.message) {
        return this.error.message;
      }
      return "The page you are looking for does not exist.";
    },
    errorCode() {
      if (this.error && this.error.statusCode) {
        return this.error.statusCode;
      }
      return "Code not Found";
    },
  },
};
</script>

<style scoped>
/* Add custom styles for the error page */
.error-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #f8f9fa;
}

.error-content {
  text-align: center;
}

.error-title {
  font-size: 4rem;
  color: #dc3545;
  margin-bottom: 1rem;
}

.error-message {
  font-size: 2rem;
  color: #333;
  margin-bottom: 2rem;
}

.back-link {
  font-size: 1.2rem;
  color: #007bff;
  text-decoration: none;
  transition: color 0.3s ease;
}

.back-link:hover {
  color: #0056b3;
}
</style>
