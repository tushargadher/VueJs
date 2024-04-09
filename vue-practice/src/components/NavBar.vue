<template>
  <nav>
    <ul class="nav-links">
      <li>
        <router-link to="/">Home</router-link>
      </li>
      <li>
        <router-link to="/watcher">Watcher</router-link>
      </li>
      <li>
        <router-link to="/user">Users</router-link>
      </li>
      <li>
        <router-link to="/binding">Binding</router-link>
      </li>
    </ul>
  </nav>
</template>
<script>
export default {
  name: "NavBar",
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
  color: #fff;
  text-decoration: none;
  transition: color 0.3s ease;
}

.nav-links li a:hover {
  color: #f5f5f5;
}
</style>
