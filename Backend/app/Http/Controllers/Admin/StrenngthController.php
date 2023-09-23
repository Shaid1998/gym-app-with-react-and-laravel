<?php

namespace App\Http\Controllers\Admin;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Models\Strength;

class StrenngthController extends Controller
{
    public function StrengthAllData(){
        $result = Strength::all();
        return $result;
    }//End Method
}
