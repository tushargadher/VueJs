<template>
  <div class="product-name-brand">
    <p class="product-name">
      <span class="name">{{ name }}</span>
      <span class="web-id"
        >Web ID: <span class="web-id-text">{{ webId }}</span></span
      >
    </p>
    <p class="brand-name">By {{ brandName }}</p>
  </div>
</template>

<script>
export default {
  name: "ProductNameBrand",
  props: {
    name: {
      type: String,
      required: true,
    },
    webId: {
      type: String,
      required: true,
    },
    brandName: {
      type: String,
      required: true,
    },
  },
};
</script>

<style scoped>
.product-name-brand {
  position: relative;
}

.product-name {
  position: relative;
  cursor: pointer;
}

.product-name .web-id {
  display: none;
  font-size: 0.9rem;
  color: #555;
}

.brand-name {
  font-size: 0.9rem;
  color: #666;
}

.product-name:hover .name {
  text-decoration: underline;
}

.product-name:hover .web-id {
  display: block;
}

.product-name:hover ~ .brand-name {
  display: none;
}

.web-id {
  font-size: 0.9rem;
}
.web-id-text {
  font-weight: bold;
  color: black;
}
</style>
