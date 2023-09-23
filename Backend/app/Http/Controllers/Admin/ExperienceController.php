<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Experience;

class ExperienceController extends Controller
{
    public function experienceAllData(){
        $result = Experience::all();
        return $result;
    }//End Method
}
