<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\TrainingModel;
use App\Models\Training;

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
}
