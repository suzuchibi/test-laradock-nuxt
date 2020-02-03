<template>
  <v-app>
    <v-content>
      <v-container fluid>
        <div>
          <p>test</p>
        </div>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
export default {
  data () {
    return {
      username: '',
      password: '',
      overlay: false,
      dialog: {
        alert: false
      }
    }
  }
}
</script>
