<template>
  <div class="container">
    <h2>Replacing Watchers</h2>
    <input type="text" v-model="name" placeholder="option api" />
    <p>{{ name }}</p>
    <input type="text" v-model="fullname" placeholder="FullName" />
    <input type="text" v-model="Role" placeholder="Role" />
    <p>{{ fullname }}</p>
    <p>{{ Role }}</p>
  </div>
</template>

<script>
/* eslint-disable */
import { ref, watch } from "vue";
export default {
  name: "Watch",

  setup() {
    let fullname = ref("");
    let Role = ref("");
    //watch take two argument first is property and second is function
    watch([fullname, Role], (newValues, oldVaules) => {
      //array of values
      //   console.log(newValues);
      //   console.log(oldVaules);
      console.log(`newVaule:${newValues[0]} oldVaule:${oldVaules[0]}`);
      console.log(`newVaule:${newValues[1]} oldVaule:${oldVaules[1]}`);
    });
    return {
      fullname,
      Role,
    };
  },

  data() {
    return {
      name: "",
    };
  },
  watch: {
    name: {
      handler(newValue, oldValue) {
        console.log(`newVaule:${newValue}`);
        console.log(`oldVaule:${oldValue}`);
      },
    },
  },
};
</script>

<style scoped>
.container {
  border: 1px solid black;
  margin-top: 20px;
}
</style>
