<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\TrainingModel;

class TrainingController extends Controller
{
    public function onAllSelect(){
        $result = TrainingModel::all();
        return $result;
    }//End Method
}
