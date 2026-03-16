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
        // Limpiar tabla intermedia antigua si existe
        Schema::dropIfExists('amenity_property');

        Schema::create('amenityables', function (Blueprint $table) {
            $table->foreignUuid('amenity_id')->constrained()->cascadeOnDelete();
            $table->uuidMorphs('amenityable');
            
            $table->primary(['amenity_id', 'amenityable_type', 'amenityable_id'], 'amenityables_primary');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('amenityables');
    }
};
