<?php

namespace App\Http\Controllers;

use App\Http\Requests\ProfileUpdateRequest;
use App\Models\User;
use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Redirect;
use Inertia\Inertia;
use Inertia\Response;

class ProfileController extends Controller
{
    /**
     * Display the user's profile form.
     */
    public function index()
{
        return Inertia::render('Profil', [
            'title' => 'Profil'
        ]);
    }

    public function update(Request $request) {
        $data = User::where('id', auth()->user()->id)->get();
        User::where('id', auth()->user()->id)->update([
            'name' => $request->nama,
            'nis' => $request->nis,
            'role' => $data[0]->role,
            'jurusan' => $request->jurusan,
            'kelas' => $request->kelas,
            'jenis_kelamin' => $request->kelamin,
            'password' => $data[0]->password
        ]);
    }

    /**
     * Update the user's profile information.
     */
}
