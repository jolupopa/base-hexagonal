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
        if (Schema::hasTable('addresses') && !Schema::hasTable('property_locations')) {
            Schema::rename('addresses', 'property_locations');
        }

        if (!Schema::hasTable('property_locations')) {
            Schema::create('property_locations', function (Blueprint $table) {
                $table->uuid('id')->primary();

                $table->foreignUuid('company_id')->constrained()->cascadeOnDelete();
                
                $table->string('addressable_type');
                $table->uuid('addressable_id');
                $table->index(['addressable_type', 'addressable_id'], 'locations_morph_index');
                
                $table->string('ubigeo_id', 6);
                $table->foreign('ubigeo_id')->references('id')->on('ubigeos');
                $table->string('address');
                $table->string('reference')->nullable();
                
                $table->decimal('latitude', 10, 7)->nullable();
                $table->decimal('longitude', 10, 7)->nullable();
                
                $table->timestamps();
                $table->softDeletes();
            });
        }
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('property_locations');
    }
};
