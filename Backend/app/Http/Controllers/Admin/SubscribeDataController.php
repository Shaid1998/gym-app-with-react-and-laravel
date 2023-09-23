<?php

namespace App\Http\Controllers\Admin;
use App\Http\Controllers\Controller;
use App\Models\PersonalTrainer;

use Illuminate\Http\Request;

class SubscribeDataController extends Controller
{   
    public function clientdata(){
        $result = PersonalTrainer::all();
        return $result;
    }//End Method


    public function sendclientdata(Request $request){
        $result = PersonalTrainer::insert([
            'fname' => $request->fname,
            'lname' => $request->lname,
            'email' => $request->email,
            'phone' => $request->phone
        ]);

        if($result == true){
            return 1;
        }else{
            return 0;
        }
    }
}
