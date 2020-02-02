# LaravelとMysqlの連携
ここではLaravelとMysqlデータベースの連携の仕方です。  
ちなみに php artisan コマンドからは、  
[ $ docker-compose exec workspace bash ]  
↑Laradockユーザーではなく、ルート権限で入る。

## 1. [ ./laradock/.env ]と[ ./admin/.env ]の設定
一度Dockerのコンテナーを終了して、各[ .env ]ファイルを修正する。
```
[ ./laradock/.env ]
MYSQL_VERSION=5.5
MYSQL_DATABASE=app_admin   <- 変更前=default
MYSQL_USER=admin           <- 変更前=default
MYSQL_PASSWORD=admin       <- 変更前=secret
MYSQL_PORT=3306
MYSQL_ROOT_PASSWORD=root   <- 変更前=root
MYSQL_ENTRYPOINT_INITDB=./mysql/docker-entrypoint-initdb.d
```
```
[ ./src/.env ]
DB_CONNECTION=mysql
DB_HOST=mysql  <- 変更前=127.0.0.1
DB_PORT=3306
DB_DATABASE=app_admin <- 変更前=homestead
DB_USERNAME=admin     <- 変更前=homestead
DB_PASSWORD=admin     <- 変更前=secret
```
mysqlのリセットを実行する。  
Mysqlについてを参照。。。  
  
[ ./config/database.php ]
```
'mysql' => [
    'driver' => 'mysql',
    'url' => env('DATABASE_URL'),
    'host' => env('DB_HOST', '127.0.0.1'),
    'port' => env('DB_PORT', '3306'),
    'database' => env('DB_DATABASE', 'app_admin'), <--変更
    'username' => env('DB_USERNAME', 'admin'),     <--変更
    'password' => env('DB_PASSWORD', 'admin'),     <--変更
    'unix_socket' => env('DB_SOCKET', ''),
    'charset' => 'utf8mb4',
    'collation' => 'utf8mb4_unicode_ci',
    'prefix' => '',
    'prefix_indexes' => true,
    'strict' => true,
    'engine' => null,
    'options' => extension_loaded('pdo_mysql') ? array_filter([
        PDO::MYSQL_ATTR_SSL_CA => env('MYSQL_ATTR_SSL_CA'),
    ]) : [],
],
```

---
**Mysqlコンテナの文字コード確認**
```
show variables like "chara%";
おそらくほとんどが「latin1」になっている。。
```
[ ./laradock/mysql/my.cnf ]
```
[mysqld]
sql-mode="STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION"
character-set-server=utf8

[client]  <- これ追加
default-character-set=utf8  <- これ追加
```
**Mysqlコンテナをリフレッシュすると、utf8に設定される。。。**

## 2.ユーザーを作成する。
Laradock用のMysqlユーザーを作成します。  
WorkspaceコンテナのIPアドレスを調べる
```
$ docker ps
$ docker inspect コンテナID
```

Mysqlにユーザーを作成する。
```
mysql> create user 'admin'@'172.18.0.2' identified by 'admin';
create user 'ユーザー名'@'IPアドレス' identified by 'パスワード';
```
Dockerを再起動。。。

## [ 追記 ] Mysqlのバージョンが、5.7.7より古い場合
「絵文字」保存をサポートするために、マイグレーションにより生成されるデフォルトのインデックス用文字列長を明示的に設定する必要があります。  
[ ./app/Providers/AppServiceProvider.php ]を修正。
```
<?php

namespace App\Providers;

use Illuminate\Support\ServiceProvider;
use Illuminate\Support\Facades\Schema; <--ここを追記。

class AppServiceProvider extends ServiceProvider
{
    /**
     * Register any application services.
     *
     * @return void
     */
    public function register()
    {
        //
    }

    /**
     * Bootstrap any application services.
     *
     * @return void
     */
    public function boot()
    {
        Schema::defaultStringLength(191);  <--ここを追記。
    }
}
```
すでに php artisan migrate をしていた場合、 tableが重複してしまうので、一度リフレッシュする。
```
php artisan migrate:fresh
```
```
php artisan migrate
```
ステータス確認。
```
php artisan migrate:status
```