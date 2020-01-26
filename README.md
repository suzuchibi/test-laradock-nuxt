## Laradock & Nuxt & Vuetify (ESlint) for VScode...

Setting VScode [ .vscode/setting.json ]
```
{
  "editor.tabSize": 2,
  "editor.renderWhitespace": "all",
  "editor.wordWrap": "on",
  "editor.formatOnSave": false,
  "editor.detectIndentation": true,
  "eslint.enable": true,
  "files.associations": {
    "*.vue": "vue"
  },
  "eslint.validate": [
    "javascript",
    "vue"
  ],
  "eslint.workingDirectories": [
    "./src"
  ],
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": true
  }
}
```