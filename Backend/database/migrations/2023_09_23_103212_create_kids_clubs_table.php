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
        Schema::create('kids_clubs', function (Blueprint $table) {
            $table->id();
            $table->string('Kids_Club_title')->nullable();
            $table->string('Kids_Club_time_title')->nullable();
            $table->string('Kids_Club_time_1')->nullable();
            $table->string('Kids_Club_time_2')->nullable();
            $table->text('Kids_Club_Description')->nullable();
            $table->string('Kids_Club_video')->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('kids_clubs');
    }
};
