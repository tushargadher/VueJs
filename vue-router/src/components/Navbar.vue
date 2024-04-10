<template>
  <nav>
    <ul class="nav-links">
      <li>
        <router-link to="/">Home</router-link>
      </li>
      <li>
        <router-link to="/about">About</router-link>
      </li>
      <li>
        <router-link :to="{ name: 'Job' }">Job</router-link>
      </li>
      <button v-on:click="goback">GO BACk</button>
      <button v-on:click="redirect">Redirect</button>
      <button v-on:click="goForward">GO FORWARD</button>
    </ul>
  </nav>
</template>
<script>
export default {
  name: "NavBar",
  methods: {
    goback() {
      this.$router.go(-1);
    },
    redirect() {
      this.$router.push("/");
    },
    goForward() {
      this.$router.go(1);
    },
  },
};
</script>
<style scoped>
nav {
  background-color: #333;
  height: 5vh;
  color: #fff;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;
}

.nav-links {
  list-style: none;
  padding: 0;
  display: flex;
}

.nav-links li {
  margin-right: 15px;
}

.nav-links li a {
  padding-bottom: 5px;
  color: #fff;
  text-decoration: none;
  transition: color 0.3s ease;
}

.nav-links li a:hover {
  color: #f5f5f5;
}
/* this below class added by vue to currect active link */
.router-link-exact-active {
  border-bottom: 2px solid white;
}
</style>
