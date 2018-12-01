<template>
    <v-app light>
        <v-toolbar fixed app class="teal darken-2" dark>
            <v-toolbar-title v-text="title"></v-toolbar-title>
            <v-spacer></v-spacer>
        </v-toolbar>
        <v-content>
            <v-container>
                <nuxt/>
            </v-container>
        </v-content>
        <alerts/>
        <v-footer :fixed="fixed" app>
            <span>&copy; {{ new Date().getFullYear() }}</span>
        </v-footer>
    </v-app>
</template>

<script>
  import Alerts from '../components/Alerts'
  export default {
    components: { Alerts },
    data () {
      return {
        title: 'Tasks Project'
      }
    }
  }
</script>
