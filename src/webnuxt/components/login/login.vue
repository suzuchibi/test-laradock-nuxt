<template>
  <v-app>
    <v-content>
      <v-container fluid class="fill-height">
        <v-row no-gutters>
          <v-col cols="11" sm="8" md="4" class="mx-auto" style="background: #000;">
            <v-row align="center" justify="center">
              <v-col>
                <p>test</p>
                <p>test</p>
              </v-col>
            </v-row>
          </v-col>
        </v-row>
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
