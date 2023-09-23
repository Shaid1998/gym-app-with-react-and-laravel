<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Atmosphere;

class AtmosphereController extends Controller
{
    public function atmosphereAllData(){
        $result = Atmosphere::all();
        return $result;
    }//End Method
}
