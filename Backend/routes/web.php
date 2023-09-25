<?php

use App\Http\Controllers\ProfileController;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AdminController;
use App\Http\Controllers\Admin\SubscribeDataController;




Route::get('/', function () {
    return view('admin.admin_login');
});

//admin
Route::get('/admin/login', [AdminController::class, 'AdminLogin']);
Route::get('/admin/income/expence', [AdminController::class, 'AdminIncomeExpence'])->name('income.expence.data');
Route::get('/admin/dashboard', [AdminController::class, 'AdminDashboard'])->name('admin.dashobard');
Route::get('/admin/logout', [AdminController::class, 'AdminDestroy'])->name('admin.logout');
Route::get('/admin/profile', [AdminController::class, 'AdminProfile'])->name('admin.profile');
Route::post('/admin/profile/store', [AdminController::class, 'AdminProfileStore'])->name('admin.profile.store');
Route::get('/admin/change/password', [AdminController::class, 'AdminChangePassword'])->name('admin.change.password');
Route::post('/admin/update/password', [AdminController::class, 'AdminUpdatePassword'])->name('update.password');
Route::get('/subscriber/data', [SubscribeDataController::class, 'SubscriberData'])->name('subscriber.data');
Route::get('/trainer/data', [SubscribeDataController::class, 'Trainertdata'])->name('trainer.data');

Route::controller(AdminController::class)->group(function(){
    Route::get('/all/admin' , 'AllAdmin')->name('all.admin');
    Route::get('/add/admin' , 'AddAdmin')->name('add.admin');
    Route::post('/admin/user/store' , 'AdminUserStore')->name('admin.user.store');
    Route::post('/admin/user/update/{id}' , 'AdminUserUpdate')->name('admin.user.update');
   
   });


Route::get('/dashboard', function () {
    return view('admin.index');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

require __DIR__.'/auth.php';
