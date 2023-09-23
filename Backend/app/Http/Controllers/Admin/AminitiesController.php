<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\AmenitiesTop;

class AminitiesController extends Controller
{
    public function AminitiesTopAllData(){
        $result = AmenitiesTop::all();
        return $result;
    }//End Method
}
