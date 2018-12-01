export const state = () => ({
  test: 1,
  taskList: [
    {
      name: 'Do Project In Hack Day',
      completed: false,
      todo: [
        { name: 'Choose Teammates', done: false },
        { name: 'Start alone :(', done: true },
        { name: 'Decide what project to do', done: true },
        { name: 'Make Wireframe', done: true },
        { name: 'Decide what framework to use', done: true },
        { name: 'Start Building', done: true },
        { name: 'Keep Building', done: true },
        { name: 'Check For Bugs', done: true },
        { name: 'Submit The Project', done: false }
      ]
    }
  ]
})

export const getters = {
  tasks (state) {
    // if (index) return state.tasks[index]
    return state.taskList
  }
}

export const mutations = {
  addTask (state, payload) {
    state.taskList.push({
      name: payload,
      completed: false,
      todo: []
    })
  },
  toggleTask (state, index) {
    state.taskList[index].completed = !state.taskList[index].completed
  },
  margeTask (state, payload) {
    state.taskList[payload.index] = { ...state.taskList[payload.index], ...payload.obj }
  },
  removeTask (state, index) {
    state.taskList.splice(index, 1)
  },
  addTodo (state, payload) {
    state.taskList[payload.task].todo.push({
      done: false,
      name: payload.name
    })
  },
  removeTodo (state, payload) {
    state.taskList[payload.task].todo.splice(payload.todo, 1)
  },
  toggleTodo (state, payload) {
    try {
      state.taskList[payload.task].todo[payload.todo].done = !state.taskList[payload.task].todo[payload.todo].done
    } catch (e) {
      console.log(e)
    }
  }
}
