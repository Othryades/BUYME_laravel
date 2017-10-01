<?php

use Illuminate\Support\Facades\DB;
use App\Models\tasks;

Route::get('/', function() {

    $tasks = DB::select("SELECT * FROM `tasks`");
	return View::make('hello', compact('tasks'));

});


Route::get('/list_todo', function() {

    $tasks = DB::select("SELECT * FROM `tasks`");
	return $tasks;

});

