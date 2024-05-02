<template>
  <nav class="navbar navbar-expand-lg bg-body-tertiary">
    <div class="container-fluid flex flex-row">
      <NuxtLink to="/">Shopping Cart</NuxtLink>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div
        class="collapse navbar-collapse border w-25"
        id="navbarSupportedContent"
      >
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <NuxtLink to="/Cart">MyCart</NuxtLink>
          </li>
          <li class="nav-item">
            <NuxtLink to="/Wishlist">Wishlist</NuxtLink>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
export default {};
</script>

<style scoped>
a {
  text-decoration: none;
  color: black;
}
</style>
