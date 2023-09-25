<?php

namespace App\Http\Controllers\Admin;
use App\Http\Controllers\Controller;
use App\Models\PersonalTrainer;
use App\Models\Subscriber;

use Illuminate\Http\Request;

class SubscribeDataController extends Controller
{   
    public function Trainertdata(){
        $data = PersonalTrainer::all();
        return view('admin.index', compact('data'));
    }//End Method

    public function SubscriberData(){
        $data = Subscriber::all();
        return view('admin.subscriber_index', compact('data'));
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
