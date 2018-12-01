<template>
    <v-snackbar
            :timeout="alertinfo.timeout"
            :color="alertinfo.color"
            :multi-line="false"
            v-model="alertinfo.show"
            bottom
            right
    >
        {{ alertinfo.message }}
        <v-btn dark flat @click.native="hideAlert">Close</v-btn>
    </v-snackbar>
</template>

<script>
  export default {
    name: 'Alerts',
    computed: {
      alertinfo () {
        return this.$store.state.alert
      }
    }
  }
</script>

<style scoped>

</style>
