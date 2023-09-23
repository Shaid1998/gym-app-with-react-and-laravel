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
        Schema::create('turf_zones', function (Blueprint $table) {
            $table->id();
            $table->string('turfzone_title_1')->nullable();
            $table->string('turfzone_title_2')->nullable();
            $table->string('turfzone_title_3')->nullable();
            $table->text('turfzone_description')->nullable();
            $table->string('turfzone_image')->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('turf_zones');
    }
};
