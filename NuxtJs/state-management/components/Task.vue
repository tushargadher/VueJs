<template>
  <div class="task">
    <p :class="{ completeTask: task.completed }">{{ task.content }}</p>
    <StyledButton buttonTitle="Complete" @clicked="handleComplete" />
    <StyledButton
      buttonTitle="Remove"
      @clicked="handleRemove"
      class="removeButton"
    />
  </div>
</template>

<script>
export default {
  props: {
    task: {
      type: Object,
      required: true,
    },
  },
  methods: {
    handleRemove() {
      //sending task prop
      this.$store.commit("REMOVE_TODO", this.task);
    },
    handleComplete() {
      //   console.log("tjos");

      this.$store.commit("MARK_COMPLETE", this.task);
    },
  },
};
</script>

<style scoped>
.task {
  display: flex;
  align-items: center;
  border: 1px solid white;
  border-radius: 5px;
  padding: 7px;
  color: white;
  width: 40%;
  margin: 10px 0px;
}

p {
  font-weight: lighter;
  font-size: 20px;
  flex: 1;
}

.completeTask {
  text-decoration: line-through;
}

.removeButton {
  margin-left: 10px;
  color: red;
}
</style>
