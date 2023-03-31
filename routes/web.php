<?php

use App\Http\Controllers\homeController;
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

Route::get('/', [homeController::class, 'index']);

Route::get('/rencana', [rencanaController::class, 'index']);
Route::get('/ruangan', [ruanganController::class, 'index']);

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

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

require __DIR__ . '/auth.php';
