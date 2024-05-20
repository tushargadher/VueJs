<template>
  <h1>Authentication using auth module</h1>
</template>

<script>
export default {
  name: "IndexPage",
  middleware: "user-auth",
  head() {
    return {
      title: "Auth Module",
    };
  },
};
</script>
