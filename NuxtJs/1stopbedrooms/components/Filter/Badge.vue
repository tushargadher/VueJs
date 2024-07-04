<template>
  <div class="badge">
    <span>{{ Filter.attrLabel }}</span>
    <button @click="removeBadge" class="close-btn">X</button>
  </div>
</template>

<script>
import { mapActions } from "vuex";

export default {
  name: "Badge",
  props: {
    Filter: {
      type: Object,
      required: true,
    },
  },

  methods: {
    ...mapActions(["handleRemoveBadge"]),
    removeBadge() {
      const { attrCode, attrValue } = this.Filter;
      this.handleRemoveBadge({
        attrCode,
        attrValue,
        route: this.$route,
        router: this.$router,
      });
    },
  },
};
</script>

<style scoped>
.badge {
  display: inline-flex;
  align-items: center;
  background-color: #efefef;
  color: black;
  padding: 8px 10px;
  border-radius: 15px;
  margin: 5px 10px 5px 0px;
  box-sizing: border-box;
}
.close-btn {
  background: none;
  border: none;
  color: black;
  font-size: 14px;
  margin-left: 10px;
  cursor: pointer;
}
</style>
