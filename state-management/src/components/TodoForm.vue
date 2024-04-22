<template>
  <div class="todo-form">
    <input
      type="text"
      placeholder="Enter Task"
      v-model="newTodoItem"
      class="input-field"
    />
    <button @click="addTodo" class="add-button">ADD</button>
  </div>
</template>

<script>
export default {
  name: "TodoForm",
  data() {
    return {
      newTodoItem: "",
    };
  },
  methods: {
    addTodo() {
      this.$store.dispatch("addNewTodo", this.newTodoItem);
      this.newTodoItem = "";
    },
  },
};
</script>

<style scoped>
.todo-form {
  display: flex;
  justify-content: center; /* Center items horizontally */
  align-items: center; /* Center items vertically */
  margin-bottom: 20px;
}

.input-field {
  flex: 1;
  padding: 10px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 4px;
}

.add-button {
  background-color: #007bff;
  color: #fff;
  border: none;
  padding: 10px 20px;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.add-button:hover {
  background-color: #0056b3;
}
</style>
