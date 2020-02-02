# Vuetifyのインストール
vue init vuetifyjs/nuxt nuxt のコマンドは今回は使用しない。

## 1. Vuetify インストール。
Vuetify をインストール。
```
$ npm i -D @nuxtjs/vuetify
```
もしくは。。。
```
$ yarn add @nuxtjs/vuetify
```

## 2. Vuetify を設定する。
[ nuxt.config.js ] ファイルに vuetify を設定する。
```
module.exports = {
  modules: [
    '@nuxtjs/vuetify'
  ]
}
```
プライマリーカラーなどの設定
```
module.exports = {
  modules: [
    '@nuxtjs/vuetify'
  ],
  ## ↓ vuetifyの設定。themeをthemesに分ける
  vuetify: {
    theme: {
      themes: {
        light: {
          primary: '#3f51b5',
          secondary: '#b0bec5',
          accent: '#8c9eff',
          error: '#b71c1c',
          warning: '#ffc107',
          info: '#2196f3',
          success: '#4caf50'
        },
        dark: {
          primary: '#3f51b5'
        }
      }
    }
  }
}
```

## 3-1. アイコンフォントの読み込みを設定する。（CDN方式）
[ nuxt.config.js ] ファイルにGoogleのアイコンフォントの読み込みCSSを設定する。<br>
ただし、これだとネット環境接続必須...
```
module.exports = {
  head: {
    title: 'kawairi',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'kawairi admin app' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      # ↓ここに追加。Robotoはフォントなので、いらんかも。。。
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Roboto:300,400,500,700|Material+Icons' }
    ]
  },
}
```

## 3-2. アイコンフォントの読み込みを設定する。（npm install）
ローカルにインストールする方式。対象フォントは[ material-design-icons-iconfont ]です。
```
$ npm install material-design-icons-iconfont -D
```
[ @/plugins/vuetify.js ]を作成して、以下を記述。
```
[ @/plugins/vuetify.js ]
import 'material-design-icons-iconfont/dist/material-design-icons.css'
import Vue from 'vue'
import Vuetify from 'vuetify'

Vue.use(Vuetify, {
  icons: {
    iconfont: 'md'
  }
}
```
[ nuxt.config.js ] ファイルにプラグイン追加。
```
[ nuxt.config.js ]
  ##省略
  modules: [
    '@nuxtjs/vuetify'
  ],
  vuetify: {
    ##省略
  },
  plugins: [
    '@/plugins/vuetify'
  ],
  ##省略
```
これで、GoogleIconFontが読み込めるようになる。