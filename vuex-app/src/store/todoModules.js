export const todoModules = {
    state: {
        todoList: [
            { id: 1, name: "Homework", done: true },
            { id: 2, name: "Exam", done: false },
            { id: 3, name: "Quiz", done: true },
        ],
    },
    getters: {
        todoListDone: (state) => {
            return state.todoList.filter((v) => v.done === true)
        },
        getTodoListById: (state) => (id) => {
            return state.todoList.filter((v) => v.id === id)
        }
    },
    mutations: {},
    actions: {},
};