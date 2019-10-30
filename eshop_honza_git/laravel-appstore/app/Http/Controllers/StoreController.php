<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\App;

class StoreController extends Controller
{
    public function index()
    {
        $apps = App::select()
            ->with('category')
            ->with('genres')
            ->orderBy('title', 'asc')
            ->limit(100)
            // ->offset(1000)
            ->get();

        $index_view = view('index', compact('apps'));

        return $index_view;
    }
}
