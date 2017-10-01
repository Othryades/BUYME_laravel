<?php

namespace App\Http\Controllers;

use App\Models\tasks;
use Illuminate\Support\Facades\DB;
use Illuminate\Routing\Controller;
use App\Http\Controllers;

class tasksController extends Controller
{

    public function list_todo()
    {
        $tasks = tasks::all();
        return $tasks;
    }

}