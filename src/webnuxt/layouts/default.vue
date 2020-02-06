<template>
  <div>
    <v-app>
      <Header
        @default-drawer="chageDrawer"
        :drawer="drawer"
        :clip="clipped"
      />
      <Nav
        @get-drawer="fetchDrawer"
        :drawer="drawer"
        :clip="clipped"
      />
      <v-content>
        <v-container fluid>
          <nuxt />
        </v-container>
      </v-content>
    </v-app>
  </div>
</template>

<script>
import Header from '~/components/common/header.vue'
import Nav from '~/components/common/nav.vue'

export default {
  components: {
    Header,
    Nav
  },
  data () {
    return {
      drawer: true,
      clipped: true
    }
  },
  created () {
    this.$vuetify.theme.dark = true
  },
  methods: {
    fetchDrawer ({ drawer }) {
      this.drawer = drawer
    },
    chageDrawer () {
      this.drawer = !this.drawer
    }
  }
}
</script>
