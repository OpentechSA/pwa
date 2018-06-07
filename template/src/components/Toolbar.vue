<template>
  <v-toolbar app dark color="primary">
    <v-toolbar-title v-text="app.name"></v-toolbar-title>
    <v-spacer></v-spacer>
    <v-btn icon @click.stop="app.drawer.show = true">
      <v-icon>menu</v-icon>
    </v-btn>
  </v-toolbar>
</template>

<script>
import app from '@/store/app'

export default {
  name: 'toolbar',
  data () {
    return {
      app
    }
  }
}
</script>
