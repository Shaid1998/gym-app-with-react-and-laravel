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
        Schema::create('why_us', function (Blueprint $table) {
            $table->id();
            $table->string('why_us_title')->nullable();
            $table->string('why_us_sub_title')->nullable();
            $table->string('why_us_option_1')->nullable();
            $table->string('why_us_option_2')->nullable();
            $table->string('why_us_option_3')->nullable();
            $table->string('why_us_option_4')->nullable();
            $table->string('why_us_option_5')->nullable();
            $table->string('why_us_option_6')->nullable();
            $table->string('why_us_image')->nullable();
            $table->string('why_us_video')->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('why_us');
    }
};
