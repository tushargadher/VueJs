<template>
  <div>
    <div @click="toggleDropdown" class="dropdown-header">
      <p class="title">{{ title }}</p>
      <button class="toggle-button">{{ isOpen ? "▲" : "▼" }}</button>
    </div>
    <div v-show="isOpen" class="dropdown-content">
      <div v-if="isHtml" v-html="data"></div>
      <div v-else>
        <table>
          <tr v-for="item in data" :key="item.value">
            <td style="font-weight: bold">{{ item.name }}:</td>
            <td>{{ item.value }}</td>
          </tr>
        </table>
      </div>
      <a href="#">Read More</a>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    data: {
      type: [String, Object, Array],
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      isOpen: false,
    };
  },
  computed: {
    isHtml() {
      return typeof this.data === "string";
    },
  },
  methods: {
    toggleDropdown() {
      this.isOpen = !this.isOpen;
    },
  },
};
</script>

<style scoped>
.dropdown-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
  border-bottom: 1px solid #ccc;
  padding: 10px;
}

.toggle-button {
  background: none;
  border: none;
  font-size: 16px;
  cursor: pointer;
}

.title {
  font-weight: bold;
  font-size: 1rem;
}
.dropdown-content {
  padding: 10px;
  border-top: none;
}

ul {
  list-style: none;
  padding: 0;
}

ul li {
  margin: 5px 0;
}

ul li::before {
  content: "•";
  margin-right: 5px;
  color: #000;
}

a {
  color: blue;
  text-decoration: none;
}
table {
  width: 100%;
  border-collapse: collapse;
}

td {
  padding: 10px;
  border-bottom: 1px solid #dfdddd;
}
</style>
