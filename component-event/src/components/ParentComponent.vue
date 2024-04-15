<template>
  <div class="container">
    <p>this is parent component {{ myname }}</p>
    <button @click="handlePopUp">Open popup</button>
    <p>{{ message }}</p>
    <!-- in parent component we need to listen that event using event binding,and this event is custom event not dom event -->
    <ChildComponent v-show="showpopup" @closepopup="hidepop" />
  </div>
</template>

<script>
import ChildComponent from "./ChildComponent.vue";
export default {
  name: "ParentComponent",
  components: {
    ChildComponent,
  },
  data() {
    return {
      myname: "Vuejs",
      showpopup: false,
      message: "",
    };
  },
  methods: {
    handlePopUp() {
      this.showpopup = true;
    },
    //that function will take child data that is passed in custome event
    hidepop(message) {
      this.showpopup = false;
      this.message = message;
    },
  },
  provide() {
    return {
      name: this.myname,
    };
  },
};
</script>

<style scoped>
.container {
  border: 1px solid black;
  padding: 10px;
}
</style>
