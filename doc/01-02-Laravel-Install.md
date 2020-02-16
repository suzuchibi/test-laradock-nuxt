## Laravelプロジェクトの作成。
Laravelのプロジェクトを作成〜起動するまでの作業です。

## 1. DockerのWorkspaceにログインする。
laradock内でDockerを起動して、Workspaceへsshログインする。
```
$ cd laradock
$ docker-compose up -d apache2 workspace
$ docker-compose exec --user=laradock workspace bash
root@97879d72a823:/var/www# <- これがでたら、ログイン中
```

## 2. Laravelプロジェクトを生成する。
workspaceにログインした状態で、composerを実行する。
今回は[ src ]というディレクトリ名で作成。
```
$ composer create-project --prefer-dist laravel/laravel src
```

## 3. [ .env ]を修正する。
exit で Workspaceから一度ログアウトして、laradock内の [ .env ]を編集する。
```
# APP_CODE_PATH_HOST=../
APP_CODE_PATH_HOST=../src <- ソースコードディレクトリに変更。
```
```
# DATA_PATH_HOST=~/.laradock/data
DATA_PATH_HOST=.laradock/data
```
apache2 のドキュメントルートを変更
```
### APACHE ################################################

〜省略〜
#APACHE_DOCUMENT_ROOT=/var/www
APACHE_DOCUMENT_ROOT=/var/www/public
```
**[ .env ]を修正したら、必ずビルドしましょう。**
```
# docker-compose build --no-cache apache2
```

## 4. [ ./src/config/app.php ]を修正する。
```
'timezone' => 'Asia/Tokyo', <-タイムゾーンを変更。
```
```
'locale' => 'ja', <-文字コードを変更。
```
## 5. コンテナを再度立ち上げる
```
$ docker-compose up -d apache2 workspace <- コンテナを再度立ち上げる
```

http://localhost/ で確認する。  
  
**Laravelプロジェクト作成完了。。。**