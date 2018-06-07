<template>
  <v-app>
    <toolbar title="My App"></toolbar>
    
    <v-content>
      <router-view/>
    </v-content>

    <drawer></drawer>

    <footer-page></footer-page>
  </v-app>
</template>

<script>
import Toolbar from './components/Toolbar'
import Drawer from './components/Drawer'
import FooterPage from './components/Footer'

export default {
  name: 'App',
  components: {
    Toolbar,
    Drawer,
    FooterPage
  }
}
</script>
