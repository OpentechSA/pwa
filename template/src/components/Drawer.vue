<template>
  <v-navigation-drawer right temporary fixed app v-model="app.drawer.show">
    <v-card flat color="primary" height="200px">
      Nombre de usuario
    </v-card>
    <v-list>
      <template v-for="item in app.drawer.items">
        <v-list-tile v-if="item.type == null || item.type === 'tile'" :to="item.to">
          <v-list-tile-action> <v-icon>{{ item.icon }}</v-icon> </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>{{ item.title }}</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>

        <v-divider v-if="item.type === 'divider'"></v-divider>
      </template>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
import app from '@/store/app'

export default {
  name: 'drawer',
  data () {
    return {
      app
    }
  }
}
</script>
