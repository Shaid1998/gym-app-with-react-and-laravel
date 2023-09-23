<?php

namespace App\Http\Controllers\Admin;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Models\Facilitie;

class FacilitiesController extends Controller
{
    public function FacilitiesAllData(){
        $result = Facilitie::all();
        return $result;
    }//End Method
}
