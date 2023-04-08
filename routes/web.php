<?php

use App\Http\Controllers\dashboardController;
use App\Http\Controllers\homeController;
use App\Http\Controllers\loginController;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\rencanaController;
use App\Http\Controllers\ruanganController;
use App\Models\Rencana;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

// Route::get('/', function () {
    //     return Inertia::render('Welcome', [
        //         'canLogin' => Route::has('login'),
//         'canRegister' => Route::has('register'),
//         'laravelVersion' => Application::VERSION,
//         'phpVersion' => PHP_VERSION,
//     ]);
// });

Route::middleware('guest')->group(function () {
    Route::get('/login', [loginController::class, 'index'])->name('login');
    Route::post('/login', [loginController::class, 'login']);
});
Route::get('/logout', [loginController::class, 'logout']);

Route::middleware('auth')->group(function () {
    Route::get('/', [homeController::class, 'index']);
    Route::get('/rencana', [rencanaController::class, 'index']);
    Route::get('/rencana/{id}', [rencanaController::class, 'show']);
    Route::get('/rencana/tambah-rencana', [rencanaController::class, 'create']);
    Route::post('/rencana/tambah-rencana', [rencanaController::class, 'store']);
    Route::get('/ruangan', [ruanganController::class, 'index']);
    Route::get('/profil', [ProfileController::class, 'index']);
});

Route::get('/dashboard/home', [dashboardController::class, 'index']);
Route::get('/dashboard/konfirmasi-kegiatan', [dashboardController::class, 'edit']);
Route::post('/dashboard/konfirmasi-kegiatan', [dashboardController::class, 'update']);
Route::post('/dashboard/tolak-kegiatan', [dashboardController::class, 'tolak']);
Route::post('/dashboard/hapus-kegiatan', [dashboardController::class, 'hapus']);
Route::get('/dashboard/users', [dashboardController::class, 'users']);
Route::get('/dashboard/users/tambah-user', [dashboardController::class, 'create_user']);
Route::post('/dashboard/users/tambah-users', [dashboardController::class, 'store_users']);
Route::post('/dashboard/users/tambah-user', [dashboardController::class, 'store_user']);
Route::delete('/dashboard/users/{id}', [dashboardController::class, 'destroy_user']);
Route::get('/dashboard/users/{id}', [dashboardController::class, 'edit_user']);
Route::post('/dashboard/users/{id}', [dashboardController::class, 'update_user']);


Route::get('/tes', function () {
    $testing = Rencana::latest()->get();
    $data = DB::table('rencanas')
        ->leftJoin('ruangans', 'ruangans.id', '=', 'rencanas.id_ruangan')
        ->select('rencanas.*', 'ruangans.nama_ruangan', 'ruangans.status_ruangan')
        ->latest()
        ->get();
    return Inertia::render('Tes', [
        'testing' => $data,
        'oi' => Rencana::latest()->get()
    ]);
    // return response()->json($testing);
});





Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');
require __DIR__ . '/auth.php';
