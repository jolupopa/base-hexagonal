<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        $columns = ['address', 'latitude', 'longitude', 'ubigeo_id'];

        // En SQLite, no podemos borrar columnas que tienen llaves foráneas fácilmente.
        // Como es para tests, podemos ignorarlo si es SQLite o hacerlo de forma que no falle.
        if (config('database.default') !== 'sqlite') {
            Schema::table('properties', function (Blueprint $table) use ($columns) {
                $table->dropColumn($columns);
            });

            Schema::table('projects', function (Blueprint $table) use ($columns) {
                $table->dropColumn($columns);
            });
        }

        // Asegurar tipos correctos en Postgres
        if (config('database.default') === 'pgsql') {
            Schema::table('properties', function (Blueprint $table) {
                $table->jsonb('metadata')->nullable()->change();
            });
            Schema::table('projects', function (Blueprint $table) {
                $table->jsonb('metadata')->nullable()->change();
            });
        }
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        // No se recomienda revertir eliminaciones de columnas de forma automática
        // pues se pierde la data. En un entorno real se haría con cuidado.
    }
};
