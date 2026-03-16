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
        if (!Schema::hasTable('listings')) {
            Schema::create('listings', function (Blueprint $table) {
                $table->uuid('id')->primary();
                $table->foreignUuid('company_id')->constrained()->cascadeOnDelete();
                
                $table->string('listable_type');
                $table->uuid('listable_id');
                $table->index(['listable_type', 'listable_id'], 'listings_morph_index');
                
                $table->decimal('price', 15, 2);
                $table->string('currency', 3)->default('PEN');
                $table->text('description')->nullable();
                
                $table->enum('status', [
                    'draft', 'active', 'pending', 'reserved', 
                    'sold', 'rented', 'expired', 'withdrawn', 'cancelled'
                ])->default('active');
                
                $table->timestamp('starts_at')->nullable();
                $table->timestamp('ends_at')->nullable();
                $table->integer('days_on_market')->nullable();
                
                $table->jsonb('price_history')->nullable();
                $table->jsonb('changes')->nullable();
                
                $table->foreignUuid('created_by')->nullable()->constrained('users')->nullOnDelete();
                
                $table->timestamps();
                $table->softDeletes();
                
                $table->index('status');
            });
        }
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('listings');
    }
};
