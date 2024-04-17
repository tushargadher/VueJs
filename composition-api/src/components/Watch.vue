<template>
  <div class="container">
    <h2>Replacing Watchers</h2>
    <input type="text" v-model="name" placeholder="option api" />
    <p>{{ name }}</p>
    <input type="text" v-model="fullname" placeholder="FullName" />
    <input type="text" v-model="Role" placeholder="Role" />
    <p>{{ fullname }}</p>
    <p>{{ Role }}</p>
    <input type="text" v-model="firstName" placeholder="first name reactive" />
    <input type="text" v-model="lastName" placeholder="last name reactive" />
    <input type="text" v-model="role.departmemt" placeholder="department" />
    <p>{{ firstName }}</p>
    <p>{{ lastName }}</p>
  </div>
</template>

<script>
/* eslint-disable */
import { ref, watch, reactive, toRefs } from "vue";
export default {
  name: "Watch",

  //setup is entry point for composition api
  setup() {
    let fullname = ref("");
    let Role = ref("");

    const state = reactive({
      firstName: "",
      lastName: "",
      role: {
        departmemt: "VueJs Developer",
      },
    });
    watch(
      () => state.firstName,
      (newValue, oldValue) => {
        console.log(`new Value :${newValue}`);
        console.log(`old Value :${oldValue}`);
      }
    );
    watch(
      () => state.lastName,
      (newValue, oldValue) => {
        console.log(`new Value :${newValue}`);
        console.log(`old Value :${oldValue}`);
      }
    );
    watch(
      () => state.role,
      function (newValue, oldValue) {
        console.log(`NewValue of role`, newValue);
        console.log(`oldValue of role`, oldValue);
      },
      {
        deep: true,
      }
    );
    // watch(
    //   () => {
    //     return { ...state };
    //   },
    //   function (newValue, oldValue) {
    //     console.log(`FirstName New Value`, newValue.firstName);
    //     console.log(`FirstName old Value`, oldValue.firstName);
    //     console.log(`Lastname New Value`, newValue.lastName);
    //     console.log(`Lastname old Value`, oldValue.lastName);
    //   }
    // );

    // //watch take two argument first is property and second is function
    // watch(
    //     [fullname, Role],
    //   (newValues, oldValues) => {
    //     //array of values
    //     //   console.log(newValues);
    //     //   console.log(oldValues);
    //     console.log(`newValue:${newValues[0]} oldValue:${oldValues[0]}`);
    //     console.log(`newValue:${newValues[1]} oldValue:${oldValues[1]}`);
    //   },
    //   { immediate: true }
    // );
    return {
      fullname,
      Role,
      ...toRefs(state),
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
        console.log(`newValue:${newValue}`);
        console.log(`oldValue:${oldValue}`);
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
