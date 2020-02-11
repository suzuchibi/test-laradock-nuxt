<template>
  <v-breadcrumbs
    :items="breadCrumbs"
    divider=">"
    class="pt-0 pl-0 pr-0 pb-6"
  >
    <v-breadcrumbs-item
      slot="item"
      slot-scope="{ item }"
      :to="item.to"
      exact
    >
      {{ item.text }}
    </v-breadcrumbs-item>
  </v-breadcrumbs>
</template>
<script>
export default {
  props: {
    breadCrumbs: {
      type: Array,
      required: true
    }
  }
}
</script>
