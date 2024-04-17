<template>
  <div>
    <h1>Composition API</h1>
    <p v-bind="$attrs">{{ message }}</p>
    <p>{{ name }}</p>
    <b>{{ state.firstName }} </b>
    <b>{{ state.lastName }}</b>
  </div>
</template>

<script>
import { ref, reactive } from "vue";
export default {
  name: "HelloWorld",
  inheritAttrs: false,
  setup() {
    const message = ref("Hello this is composition api example");
    //when we store value in lat and const vue does not know how to react when vaule is change
    // let name = "React Js";
    //in other hand ref , vue know that value is change and update where it is used
    let name = ref("React Js");
    setTimeout(() => {
      name.value = "Vuejs";
    }, 2000);
    message.value = "Message value is changed";
    // console.log(message);
    const state = reactive({
      firstName: "Tushar",
      lastName: "Gadher",
    });
    setTimeout(() => {
      state.firstName = "Anil";
    }, 2000);

    return {
      message,
      name,
      state,
    };
  },

  //data function internaly uses reactive function
  data() {
    return {};
  },
};
</script>

<style scoped></style>
