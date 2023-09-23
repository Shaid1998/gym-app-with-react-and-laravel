<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\WhyUs;

class WhyUsController extends Controller
{
    public function whyUsAllData(){
        $result = WhyUs::all();
        return $result;
    }//End Method
}
