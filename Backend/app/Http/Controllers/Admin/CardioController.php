<?php

namespace App\Http\Controllers\Admin;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Models\Cardio;

class CardioController extends Controller
{
    public function CardioAllData(){
        $result = Cardio::all();
        return $result;
    }//End Method
}
