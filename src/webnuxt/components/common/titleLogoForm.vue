<template>
  <div class="v-material-heading">
    <v-icon color="#d2fcd4" size="32" class="mb-1">
      {{ icon }}
    </v-icon>
    <span>{{ text }}</span>
  </div>
</template>

<script>
export default {
  props: {
    text: {
      type: String,
      required: true
    },
    icon: {
      type: String,
      required: true
    }
  }
}
</script>

<style scoped>
#app .v-material-heading {
  width: 96px;
  text-align: center;
  border-radius: 5px;
  background: #4caf4f;
  margin: 0;
  padding: 16px 0;
  display: flex;
  flex-direction: column;
  box-shadow:
    0 1px 2px 0 rgba(76, 175, 79, 0.61),
    0 3px 5px 0 rgba(76, 175, 79, 0.4);
  position: relative;
  top: -24px;
}
#app .v-material-heading span {
  color: #d2fcd4;
  font-size: 13px;
  line-height: 1.8em;
}
</style>
