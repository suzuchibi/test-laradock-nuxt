<template>
  <!--<v-app-bar app color="primary" dark>-->
  <v-app-bar
    :clipped-left="clip"
    :class="appBorderBottomLine"
    flat
    app
  >
    <div
      @click.stop="changeDrawer"
      class="app-nav-icon d-flex flex-column justify-center align-center"
    >
      <v-icon size="28" style="line-height: 20px;">
        {{ drawerIcon }}
      </v-icon>
      <span class="app-nav-icon-text">{{ drawerText }}</span>
    </div>
    <v-divider class="mx-4" vertical />
    <v-spacer />
    <v-avatar>
      <v-icon>person</v-icon>
    </v-avatar>
    <span class="pr-1">鈴木 徹</span>
    <span>さん</span>
  </v-app-bar>
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
  computed: {
    drawerIcon () {
      return this.drawer ? 'keyboard_backspace' : 'menu'
    },
    drawerText () {
      return this.drawer ? 'Close' : 'Menu'
    },
    appBorderBottomLine () {
      return this.$vuetify.theme.dark ? 'app-bar-bottom-line-dark' : 'app-bar-bottom-line-light'
    }
  },
  methods: {
    changeDrawer () {
      // Submit Parent Event 'default-drawer'
      this.$emit('default-drawer')
    }
  }
}
</script>

<style lang="scss" scoped>
#app .theme--light.v-app-bar.v-toolbar.v-sheet {
  background-color: #fff;
}
.app-bar-bottom-line-dark {
  //border-bottom: solid 1px rgba(255, 255, 255, 0.12);
  border-bottom: solid 1px #272727;
}
.app-bar-bottom-line-light {
  border-bottom: solid 1px #e0e0e0;
}
.app-nav-icon {
  cursor: pointer;
}
.app-nav-icon:hover {
  background: rgba(255, 255, 255, 0.2);
}
.app-nav-icon-text {
  font-size: 10.5px;
}
</style>
