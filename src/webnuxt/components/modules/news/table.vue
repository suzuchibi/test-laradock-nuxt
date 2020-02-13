<template>
  <div>
    <v-data-table
      :headers="headers"
      :no-data-text="noText"
      hide-default-footer
      disable-pagination
      disable-sort
    />
  </div>
</template>

<script>
export default {
  data () {
    return {
      noText: 'データが登録されていません。',
      headers: [
        { text: 'Title', value: 'title', width: 140 },
        { text: 'Text', value: 'coment', sortable: false },
        { text: 'View', value: 'view', align: 'center', width: 80, sortable: false },
        { text: 'Actions', value: 'action', align: 'center', sortable: false }
      ]
    }
  }
}
</script>
