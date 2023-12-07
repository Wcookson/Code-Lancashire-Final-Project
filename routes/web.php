<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\TestController;
use App\Http\Controllers\DashboardController;


/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "web" middleware group. Make something great!
|
*/

// if user is not logged in
Route::inertia("/", "Register");

Route::inertia("/login", "Login");




Route::post("/login", [TestController::class, 'login']);

Route::post("/register", [TestController::class, 'register']);

Route::get('/about', [TestController::class, 'index']);

Route::post("/newsletter", [TestController::class, 'subscribe']);

Route::inertia('about', 'About');


Route::middleware('checksuser')->group(function(){
    // if user is logged in

    Route::get("/dashboard", [DashboardController::class, 'index']);
    
    Route::get('/dashboards', [DashboardController::class, 'createBlog']);

    Route::inertia('logout', 'Logout');

    Route::inertia('about', 'About');

    Route::inertia('/create-reminder', 'CreateBlog');
   
    Route::post('/create-reminder', [DashboardController::class, 'createBlog']);

    Route::get('/dashboard/blog/{slug}', [DashboardController::class, 'showBlog']);

    Route::get("/blog/edit/{id}", [DashboardController::class, 'editBlog']);
   
    Route::get("/blog/delete/{id}", [DashboardController::class, 'deleteBlog']);
});