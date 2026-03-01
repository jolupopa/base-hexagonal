<?php

namespace App\Providers;

use Illuminate\Support\ServiceProvider;

class AppServiceProvider extends ServiceProvider
{
    /**
     * Register any application services.
     */
    public function register(): void
    {
        $this->app->bind(
            \App\Modules\Properties\Domain\Services\GeocodingServiceInterface::class,
            function ($app) {
                return new \App\Modules\Properties\Infrastructure\Services\GoogleGeocodingService(
                    (string) config('services.google.maps_api_key', env('GOOGLE_MAPS_API_KEY', ''))
                );
            }
        );

        $this->app->bind(
            \App\Modules\CRM\Domain\Services\AIServiceInterface::class,
            function ($app) {
                return new \App\Modules\CRM\Infrastructure\Services\GeminiService(
                    config('services.gemini.api_key', env('GEMINI_API_KEY'))
                );
            }
        );
    }

    /**
     * Bootstrap any application services.
     */
    public function boot(): void
    {
        //
    }
}
