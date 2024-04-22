<template>
  <div class="todo-list">
    <h1>Todos</h1>
    <h3>Completed : {{ $store.getters.completedTodos }}</h3>
    <h3>Pending : {{ $store.getters.pendingTodos }}</h3>
    <template v-for="(todo, index) in todos" :key="index">
      <Todo :todo="todo" :index="index" />
    </template>
  </div>
</template>

<script>
import Todo from "./Todo.vue";

export default {
  name: "TodoList",
  components: {
    Todo,
  },
  computed: {
    todos() {
      return this.$store.state.todos;
    },
  },
};
</script>

<style scoped>
.todo-list {
  max-width: 600px;
  margin: 0 auto;
  padding: 20px;
  background-color: #f5f5f5;
  border-radius: 8px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
}

h1 {
  font-size: 24px;
  color: #333;
  margin-bottom: 20px;
}

/* Styling for the <Todo> component */
/* Assuming Todo.vue renders each todo item */

/* If you want to style Todo.vue, use its scoped styles or class selectors here */
/* For example: */

/* .todo-item {
    background-color: #fff;
    padding: 12px;
    border-radius: 4px;
    margin-bottom: 10px;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  } */

/* Add more styles as needed */
</style>
