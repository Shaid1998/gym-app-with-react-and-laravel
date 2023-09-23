<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Recovery;

class RecoveryController extends Controller
{
    public function recoveryFristData(){
        $result= Recovery::orderBy('created_at','asc')->take(1)->get();
        return $result;
    }//End Method

    public function recoveryLastData(){
        $result= Recovery::orderBy('created_at','desc')->take(1)->get();
        return $result;
    }//End Method
}
