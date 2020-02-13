<template>
  <v-btn
    :to="path"
    color="blue-grey"
    small
    text
    dark
    class="pr-3 pl-2 py-0 ml-0"
  >
    <v-icon small class="mr-1">
      arrow_back
    </v-icon>back
  </v-btn>
</template>

<script>
export default {
  props: {
    path: {
      type: String,
      required: true
    }
  }
}
</script>
