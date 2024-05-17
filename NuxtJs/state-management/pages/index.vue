<template>
  <div class="container">
    <div class="input-container">
      <h1>Task Board</h1>
      <div class="inner-container">
        <input
          type="text"
          placeholder="Enter New Task"
          v-model.trim="newTask"
          @keypress.enter="handleAddTask"
        />
        <StyledButton buttonTitle="Add Task" @clicked="handleAddTask" />
      </div>
    </div>
    <div class="task-count">
      <p>Completed Task: {{ $store.getters.getCompleteTaskLength }}</p>
      <p>Pending Task: {{ $store.getters.getPendingTaskLength }}</p>
    </div>
    <div class="todo-container">
      <Task v-for="(task, index) in taskList" :key="index" :task="task" />
    </div>
  </div>
</template>

<script>
export default {
  head() {
    return {
      title: "Todo List",
    };
  },
  data() {
    return {
      newTask: "",
    };
  },
  methods: {
    handleAddTask() {
      if (this.newTask) {
        this.$store.dispatch("addTodo", this.newTask);
        this.newTask = "";
      } else {
        alert("Please enter task");
      }
    },
  },
  computed: {
    taskList() {
      return this.$store.state.tasks;
    },
  },
};
</script>

<style scoped>
.container {
  /* Add any general styles for the container */
}

.input-container {
  padding-top: 20px;
  margin-bottom: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.task-count {
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
}

.inner-container {
  /* border: 1px solid white; */
  width: 40%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
}

.inner-container input {
  width: 70%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
}

h1 {
  margin-bottom: 10px;
}

.todo-container {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
