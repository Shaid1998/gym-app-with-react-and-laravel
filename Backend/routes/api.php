<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Admin\TrainingController;
use App\Http\Controllers\Admin\SubscribeDataController;
use App\Http\Controllers\Admin\WhyUsController;
use App\Http\Controllers\Admin\ExperienceController;
use App\Http\Controllers\Admin\RecoveryController;
use App\Http\Controllers\Admin\TurfZoneController;
use App\Http\Controllers\Admin\AtmosphereController;



// Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
//     return $request->user();
// });

//Training Route
Route::get('/alltraining', [TrainingController::class,'onAllSelect']);
Route::post('/senddata', [SubscribeDataController::class,'sendclientdata']);
Route::get('/allsubscribe', [SubscribeDataController::class,'clientdata']);
Route::get('/traininghome', [TrainingController::class,'trainingAllData']);

//WHY US Controller
Route::get('/whyusall', [WhyUsController::class,'whyUsAllData']);

//Experience Controller
Route::get('/experienceall', [ExperienceController::class,'experienceAllData']);

//Recovery Controller
Route::get('/recoveryall', [RecoveryController::class,'recoveryAllData']);

//TURF ZONE Controller
Route::get('/turfzoneall', [TurfZoneController::class,'turfZoneAllData']);

//Atmosphere Controller
Route::get('/atmosphereall', [AtmosphereController::class,'atmosphereAllData']);

