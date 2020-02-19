<template>
  <div>
    <breadCrumbs :breadCrumbs="fetchConfig.breadCrumbs" />
    <Title :titleText="`${fetchConfig.title}の新規追加`" />
    <BackToPage :path="`/${fetchConfig.id}`" :class="cssBack" />
    <Form :setting="fetchCommon" />
  </div>
</template>

<script>
import Common from '~/assets/config/common.js'
import News from '~/assets/config/news.js'
import breadCrumbs from '~/components/common/breadCrumbs.vue'
import Title from '~/components/common/titleSimple.vue'
import BackToPage from '~/components/common/backToPage.vue'
import Form from '~/components/modules/news/form.vue'

export default {
  components: {
    breadCrumbs,
    Title,
    BackToPage,
    Form
  },
  computed: {
    fetchCommon () {
      return {
        viewSetting: Common.viewFlagSetting
      }
    },
    fetchConfig () {
      return {
        id: News.ID,
        title: News.title,
        breadCrumbs: News.breadCrumbsAdd
      }
    },
    cssBack () {
      return (this.$vuetify.breakpoint.name === 'xs') ? 'mb-0' : 'mb-6'
    }
  }
}
</script>
