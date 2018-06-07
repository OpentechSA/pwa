<template>
  <v-footer height="auto">
    <v-bottom-nav absolute value="true" :active.sync="app.footer.active" color="transparent">
      <v-btn flat v-for="item in app.footer.items" color="teal" :value="item.value" :key="item.value">
        <span>{{ item.title }}</span>
        <v-icon>{{ item.icon }}</v-icon>
      </v-btn>
    </v-bottom-nav>
  </v-footer>
</template>

<script>
import app from '@/store/app'

export default {
  name: 'page-footer',
  data () {
    return {
      app
    }
  }
}
</script>
