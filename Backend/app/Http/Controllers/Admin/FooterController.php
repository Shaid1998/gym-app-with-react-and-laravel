<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Footer;
use App\Models\Career;

class FooterController extends Controller
{
    public function FooterAllData(){
        $result = Footer::all();
        return $result;
    }//End Method

    public function CareerAllData(){
        $result = Career::all();
        return $result;
    }//End Method
}
