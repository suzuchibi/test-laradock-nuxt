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
      clipped: false
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

<style>
html {
  font-family: 'Source Sans Pro', -apple-system, BlinkMacSystemFont, 'Segoe UI',
    Roboto, 'Helvetica Neue', Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

*,
*:before,
*:after {
  box-sizing: border-box;
  margin: 0;
}

.button--green {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #3b8070;
  color: #3b8070;
  text-decoration: none;
  padding: 10px 30px;
}

.button--green:hover {
  color: #fff;
  background-color: #3b8070;
}

.button--grey {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #35495e;
  color: #35495e;
  text-decoration: none;
  padding: 10px 30px;
  margin-left: 15px;
}

.button--grey:hover {
  color: #fff;
  background-color: #35495e;
}
</style>
