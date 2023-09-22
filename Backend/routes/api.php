<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Admin\TrainingController;
use App\Http\Controllers\Admin\SubscribeDataController;



// Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
//     return $request->user();
// });

//Training Route
Route::get('/alltraining', [TrainingController::class,'onAllSelect']);
Route::post('/senddata', [SubscribeDataController::class,'sendclientdata']);
