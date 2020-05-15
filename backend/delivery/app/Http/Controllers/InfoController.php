<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;

class InfoController extends Controller
{
    public function index() {
        return 
        response()
        ->json(\Cache::get('track_url'))
        ->header('Access-Control-Allow-Origin', '*')
        ->header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
    }
}