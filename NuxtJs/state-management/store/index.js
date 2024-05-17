export const state = () => ({
  tasks: [],
});

export const getters = {
  getCompleteTaskLength(state) {
    return state.tasks.filter((task) => task.completed).length;
  },
  getPendingTaskLength(state) {
    return state.tasks.filter((task) => {
      return task.completed === false;
    }).length;
  },
};

export const mutations = {
  // mutation have access of state and payload data
  ADD_TODO(state, task) {
    state.tasks = [{ content: task, completed: false }, ...state.tasks];
  },
  REMOVE_TODO(state, task) {
    let taskIndex = state.tasks.indexOf(task);
    //remove currect task
    state.tasks.splice(taskIndex, 1);
  },
  MARK_COMPLETE(state, task) {
    task.completed = true;
  },
};

// In Nuxt.js, the standard practice is to directly call mutations from actions instead of dispatching actions.
// This is due to the convention set by Nuxt.js to make the code more straightforward and easier to understand.
export const actions = {
  // commit method and payload data
  addTodo({ commit }, task) {
    // mutation name and payload data
    commit("ADD_TODO", task);
  },
};
