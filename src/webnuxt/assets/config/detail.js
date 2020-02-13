export default {
  /* Setting */
  ID: 'detail',
  title: '詳細情報',
  breadCrumbs: [
    { text: 'Home', disabled: false, to: '/' },
    { text: '詳細情報', disabled: true, to: '/detail/' }
  ],
  breadCrumbsSort: [
    { text: 'Home', disabled: false, to: '/' },
    { text: '詳細情報', disabled: false, to: '/detail/' },
    { text: '並び替え', disabled: true, to: '/detail/sort/' }
  ]
}
