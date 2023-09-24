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
        Schema::create('corporate_wellnesses', function (Blueprint $table) {
            $table->id();
            $table->string('corporate_wellness_top_title')->nullable();
            $table->string('corporate_wellness_top_sub_title')->nullable();
            $table->string('corporate_wellness_topic_title_1')->nullable();
            $table->string('corporate_wellness_topic_title_2')->nullable();
            $table->text('corporate_wellness_topic_description_1')->nullable();
            $table->text('corporate_wellness_topic_description_2')->nullable();
            $table->string('corporate_wellness_topic_image_1')->nullable();
            $table->string('corporate_wellness_topic_image_2')->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('corporate_wellnesses');
    }
};
