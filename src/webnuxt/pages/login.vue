<template>
  <Login v-bind:devFlag="devFlag" />
</template>

<script>
import Login from '~/components/login/login.vue'

export default {
  layout: 'login',
  components: {
    Login
  },
  data () {
    return { devFlag: null }
  },
  asyncData ({ isDev }) {
    return { devFlag: isDev }
  }
}
</script>
