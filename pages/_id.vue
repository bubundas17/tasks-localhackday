<template>
    <v-layout>
        <v-card width="100%" class="fill-height">
            <v-card-title :class="task.completed ? 'green lighten-3' : ''">
                <h1 class="headline">{{ task.name }}</h1>
                <v-spacer/>
                <v-btn icon @click="toggleTask($route.params.id)">
                    <v-icon>{{ task.completed ? 'clear' : 'check_circle_outline'}}</v-icon>
                </v-btn>
            </v-card-title>
            <v-card-text class="">

                <h2 class="subheading">Todo List</h2>
                <v-list>
                    <v-list-tile v-for="(item, index) in task.todo" @click="toggleTodo(index)" :key="index">
                        <v-card-actions>
                            <v-icon>{{ item.done ? 'check_box' : 'check_box_outline_blank' }}</v-icon>
                        </v-card-actions>
                        <v-list-tile-content>{{ item.name }}</v-list-tile-content>
                        <v-card-actions>
                            <v-icon @click.prevent="removeTodo(index)">delete_outline</v-icon>
                        </v-card-actions>
                    </v-list-tile>
                </v-list>
            </v-card-text>
            <v-card-actions>
                <v-text-field flat solo label="Add Todo" placeholder="Add Todo" class="ma-0 pa-0" v-model="newTodo">
                    <template slot="append">
                        <v-btn
                                class="mx-0"
                                icon
                                name="search"
                                flat
                                autofocus
                                @click.prevent="addTodo"
                        >
                            <v-icon>add</v-icon>
                        </v-btn>
                    </template>
                </v-text-field>
            </v-card-actions>
        </v-card>
    </v-layout>
</template>
<script>
  export default {
    data () {
      return {
        newTodo: ''
      }
    },
    computed: {
      task () {
        try {
          return this.$store.getters['tasks'][this.$route.params.id]
        } catch (e) {
          return {}
        }
      }
    },
    methods: {
      toggleTask (index) {
        if (this.task.completed) {
          this.showAlert('success', 'Setting As Incomplete')
        } else {
          this.showAlert('success', 'Setting As complete')
        }
        this.$store.commit('toggleTask', index)
      },
      addTodo () {
        this.showAlert('success', 'Todo Added!')
        this.$store.commit('addTodo', {
          task: this.$route.params.id,
          name: this.newTodo
        })
        this.newTodo = ''
      },
      removeTodo (index) {
        this.showAlert('success', 'Todo Deleted!')
        this.$store.commit('removeTodo', {
          task: this.$route.params.id,
          todo: index
        })
      },
      toggleTodo (index) {
        this.$store.commit('toggleTodo', {
          task: this.$route.params.id,
          todo: index
        })
      }
    }
  }
</script>
