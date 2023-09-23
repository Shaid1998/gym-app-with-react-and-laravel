<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\TrainingModel;
use App\Models\Training;
use App\Models\TrainingFloor;

class TrainingController extends Controller
{
    public function onAllSelect(){
        $result = TrainingModel::all();
        return $result;
    }//End Method

    public function trainingAllData(){
        $result = Training::all();
        return $result;
    }//End Method
    public function trainingFloorAllData(){
        $result = TrainingFloor::all();
        return $result;
    }//End Method
}
