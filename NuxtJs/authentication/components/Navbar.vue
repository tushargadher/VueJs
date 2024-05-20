<template>
  <nav class="navbar">
    <div class="navbar-menu">
      <div class="navbar-start">
        <nuxt-link to="/" class="navbar-link">Home</nuxt-link>
        <nuxt-link to="/about" class="navbar-link">About</nuxt-link>
      </div>

      <div class="navbar-end">
        <div v-if="$auth.loggedIn" class="navbar-item">
          <span class="navbar-item">{{ user?.email }}</span>
          <button @click="logout" class="button is-danger">Logout</button>
        </div>
        <div v-else class="navbar-item">
          <nuxt-link to="/login" class="button is-primary">Login</nuxt-link>
          <nuxt-link to="/register" class="button is-primary"
            >Register</nuxt-link
          >
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      //   username: "",
    };
  },
  methods: {
    logout() {
      // Implement logout functionality here
    },
  },
};
</script>

<style scoped>
.navbar {
  background-color: #ffffff;
  padding: 1rem;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.navbar-menu {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.navbar-start,
.navbar-end {
  display: flex;
  align-items: center;
}

.navbar-link {
  margin-right: 1rem;
  text-decoration: none;
  color: #333;
}

.button {
  cursor: pointer;
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 4px;
}

.button.is-primary {
  background-color: #007bff;
  color: #fff;
}

.button.is-danger {
  background-color: #dc3545;
  color: #fff;
}
a {
  text-decoration: none;
}
</style>
