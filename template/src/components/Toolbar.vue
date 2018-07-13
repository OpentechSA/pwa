<template>
  <v-toolbar app dark color="primary">
    <v-toolbar-title v-text="store.app.name"></v-toolbar-title>
    <v-spacer></v-spacer>
    <v-btn icon @click.stop="store.app.drawer.show = true">
      <v-icon>menu</v-icon>
    </v-btn>
  </v-toolbar>
</template>

<script>
import store from '@/store'

export default {
  name: 'toolbar',
  data () {
    return {
      store
    }
  }
}
</script>
