<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Blog;

class BlogController extends Controller
{
    public function BlogAllData(){
        $result = Blog::all();
        return $result;
    }//End Method
}
