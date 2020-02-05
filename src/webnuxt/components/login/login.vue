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
                <v-card flat>
                  <v-card-title class="pb-0">
                    <div class="mx-auto">
                      <v-icon color="primary" class="mb-0" x-large style="font-size: 84px;">
                        account_circle
                      </v-icon>
                    </div>
                  </v-card-title>
                  <v-card-text class="pb-0">
                    <v-text-field
                      label="User-ID"
                      name="login"
                      prepend-icon="person"
                      type="text"
                    />
                  </v-card-text>
                  <v-card-text class="py-0">
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
                <p class="text-center">
                  https://sample.com
                </p>
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
