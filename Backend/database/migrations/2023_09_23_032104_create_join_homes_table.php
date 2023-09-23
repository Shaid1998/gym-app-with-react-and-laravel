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
        Schema::create('join_homes', function (Blueprint $table) {
            $table->id();
            $table->string('Join_Today_title')->nullable();
            $table->text('Join_Today_map')->nullable();
            $table->string('Join_Today_image')->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('join_homes');
    }
};
