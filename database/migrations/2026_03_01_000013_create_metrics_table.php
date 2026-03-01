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
        Schema::create('metrics', function (Blueprint $table) {
            $table->uuid('id')->primary();
            $table->foreignUuid('company_id')->constrained()->cascadeOnDelete();
            
            $table->string('key'); // e.g., 'leads_captured', 'credits_spent'
            $table->integer('value')->default(0);
            $table->string('period')->default('daily'); // daily, monthly, total
            $table->date('date')->index();
            
            $table->json('metadata')->nullable();
            $table->timestamps();
            
            $table->unique(['company_id', 'key', 'period', 'date']);
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('metrics');
    }
};
