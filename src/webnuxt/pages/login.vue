<template>
  <Login v-bind:devFlag="devFlag" v-bind:url="settingUrl" />
</template>

<script>
import Config from '~/assets/config/login.js'
import Login from '~/components/login/login.vue'

export default {
  layout: 'login',
  components: {
    Login
  },
  head () {
    return { title: Config.loginTitle }
  },
  data () {
    return {
      devFlag: null,
      settingUrl: Config.urlTitle
    }
  },
  asyncData ({ isDev }) {
    return { devFlag: isDev }
  }
}
</script>
