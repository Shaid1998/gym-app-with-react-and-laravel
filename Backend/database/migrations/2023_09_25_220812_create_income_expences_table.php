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
        Schema::create('income_expences', function (Blueprint $table) {
            $table->id();
            $table->string('January')->nullable();
            $table->string('February')->nullable();
            $table->string('March')->nullable();
            $table->string('April')->nullable();
            $table->string('May')->nullable();
            $table->string('June')->nullable();
            $table->string('July')->nullable();
            $table->string('August')->nullable();
            $table->string('September')->nullable();
            $table->string('October')->nullable();
            $table->string('November')->nullable();
            $table->string('December')->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('income_expences');
    }
};
