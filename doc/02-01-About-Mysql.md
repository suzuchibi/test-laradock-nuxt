# Mysqlについて
Laradockに設定したMysqlについて。色々と癖があるので注意。。。

## Mysqlバージョンについて
laradockの標準はLatest設定のため、バージョンが8.0以上になります。<br>
これはパスワード方式などに変更があるため、注意が必要。<br>
使用しているサーバーが5.7だったので、そちらを使用します。

## Mysql コンテナーのリビルドについて
Mysqlコンテナーをリビルドする際、注意があります。<br>
[ laradock/.env ]のバージョン指定を変更する。
```
MYSQL_VERSION=5.7 <- だいたい242行目
```
つづいて[ laradock/.env ]内のDATA_PATH_HOSTで設定したmysqlデータを掃除します。
```
DATA_PATH_HOST=.laradock/data <- この中のmysqlをクリーンに。。。
```
```
$ rm -rf .laradock/data/mysql
$ docker rmi laradock_mysql -f
$ docker rmi mysql -f
```
mysqlをビルドし直します。全てビルドし直させたいので、--no-cacheオプションをつけておきます。
```
$ docker-compose build --no-cache mysql
ターミナルも再起動した方がいいかも。。。
```
mysqlにログインできるようになります。
```
$ docker-compose exec mysql bash
```

## 1. 操作方法
Mysqlコンテナにログインした状態で、rootでログインします。パスワードはroot
```
# mysql -u root -p
Enter password: <- パスワードはroot
```
データベースを確認します。
```
mysql> show databases;
+--------------------+
| Database           |
+--------------------+
| information_schema |
| default            |
| mysql              |
| performance_schema |
+--------------------+
```