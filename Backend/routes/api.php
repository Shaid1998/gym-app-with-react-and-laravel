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
use App\Http\Controllers\Admin\JoinController;
use App\Http\Controllers\Admin\FooterController;
use App\Http\Controllers\Admin\CardioController;
use App\Http\Controllers\Admin\FacilitiesController;
use App\Http\Controllers\Admin\StrenngthController;
use App\Http\Controllers\Admin\AminitiesController;



// Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
//     return $request->user();
// });

//Training Route
Route::get('/alltraining', [TrainingController::class,'onAllSelect']);
Route::post('/senddata', [SubscribeDataController::class,'sendclientdata']);
Route::get('/allsubscribe', [SubscribeDataController::class,'clientdata']);
Route::get('/traininghome', [TrainingController::class,'trainingAllData']);
Route::get('/trainingfloor', [TrainingController::class,'trainingFloorAllData']);

//WHY US Controller
Route::get('/whyusall', [WhyUsController::class,'whyUsAllData']);

//Experience Controller
Route::get('/experienceall', [ExperienceController::class,'experienceAllData']);

//Recovery Controller
Route::get('/recoveryall', [RecoveryController::class,'recoveryFristData']);
Route::get('/recoverylastall', [RecoveryController::class,'recoveryLastData']);

//TURF ZONE Controller
Route::get('/turfzoneall', [TurfZoneController::class,'turfZoneAllData']);

//Atmosphere Controller
Route::get('/atmosphereall', [AtmosphereController::class,'atmosphereAllData']);

//Join Controller
Route::get('/joinhomeall', [JoinController::class,'JoinHomeAllData']);

//Footer Controller
Route::get('/footerall', [FooterController::class,'FooterAllData']);

//Cardio Controller
Route::get('/cardioall', [CardioController::class,'CardioAllData']);

//Facilities Controller
Route::get('/facilitiesall', [FacilitiesController::class,'FacilitiesAllData']);

//Strength Controller
Route::get('/strengthall', [StrenngthController::class,'StrengthAllData']);

//Aminities Controller
Route::get('/aminitiestopall', [AminitiesController::class,'AminitiesTopAllData']);
Route::get('/kidscluball', [AminitiesController::class,'KidsClubAllData']);
Route::get('/lockerall', [AminitiesController::class,'LockerAllData']);
Route::get('/tanningall', [AminitiesController::class,'TanningAllData']);