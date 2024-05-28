<template>
  <nav class="navbar">
    <div class="nav-left">
      <NuxtLink to="/" class="nav-link">Home</NuxtLink>
      <NuxtLink to="/product" class="nav-link">Product</NuxtLink>
    </div>
    <div class="nav-right">
      <NuxtLink to="/signUp"><button class="btn">SignUp</button></NuxtLink>
      <NuxtLink to="/login"><button class="btn">Login</button></NuxtLink>
      <button class="btn logout">Logout</button>
    </div>
  </nav>
</template>

<script>
export default {};
</script>

<style scoped>
.navbar {
  height: 8vh;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #007bff; /* Bootstrap blue color */
  padding: 0 20px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  position: fixed;
  width: 100vw;
  z-index: 999;
}

.nav-link {
  text-decoration: none;
  color: white;
  font-size: 1rem;
  margin: 0 15px;
  transition: color 0.3s ease;
}

.nav-link:hover {
  color: #ffdd57; /* Yellow color for hover */
}

.btn {
  background-color: #28a745; /* Bootstrap green color */
  color: white;
  border: none;
  padding: 10px 20px;
  font-size: 1rem;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease, transform 0.3s ease;
}

.btn:hover {
  background-color: #218838; /* Darker green for hover */
  transform: scale(1.05);
}

.logout {
  background-color: #dc3545; /* Bootstrap red color */
}

.logout:hover {
  background-color: #c82333; /* Darker red for hover */
}

.navbar a,
.navbar button {
  font-family: "Arial", sans-serif;
}
</style>
