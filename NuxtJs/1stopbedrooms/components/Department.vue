<template>
  <div class="department-list">
    <div
      v-for="department in departments"
      :key="department.name"
      class="department-item"
      @click="navigateToDepartment(department.slug)"
    >
      {{ department.name }}
    </div>
  </div>
</template>

<script>
export default {
  name: "Department",
  data() {
    return {
      departments: [
        { name: "Bedroom", slug: "bedroom" },
        { name: "Living Room", slug: "living-room" },
        { name: "Dining & Kitchen", slug: "dining-kitchen" },
        { name: "Office", slug: "office" },
        { name: "Bar & Game Room", slug: "bar-game-room" },
        { name: "Decor", slug: "decor" },
        { name: "Outdoor", slug: "outdoor" },
        { name: "Mattresses", slug: "mattresses" },
        { name: "Lighting", slug: "lighting" },
      ],
    };
  },
  methods: {
    navigateToDepartment(slug) {
      this.$router.push({ path: `/${slug}` });
    },
  },
};
</script>

<style scoped>
.department-list {
  display: flex;
  flex-direction: column;
}

.department-item {
  margin: 10px 0;
  cursor: pointer;
  color: blue;
}
</style>
