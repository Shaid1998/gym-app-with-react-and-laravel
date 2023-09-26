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
        $validator = Validator::make($request->all(),
            [
            'fname'=> 'required|max:191',
            'lname'=> 'required|max:191',
            'email'=> 'required|email|max:191',
            'phone'=> 'required|numeric|max:10|min:10',
            ]
        );

        if($validator->fails()){
            return response()->json([
                'validate_err' => $validator->messages()
            ]);
        }else{
           $result = PersonalTrainer::insert([
            'fname' => $request->fname,
            'lname' => $request->lname,
            'email' => $request->email,
            'phone' => $request->phone
            ]);

            return response()->json([
                'status'=> 200,
                'message' => "Send Successfully"
            ]);
        }
        
    }
}
