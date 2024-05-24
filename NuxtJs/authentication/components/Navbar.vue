<template>
  <nav class="navbar">
    <div class="navbar-menu">
      <div class="navbar-start">
        <nuxt-link to="/" class="navbar-link">Home</nuxt-link>
        <nuxt-link to="/about" class="navbar-link">About</nuxt-link>
      </div>

      <div class="navbar-end">
        <div v-if="$auth.loggedIn" class="navbar-item-container">
          <span class="navbar-item">{{ $auth.user.email }}</span>
          <span class="navbar-item"
            ><img
              :src="$auth.user.avatar"
              alt="userprofile"
              @error="setDefaultAvatar"
              class="userprofile"
          /></span>
          <button class="button is-danger" @click="handleLogout">Logout</button>
        </div>
        <div v-else class="navbar-item-container">
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
    setDefaultAvatar(e) {
      e.target.src = "https://freesvg.org/img/abstract-user-flat-4.png";
    },
    handleLogout() {
      let conform = confirm("Are you sure?");
      if (conform) {
        this.$auth.logout();
      }
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
.navbar-item-container {
  display: flex;
  align-items: center;
}
.navbar-menu {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.userprofile {
  width: 35px;
  margin: 0px 10px;
  border-radius: 100%;
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
