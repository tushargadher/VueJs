<template>
  <div class="todo-item">
    
    <p :class="{ completed: todo.completed }">{{ todo.title }}</p>
    <button @click="removeTodo" class="delete-button">Delete</button>
    <button @click="markCompleted" class="complete-button">Completed</button>
  </div>
</template>

<script>
/* eslint-disable */
export default {
  name: "Todo",
  props: ["todo"],
  methods: {
    removeTodo() {
      // Dispatching the action
      this.$store.dispatch("removeTodo", this.todo);
    },
    markCompleted() {
      //dispatching mark completed action
      this.$store.dispatch("markCompleted", this.todo);
    },
  },
};
</script>

<style scoped>
.todo-item {
  background-color: #fff;
  padding: 12px;
  border-radius: 4px;
  margin-bottom: 10px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  display: flex;
  justify-content: space-between;
  align-items: center;
}

p {
  margin: 0;
  font-size: 16px;
  color: #333;
}

.delete-button {
  background-color: #f44336;
  color: #fff;
  border: none;
  padding: 8px 12px;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.delete-button:hover {
  background-color: #d32f2f;
}
.complete-button {
  background-color: rgb(2, 182, 2);
  color: #fff;
  border: none;
  padding: 8px 12px;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.complete-button:hover {
  background-color: green;
}
.completed {
  text-decoration: line-through;
}
</style>
