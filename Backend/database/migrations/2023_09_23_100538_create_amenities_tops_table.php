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
        Schema::create('amenities_tops', function (Blueprint $table) {
            $table->id();
            $table->string('aminities_top_title')->nullable();
            $table->text('aminities_top_Description')->nullable();
            $table->string('aminities_top_video')->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('amenities_tops');
    }
};
