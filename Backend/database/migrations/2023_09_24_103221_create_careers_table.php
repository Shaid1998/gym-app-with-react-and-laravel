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
        Schema::create('careers', function (Blueprint $table) {
            $table->id();
            $table->string('career_top_title')->nullable();
            $table->string('career_top_sub_title')->nullable();
            $table->string('career_job_title_1')->nullable();
            $table->string('career_job_title_2')->nullable();
            $table->string('career_job_title_3')->nullable();
            $table->string('career_job_title_4')->nullable();
            $table->string('career_job_title_5')->nullable();
            $table->string('career_job_title_6')->nullable();
            $table->text('career_job_description_1')->nullable();
            $table->text('career_job_description_2')->nullable();
            $table->text('career_job_description_3')->nullable();
            $table->text('career_job_description_4')->nullable();
            $table->text('career_job_description_5')->nullable();
            $table->text('career_job_description_6')->nullable();
            $table->string('career_job_image_1')->nullable();
            $table->string('career_job_image_2')->nullable();
            $table->string('career_job_image_3')->nullable();
            $table->string('career_job_image_4')->nullable();
            $table->string('career_job_image_5')->nullable();
            $table->string('career_job_image_6')->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('careers');
    }
};
