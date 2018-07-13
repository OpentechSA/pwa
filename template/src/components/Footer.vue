<template>
  <v-footer height="56" app fixed>
    <v-bottom-nav value="true" :active.sync="store.app.footer.active" color="transparent">
      <v-btn flat v-for="item in store.app.footer.items" color="teal" :value="item.value" :key="item.value">
        <span v-text="item.title"></span>
        <v-icon v-text="item.icon"></v-icon>
      </v-btn>
    </v-bottom-nav>
  </v-footer>
</template>

<script>
import store from '@/store'

export default {
  name: 'page-footer',
  data () {
    return {
      store
    }
  }
}
</script>
