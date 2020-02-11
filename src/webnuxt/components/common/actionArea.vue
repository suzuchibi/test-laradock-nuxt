<template>
  <div class="mb-3">
    <Add :link="'/add/'" />
    <Add :link="'/add/'" />
  </div>
</template>

<script>
import Add from '~/components/buttons/btnAdd.vue'

export default {
  components: {
    Add
  }
}
</script>
