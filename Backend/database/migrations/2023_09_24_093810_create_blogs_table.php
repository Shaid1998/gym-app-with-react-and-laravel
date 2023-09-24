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
        Schema::create('blogs', function (Blueprint $table) {
            $table->id();
            $table->string('blog_short_title')->nullable(); 
            $table->text('blog_short_description')->nullable(); 
            $table->string('blog_long_title')->nullable(); 
            $table->text('blog_details')->nullable(); 
            $table->string('blog_total_view')->nullable(); 
            $table->string('blog_image')->nullable(); 
            $table->string('blog_total_comments')->nullable(); 
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('blogs');
    }
};
