## AdminからAPIにアクセスするために、CORS対策を行う
ルート確認コマンド
```
php artisan route:list
```

## 1. CORS対策の実装

1. laravelのCORSライブラリ「fruitcake/laravel-cors」を使用する。  
以前使用していた「barryvdh/laravel-cors」は廃止。こちらの方が設定が楽。
```
$ composer require fruitcake/laravel-cors
```

2. 各ファイルを設定する。  
**[ app/Http/Kernel.php ]**  
"$middleware" の配列に追加する（グローバル設定）
```
protected $middleware = [
    /* 省略 */
    \Fruitcake\Cors\HandleCors::class,
]
```

3. 設定ファイル「cors.php」を作成
```
$ php artisan vendor:publish --tag="cors"
```
**[ config/cors.php ]**  
APIのみにCORS対策する
```
    'paths' => ['api/*'],
```

4. 完了したら、Laravelのキャッシュクリア
```
$ php artisan config:clear
```