<template>
  <div>
    <breadCrumbs :breadCrumbs="breadCrumbs" />
    <Title :titleText="'詳細情報'" />
    <Action />
    <Table />
  </div>
</template>

<script>
import Detail from '~/assets/config/detail.js'
import breadCrumbs from '~/components/common/breadCrumbs.vue'
import Title from '~/components/common/titleSimple.vue'
import Action from '~/components/common/actionArea.vue'
import Table from '~/components/modules/detail/table.vue'

export default {
  components: {
    breadCrumbs,
    Title,
    Action,
    Table
  },
  computed: {
    breadCrumbs () {
      return Detail.breadCrumbs
    }
  }
}
</script>
