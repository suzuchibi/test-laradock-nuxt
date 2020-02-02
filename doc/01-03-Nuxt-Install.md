# Nuxtプロジェクトの作成
Nuxtプロジェクトの作成〜Local起動までの流れ。

## 1. Nuxtプロジェクト作成
今回は[ webnuxt ]という名前で作成。  
質問では、ESlint StylelintをONにする。

```
$ npx create-nuxt-app webnuxt
```

## 2. package.json の移動。
Nuxt & Laravel用に package.json を変更する。<br>
->プロジェクトルートの package.json に Nuxt側 package.json を入れる。<br>
-> ./webnuxt/nuxt.config.js をプロジェクトルートへ。
```
$ rm package.json
$ mv ./nuxt/package.json package.json
$ mv ./nuxt/nuxt.config.js nuxt.config.js
```

## 3. package.json の変更。
[ package.json ]
```
{
    "private": true,
    "scripts": {
        "dev": "npm run development",
        "development": "cross-env NODE_ENV=development node_modules/webpack/bin/webpack.js --progress --hide-modules --config=node_modules/laravel-mix/setup/webpack.config.js",
        "watch": "npm run development -- --watch",
        "watch-poll": "npm run watch -- --watch-poll",
        "hot": "cross-env NODE_ENV=development node_modules/webpack-dev-server/bin/webpack-dev-server.js --inline --hot --config=node_modules/laravel-mix/setup/webpack.config.js",
        "prod": "npm run production",
        "production": "cross-env NODE_ENV=production node_modules/webpack/bin/webpack.js --no-progress --hide-modules --config=node_modules/laravel-mix/setup/webpack.config.js",
        "_comment": "↓↓↓ ここから下はNuxt用 ↓↓↓",
        "nux": "HOST=0.0.0.0 PORT=3000 nuxt",
        "build": "nuxt build",
        "start": "nuxt start",
        "generate": "nuxt generate",
        "lint": "eslint --ext .js,.vue --ignore-path .gitignore ."
    },
    "dependencies": {
        "nuxt": "^2.0.0",
        "@nuxtjs/axios": "^5.3.6",
        "@nuxtjs/dotenv": "^1.4.0"
    },
    "devDependencies": {
        "@nuxtjs/eslint-config": "^1.0.1",
        "@nuxtjs/eslint-module": "^1.0.0",
        "@nuxtjs/stylelint-module": "^3.1.0",
        "@nuxtjs/vuetify": "^1.10.2",
        "axios": "^0.19",
        "babel-eslint": "^10.0.1",
        "cross-env": "^5.1",
        "eslint": "^6.1.0",
        "eslint-plugin-nuxt": ">=0.4.2",
        "laravel-mix": "^5.0.1",
        "lodash": "^4.17.13",
        "resolve-url-loader": "^2.3.1",
        "sass": "^1.15.2",
        "sass-loader": "^8.0.0",
        "stylelint": "^10.1.0"
    }
}
```

## 4. nuxt.config.json の変更。
[ nuxt.config.json ]
```
export default {
  mode: 'spa',
  /*
  ** Target sourse directory
  */
  srcDir: './webnuxt',
  ~省略~
  watchers: {
    webpack: {
      poll: true
    }
  }
}
```

## 5. npm install を実行。
プロジェクトルート内で npm install を実行する。node_module をインストールする。  
Nuxt側の [ node_module ]は削除して構わない。
```
$ npm install
```