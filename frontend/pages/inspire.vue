<template>
  <v-row>
    <v-col class="text-center">
      {{ todos }}
      <v-btn @click="addAdiosMundo">Add "adios mundo"</v-btn>
    </v-col>
  </v-row>
</template>

<script>
export default {
  name: 'InspirePage',
  data () {
    return {
      todos: []
    }
  },
  async fetch({ $axios }) {
    let { data } = await $axios.get('/')
    console.log(data)
  },
  mounted() {
    this.todos = this.$store.state.todoList
  },
  methods: {
    addAdiosMundo() {
      this.$store.commit('addTodo', 'Adios Mundo')
    }
  }
}
</script>
