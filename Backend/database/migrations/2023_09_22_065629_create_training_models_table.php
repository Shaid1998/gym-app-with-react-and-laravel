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
        Schema::create('training_models', function (Blueprint $table) {
            $table->id();
            $table->string('training_top_title')->nullable();
            $table->text('training_top_sub_title')->nullable();
            $table->string('taining_title')->nullable();
            $table->text('taining_details')->nullable();
            $table->string('training_image')->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('training_models');
    }
};
