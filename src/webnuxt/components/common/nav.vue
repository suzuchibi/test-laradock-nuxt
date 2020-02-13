<template>
  <v-navigation-drawer
    :value="drawer"
    :clipped="clip"
    @input="changeDrawer($event)"
    app
  >
    <div class="mb-2">
      <v-list nav dense>
        <v-subheader>Main Contents</v-subheader>
        <v-list-item
          :to="{path: '/'}"
          active-class="primary white--text"
          router
        >
          <v-list-item-action>
            <v-icon>home</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>ホーム</v-list-item-title>
          </v-list-item-content>
        </v-list-item>

        <v-list-item
          :to="{path: '/news'}"
          active-class="primary white--text"
          router
        >
          <v-list-item-action>
            <v-icon>insert_comment</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>お知らせ</v-list-item-title>
          </v-list-item-content>
        </v-list-item>

        <v-list-item
          :to="{path: '/detail'}"
          active-class="primary white--text"
          router
        >
          <v-list-item-action>
            <v-icon>business</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>詳細情報</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
      <v-divider />
    </div>
    <div class="px-2">
      <v-btn color="secondary" class="mb-3" rounded block dark>
        LOG OUT<v-icon class="ml-2">
          exit_to_app
        </v-icon>
      </v-btn>
    </div>
  </v-navigation-drawer>
</template>

<script>
export default {
  props: {
    drawer: {
      type: Boolean,
      required: true
    },
    clip: {
      type: Boolean,
      required: true
    }
  },
  methods: {
    changeDrawer (value) {
      // Submit Parent Event 'get-drawer'
      this.$emit('get-drawer', { drawer: value })
    }
  }
}
</script>
