<!-- components/Badge.vue -->
<template>
  <div class="badge">
    <span>{{ Filter.attrLabel }}</span>
    <button @click="removeFilter(Filter.attrValue, $event)" class="close-btn">
      X
    </button>
  </div>
</template>

<script>
export default {
  name: "Badge",
  props: {
    Filter: {
      type: Object,
      required: true,
    },
  },
  methods: {
    removeFilter(attrValue) {
      this.$emit("removeFilter", { attrValue });
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
  padding: 5px 10px;
  border-radius: 12px;
  margin: 5px;
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
