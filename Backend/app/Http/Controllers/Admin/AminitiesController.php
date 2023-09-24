<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\AmenitiesTop;
use App\Models\KidsClub;
use App\Models\Locker;

class AminitiesController extends Controller
{
    public function AminitiesTopAllData(){
        $result = AmenitiesTop::all();
        return $result;
    }//End Method

    public function KidsClubAllData(){
        $result = KidsClub::all();
        return $result;
    }//End Method

    public function LockerAllData(){
        $result = Locker::all();
        return $result;
    }//End Method
}
