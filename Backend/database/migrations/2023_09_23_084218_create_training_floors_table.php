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
        Schema::create('training_floors', function (Blueprint $table) {
            $table->id();
            $table->string('Training_floor_title')->nullable();
            $table->text('Training_floor_description')->nullable();
            $table->string('Training_floor_image')->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('training_floors');
    }
};
