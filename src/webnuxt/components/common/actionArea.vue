<template>
  <div class="mb-3">
    <Add :link="`${keyID}/add`" />
    <Sort :link="`${keyID}/sort`" />
  </div>
</template>

<script>
import Add from '~/components/buttons/btnAdd.vue'
import Sort from '~/components/buttons/btnSort.vue'

export default {
  components: {
    Add,
    Sort
  },
  props: {
    keyID: {
      type: String,
      required: true
    }
  }
}
</script>
