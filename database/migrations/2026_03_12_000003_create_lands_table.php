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
        Schema::create('lands', function (Blueprint $table) {
            $table->uuid('id')->primary();
            $table->foreignUuid('company_id')->constrained()->cascadeOnDelete();
            $table->foreignUuid('user_id')->constrained()->cascadeOnDelete();
            
            $table->string('title');
            $table->text('description')->nullable();
            
            $table->decimal('area_total', 15, 2);
            $table->enum('zoning', ['residential', 'commercial', 'industrial', 'agricultural', 'other'])->nullable();
            
            $table->decimal('price', 15, 2);
            $table->string('currency', 3)->default('USD');
            
            $table->enum('status', ['draft', 'published', 'archived', 'sold'])->default('draft');
            
            $table->jsonb('metadata')->nullable();
            $table->timestamps();
            $table->softDeletes();
            
            $table->index('company_id');
            $table->index('status');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('lands');
    }
};
