export default {
  /* Setting */
  ID: 'news',
  title: 'お知らせ',
  breadCrumbs: [
    { text: 'Home', disabled: false, to: '/' },
    { text: 'お知らせ', disabled: true, to: '/news/' }
  ],
  breadCrumbsAdd: [
    { text: 'Home', disabled: false, to: '/' },
    { text: 'お知らせ', disabled: false, to: '/news' },
    { text: '新規追加', disabled: true, to: '/news/add' }
  ],
  breadCrumbsEdit: [
    { text: 'Home', disabled: false, to: '/' },
    { text: 'お知らせ', disabled: false, to: '/news' },
    { text: 'param', disabled: true, to: '/news' }
  ],
  breadCrumbsSort: [
    { text: 'Home', disabled: false, to: '/' },
    { text: 'お知らせ', disabled: false, to: '/news' },
    { text: '並び替え', disabled: true, to: '/news/sort' }
  ],
  defaultDatas: {
    code: '',
    title: '',
    lesson: '',
    coment: '',
    thumb: '',
    level: '',
    skill: '',
    pickup: 'off',
    icon: 'none',
    view: 'on',
    no: ''
  }
}
