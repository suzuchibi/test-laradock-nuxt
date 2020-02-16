# LarabelPassportの実装
laravelpassportを使用して、API認証を実装する。  
ルート確認コマンド
```
php artisan route:list
```

## 1. laravelにAuth設定

1. Laravelにログイン機能を実装する。（ver5.8）
```
$ php artisan make:auth
```
**上記は5.8まで6.0以降は下記**  
1. Laravel UI のインストール
```
$ composer require laravel/ui --dev
$ php artisan ui vue --auth
```
2. パッケージをインストールして、SCSSを更新する。
```
$ npm install
$ npm run dev
```
## 2. laravel Passportを実装

1. Laravel/Passportをインストール
```
$ composer require laravel/passport
```

2. マイグレーションを実行。Oauthテーブルを作成。
```
$ php artisan migrate
```
```
Migrating: 2016_06_01_000001_create_oauth_auth_codes_table
Migrated:  2016_06_01_000001_create_oauth_auth_codes_table (0.11 seconds)
Migrating: 2016_06_01_000002_create_oauth_access_tokens_table
Migrated:  2016_06_01_000002_create_oauth_access_tokens_table (0.11 seconds)
Migrating: 2016_06_01_000003_create_oauth_refresh_tokens_table
Migrated:  2016_06_01_000003_create_oauth_refresh_tokens_table (0.09 seconds)
Migrating: 2016_06_01_000004_create_oauth_clients_table
Migrated:  2016_06_01_000004_create_oauth_clients_table (0.07 seconds)
Migrating: 2016_06_01_000005_create_oauth_personal_access_clients_table
Migrated:  2016_06_01_000005_create_oauth_personal_access_clients_table (0.03 seconds)
```
```
mysql> show tables;
+-------------------------------+
| Tables_in_app                 |
+-------------------------------+
| migrations                    |
| oauth_access_tokens           |
| oauth_auth_codes              |
| oauth_clients                 |
| oauth_personal_access_clients |
| oauth_refresh_tokens          |
| password_resets               |
| users                         |
+-------------------------------+
```