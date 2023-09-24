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
        Schema::create('tannings', function (Blueprint $table) {
            $table->id();
            $table->string('Tanning_title')->nullable();
            $table->text('Tanning_Description')->nullable();
            $table->string('Tanning_video')->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('tannings');
    }
};
