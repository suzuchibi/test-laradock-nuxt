<template>
  <v-app>
    <v-content>
      <v-container fluid class="fill-height">
        <v-row no-gutters>
          <v-col
            cols="11"
            sm="8"
            md="4"
            class="mx-auto"
          >
            <v-row
              align="center"
              justify="center"
            >
              <v-col>
                <v-card>
                  <v-toolbar
                    color="primary"
                    flat
                  >
                    <v-toolbar-title>Login</v-toolbar-title>
                  </v-toolbar>
                  <v-card-text>
                    <v-text-field
                      label="User-ID"
                      name="login"
                      prepend-icon="person"
                      type="text"
                    />
                  </v-card-text>
                  <v-card-text class="pt-0">
                    <v-text-field
                      label="Password"
                      name="password"
                      prepend-icon="lock"
                      type="password"
                    />
                  </v-card-text>
                  <v-card-actions>
                    <v-spacer />
                    <div class="pe-2 pb-2">
                      <v-btn class="px-4 login" color="primary">
                        Login
                      </v-btn>
                    </div>
                  </v-card-actions>
                </v-card>
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
