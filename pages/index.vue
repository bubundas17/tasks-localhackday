<template>
    <v-layout wrap row>
        <v-card width="100%">
            <v-card-title>
                <h1 class="headline">Tasks</h1>
                <v-spacer/>
                <v-btn icon @click="addtaskpopup = true">
                    <v-icon>add</v-icon>
                </v-btn>
            </v-card-title>
            <v-card-text>
                <v-list>
                    <v-list-tile v-for="(task, index) in tasks" :key="index" :to="'/'+index"
                                 :class="task.completed ? 'green lighten-3' : ''">
                        <v-list-tile-action>
                            <v-btn icon @click.prevent="toggleTask(index)">
                                <v-icon>{{ task.completed ? 'clear' : 'check_circle_outline'}}</v-icon>
                            </v-btn>
                        </v-list-tile-action>
                        <v-list-tile-content>{{task.name}}</v-list-tile-content>
                        <v-list-tile-action>
                            <v-btn icon @click.prevent="removeTask(index)">
                                <v-icon>delete_outline</v-icon>
                            </v-btn>
                        </v-list-tile-action>
                        <v-list-tile-action>
                            <v-btn icon @click.prevent="editTask(index)">
                                <v-icon>border_color</v-icon>
                            </v-btn>
                        </v-list-tile-action>
                    </v-list-tile>
                </v-list>
            </v-card-text>
            <AddTasks v-model="addtaskpopup"></AddTasks>
            <RemoveTask v-model="removeTaskPopup" :task-index="removeTaskIndex"></RemoveTask>
            <edit-task v-model="editTaskPopup" :task="editTaskIndex"></edit-task>
        </v-card>
    </v-layout>
</template>
<script>
  import vuex from 'vuex'
  import AddTasks from '../components/AddTasks'
  import RemoveTask from '../components/RemoveTask'
  import EditTask from '../components/EditTask'

  export default {
    components: { EditTask, RemoveTask, AddTasks },
    data () {
      return {
        addtaskpopup: false,
        removeTaskPopup: false,
        editTaskPopup: false,
        removeTaskIndex: null,
        editTaskIndex: null
      }
    },
    computed: {
      ...vuex.mapGetters({
        tasks: 'tasks'
      })
    },
    methods: {
      removeTask (index) {
        this.removeTaskPopup = true
        this.removeTaskIndex = index
      },
      toggleTask (index) {
        if (this.tasks[index].completed) {
          this.showAlert('success', 'Setting As Incomplete')
        } else {
          this.showAlert('success', 'Setting As complete')
        }
        this.$store.commit('toggleTask', index)
      },
      editTask (index) {
        this.editTaskPopup = true
        this.editTaskIndex = index
      }
    }
  }
</script>
