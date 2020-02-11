<template>
  <v-btn :to="link" color="#26A69A" class="pr-5 pl-3 py-1 btnAdd">
    <v-icon small class="mr-1">
      add
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
      return (this.$vuetify.breakpoint.name === 'xs') ? 'add' : 'add new item'
    }
  }
}
</script>
