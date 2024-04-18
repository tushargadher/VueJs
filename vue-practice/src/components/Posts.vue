<template>
  <div class="post-container">
    <h1 style="color: red">{{ errorMessage }}</h1>
    <div class="post" v-for="post in postData" :key="post.id">
      <h2 class="post-title">{{ post.title }}</h2>
      <p class="post-body">{{ post.body }}</p>
    </div>
    <!-- <button @click="getData">Load Posts</button> -->
  </div>
</template>

<script>
import { ref, onMounted } from "vue";
import axios from "axios";
export default {
  name: "Post",
  setup() {
    let postData = ref("");
    onMounted(() => {
      getData();
    });
    function getData() {
      axios
        .get("https://jsonplaceholder.typicode.com/posts")
        .then((res) => {
          console.log(res);
          this.postData = res.data;
        })
        .catch((err) => {
          console.log(err);
          this.errorMessage = err.message;
        });
    }
  },
  // mounted() {
  //   this.getData();
  // },
  // data() {
  //   return {
  //     postData: [],
  //     errorMessage: "",
  //   };
  // },
  // methods: {
  //   getData() {
  //     axios
  //       .get("https://jsonplaceholder.typicode.com/posts")
  //       .then((res) => {
  //         console.log(res);
  //         this.postData = res.data;
  //       })
  //       .catch((err) => {
  //         console.log(err);
  //         this.errorMessage = err.message;
  //       });
  //   },
  // },
};
</script>

<style scoped>
.post-container {
  display: flex;
  flex-wrap: wrap;
}
.post {
  background-color: #fff;
  padding: 20px;
  border-radius: 8px;
  border: 1px solid gray;
  width: 400px;
  margin: 10px;
}

.post-title {
  font-size: 24px;
  color: #333;
  margin-bottom: 10px;
}

.post-body {
  font-size: 16px;
  color: #666;
  line-height: 1.5;
}
</style>
