<template>
  <v-btn :to="link" color="#00ACC1" class="pr-5 pl-4 py-1 btnSort">
    <v-icon small class="mr-1">
      cached
    </v-icon>{{ titleText }}
  </v-btn>
</template>

<script>
export default {
  props: {
    link: {
      type: String,
      required: true
    }
  },
  computed: {
    titleText () {
      return (this.$vuetify.breakpoint.name === 'xs') ? 'Sort' : 'Change Sort'
    }
  }
}
</script>
