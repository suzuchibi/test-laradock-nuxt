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
        <v-container fluid class="pa-8">
          <nuxt />
        </v-container>
        <p class="text-center text--secondary caption">
          Copyright &copy; 2020 All Rights Reserved.
        </p>
      </v-content>
    </v-app>
  </div>
</template>

<script>
import App from '~/assets/config/app.js'
import Header from '~/components/common/header.vue'
import Nav from '~/components/common/nav.vue'

export default {
  components: {
    Header,
    Nav
  },
  head () {
    return {
      title: `${App.pageTitle} - ${App.siteName}`
    }
  },
  data () {
    return {
      drawer: true,
      clipped: true,
      siteUrl: App.siteUrl
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
