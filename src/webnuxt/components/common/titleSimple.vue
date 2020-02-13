<template>
  <div class="headline text-center mb-0">
    {{ titleText }}
  </div>
</template>

<script>
export default {
  props: {
    titleText: {
      type: String,
      required: true
    }
  }
}
</script>
