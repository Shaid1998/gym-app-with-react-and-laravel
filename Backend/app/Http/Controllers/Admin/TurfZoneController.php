<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\TurfZone;

class TurfZoneController extends Controller
{
    public function turfZoneAllData(){
        $result = TurfZone::all();
        return $result;
    }//End Method
}
