export const state = () => ({
    todoList: ['Hola Mundo']
})

export const mutations = {
    addTodo(state, todo) {
        state.todoList.push(todo)
    }
}

export const actions = {
    async login(state, {email, password}) {
        console.log(email, password)
        let { data } = await this.$auth.loginWith('local', { data: { email, password } })
        return data
    }
}