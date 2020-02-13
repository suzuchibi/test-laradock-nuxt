<template>
  <div>
    <breadCrumbs :breadCrumbs="fetchConfig.breadCrumbs" />
    <Title :titleText="fetchConfig.title" />
    <Action :keyID="fetchConfig.id" />
    <Table />
  </div>
</template>
<script>
import News from '~/assets/config/news.js'
import breadCrumbs from '~/components/common/breadCrumbs.vue'
import Title from '~/components/common/titleSimple.vue'
import Action from '~/components/common/actionArea.vue'
import Table from '~/components/modules/news/table.vue'

export default {
  components: {
    breadCrumbs,
    Title,
    Action,
    Table
  },
  computed: {
    fetchConfig () {
      return {
        id: News.ID,
        title: News.title,
        breadCrumbs: News.breadCrumbs
      }
    }
  }
}
</script>
