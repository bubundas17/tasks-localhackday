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
                Remove Task
            </v-card-title>

            <v-card-text>
                Are You Sure Want to remove the task?
            </v-card-text>

            <v-divider></v-divider>

            <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn
                        color="primary"
                        flat
                        @click="$emit('input', false)"
                >
                    Cancel
                </v-btn>
                <v-btn
                        color="primary"
                        flat
                        @click="removeTask"
                >
                    Remove
                </v-btn>
            </v-card-actions>
        </v-card>
    </v-dialog>
</template>

<script>
  export default {
    props: ['value', 'taskIndex'],
    name: 'RemoveTask',
    data () {
      return {
        taskName: ''
      }
    },
    methods: {
      removeTask () {
        this.$store.commit('removeTask', this.taskIndex)
        this.showAlert('success', 'Task Removed!')
        this.$emit('input', false)
      }
    }
  }
</script>

<style scoped>

</style>
