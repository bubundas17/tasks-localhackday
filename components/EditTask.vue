<template>
    <v-dialog
            v-model="value"
            width="500"
            persistent
    >
        <v-card>
            <v-card-title
                    class="headline grey lighten-2"
            >
                Edit Task
            </v-card-title>

            <v-card-text>
                <v-form @submit.prevent="addTask">
                    <v-text-field label="Task Name" v-model="taskName"></v-text-field>
                </v-form>
            </v-card-text>

            <v-divider></v-divider>

            <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn
                        color="primary"
                        flat
                        @click="$emit('input', false)"
                >
                    close
                </v-btn>
                <v-btn
                        color="primary"
                        flat
                        @click="addTask"
                >
                    Add
                </v-btn>
            </v-card-actions>
        </v-card>
    </v-dialog>
</template>

<script>
  export default {
    props: ['value', 'task'],
    name: 'EditTask',
    data () {
      return {
        taskName: ''
      }
    },
    methods: {
      addTask () {
        this.$store.commit('margeTask', { index: this.task, obj: { name: this.taskName } })
        this.showAlert('success', 'Task Edited!')
        this.$emit('input', false)
      }
    },
    mounted () {
      this.taskName = this.$store.getters['tasks'][this.task]
    }
  }
</script>

<style scoped>

</style>
