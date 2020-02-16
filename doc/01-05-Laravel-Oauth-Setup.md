# LarabelPassportの実装
laravelpassportを使用して、API認証を実装する。  
```
ルート確認コマンド
php artisan route:list
キャッシュクリアコマンド
php artisan cache:clear
php artisan config:clear
php artisan route:clear
php artisan view:clear
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

## 3. Passportのテーブルの値設定
作成したテーブルにプリセット設定を注入
```
$ php artisan passport:install
```
ここでClient IDとClient Secretが表示されるので  
**Client ID=2のSecretを控えおく**。後で使用。
```
Personal access client created successfully.
Client ID: 1
Client secret: ########################################
Password grant client created successfully.
Client ID: 2
Client secret: ######################################## <-- ここの部分
```
**.envに追加しておく**
```
CLIENT_SECRET_CODE=##############
```

## 4. Passportの各設定ファイル

**[ app/User.php ]の変更**
```
namespace App;

use Illuminate\Notifications\Notifiable;
use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Laravel\Passport\HasApiTokens; <-- 追加

class User extends Authenticatable
{
    use HasApiTokens, Notifiable; <-- HasApiTokens追加
```

**[ app/Providers/AuthServiceProvider.php ]**
```
namespace App\Providers;

use Laravel\Passport\Passport;   <- 追加
use Illuminate\Support\Facades\Gate;
use Illuminate\Foundation\Support\Providers\AuthServiceProvider as ServiceProvider;

class AuthServiceProvider extends ServiceProvider
{
    protected $policies = [
        // 'App\Model' => 'App\Policies\ModelPolicy',
    ];

    public function boot()
    {
        $this->registerPolicies();

        Passport::routes();  <- 追加
    }
}

```

**[ app/config/auth.php ]**
```
    'guards' => [
        'web' => [
            'driver' => 'session',
            'provider' => 'users',
        ],

        'api' => [
            //'driver' => 'token',
            'driver' => 'passport',  <- ここを変更
            'provider' => 'users',
            'hash' => false,
        ],
    ],

```

## 5. Passportのルート変更

LaravelのoauthをAPIから実施させるためにルートを変更
**[ app/Providers/AuthServiceProvider.php ]**
```
    public function boot()
    {
        $this->registerPolicies();
        //通常設定
        //Passport::routes();
        $callback = null;  <- ここを追加
        $options = [       <- ここを追加
            'prefix' => 'api/oauth',      <- ここを追加
            'namespace' => '\Laravel\Passport\Http\Controllers',  <- ここを追加
        ];                 <- ここを追加
        Passport::routes($callback, $options);  <- ここを追加
        //
    }
```
**一旦ルートのキャッシュをクリアして、ルートを確認。**
```
php artisan route:clear
php artisan route:list
```