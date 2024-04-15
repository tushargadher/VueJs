<template>
  <div class="container">
    <p>This is Child Popup component {{ name }}</p>
    <input
      type=""
      v-model="message"
      placeholder="enter message for parent-component"
    />
    <!-- here we are emiting closepopup event to parent component using $emit -->
    <!-- $emit take two argument first is event and second is data -->
    <button @click="$emit('closepopup', message)">Close PopUp</button>
  </div>
</template>

<script>
export default {
  name: "ChildComponent",
  inject: ["name"],
  //emits is array of event that passes to the parent component
  // emits: ["closepopup"],
  // validating emited event
  emits: {
    // key and pair
    // key is name of custom event and pair is validation function
    closepopup: (message) => {
      if (!message) {
        return false;
      } else {
        return true;
      }
    },
  },
  data() {
    return {
      message: "",
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
