<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Recovery;

class RecoveryController extends Controller
{
    public function recoveryAllData(){
        $result = Recovery::all();
        return $result;
    }//End Method
}
