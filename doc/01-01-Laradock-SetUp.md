## 1. Laradockのクローン
laradockをクローン。クローンしたらgit管理を外しておきます。

```
$ git clone https://github.com/Laradock/laradock.git
$ cd laradock
$ rm -rf .git/
```

## 2. [ .env ]の作成
[ laradock ]の[ .env-example ]ファイルを[ .env ]としてコピーする。
```
$ cp env-example .env
```
**[ .env ]**
```
# Choose storage path on your machine. For all storage systems
# DATA_PATH_HOST=~/.laradock/data
DATA_PATH_HOST=.laradock/data  <-ここ変更

### PHP Version ###########################################

# Select a PHP version of the Workspace **** values: 7.3 - 7.2 - 7.1 - 7.0 - 5.6
PHP_VERSION=7.2

### MYSQL #################################################

MYSQL_VERSION=5.7
MYSQL_DATABASE=default
```

## 3. Nuxt用のPortを確保
Nuxt用のPortを確保をするために、[ docker-compose.yml ]を編集します。
```
workspace:
  ~省略~
  ports:
    - "${WORKSPACE_SSH_PORT}:22"
    - "3000:3000"  <-これ追記
  ~省略~
```

## 4. Docker起動
dockerを起動させます。
```
$ docker-compose up -d apache2 workspace
```
または
```
$ docker-compose build apache2
```

**これにて、Laradockの設定は完了。。。**