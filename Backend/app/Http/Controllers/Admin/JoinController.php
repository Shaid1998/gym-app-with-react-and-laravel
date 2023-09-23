<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\JoinHome;

class JoinController extends Controller
{
    public function JoinHomeAllData(){
        $result = JoinHome::all();
        return $result;
    }//End Method
}
