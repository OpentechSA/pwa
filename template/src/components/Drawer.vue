<template>
  <v-navigation-drawer right temporary fixed app v-model="store.app.drawer.show">
    <v-card flat color="primary" height="200px">
      
    </v-card>
    <v-list>
      <template v-for="item in store.app.drawer.items">
        <v-list-tile v-if="item.type == null || item.type === 'tile'" :to="item.to">
          <v-list-tile-action> <v-icon v-text="item.icon"></v-icon> </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title v-text="item.title"></v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>

        <v-divider v-if="item.type === 'divider'"></v-divider>
      </template>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
import store from '@/store'

export default {
  name: 'drawer',
  data () {
    return {
      store
    }
  }
}
</script>
