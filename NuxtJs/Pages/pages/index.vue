<template>
  <div>
    <h1>This is index page</h1>
    <p>{{ message }}</p>
  </div>
</template>

<script>
export default {
  name: "IndexPage",
  middleware: "auth",
  // Anonymous middleware
  middleware() {
    console.log("anonymous middleware");
  },
  // pre-populate your Vue.js component with that data before rendering it on the server side.
  asyncData() {
    return {
      message: "API Data or anythings else",
    };
  },
  head() {
    return {
      title: "Home Page",
      meta: [
        {
          hid: "description",
          name: "description",
          content: "This is description of home page",
        },
      ],
    };
  },
};
</script>
