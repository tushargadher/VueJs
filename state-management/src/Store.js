import Vuex from "vuex";

export default new Vuex.Store({
  state: {
    //store value similar to data method
    todos: [
      {
        title: "Add Your First Task",
        completed: false,
      },
    ],
  },
  getters: {
    //similar as computed prperty that can acccess value of state
    completedTodos(state) {
      return state.todos.filter((todo) => {
        return todo.completed === true;
      }).length;
    },

    pendingTodos(state) {
      return state.todos.filter((todo) => {
        return todo.completed === false;
      }).length;
    },
  },
  mutations: {
    //mutations is only recommended way to change value of state,we can change the state directily but it is not recommended because mutation can track the changes in state

    //it is not compansary to give capital later name for mutation,but it is easy to identify this is mutation
    NEW_TODO(state, todoItem) {
      //update the state value
      //   console.log(state); state contain the value of state
      state.todos.push({
        title: todoItem,
        completed: false,
      });
    },

    DELETE_TODO(state, todoItem) {
      let index = state.todos.indexOf(todoItem);

      state.todos.splice(index, 1); //remove item
    },

    MARK_COMPLATED(state, todoItem) {
      todoItem.completed = true;
    },
  },
  actions: {
    //business logic similar to method

    //commit and payload data
    addNewTodo({ commit }, todoItem) {
      //to change the data commit with payload data
      commit("NEW_TODO", todoItem); // commit goes to mutation
    },

    removeTodo({ commit }, todoItem) {
      commit("DELETE_TODO", todoItem);
    },

    markCompleted({ commit }, todoItem) {
      commit("MARK_COMPLATED", todoItem);
    },
  },
});

// steps to use vuex :-

// 1. install npm i vuex
// 2.create store File
// 3. import vue and vuex
// 4.export default new Vuex.Store
//5.configure vuex store in main.js
