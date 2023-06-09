<?php

namespace App\Http\Controllers;

use App\Models\Rencana;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Inertia\Inertia;

class dashboardController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return Inertia::render('dashboard/Home', [
            'title' => 'Dashboard Home'
        ]);
    }

    public function users()
    {
        return Inertia::render('dashboard/users/Users', [
            'users' => User::latest()->get(),
            'title' => 'Users'
        ]);
    }

    public function create_user()
    {
        return Inertia::render('dashboard/users/TambahAkun', [
            'users' => User::latest()->get()
        ]);
    }

    public function store_users(Request $request)
    {
        $data = $request->except('_token');
        foreach ($data as $key => $value) {
            // dd($value);
            User::create([
                'name' => $value['nama'],
                'nis' => $value['nis'],
                'role' => $value['role'],
                'jurusan' => $value['jurusan'],
                'kelas' => $value['kelas'],
                'jenis_kelamin' => $value['jenis_kelamin'],
                'password' => bcrypt($value['password']),
            ]);
        }
    }

    public function store_user(Request $request)
    {
        User::create([
            'name' => $request->nama,
            'nis' => $request->nis,
            'role' => $request->role,
            'jurusan' => $request->jurusan,
            'kelas' => $request->kelas,
            'jenis_kelamin' => $request->kelamin,
            'password' => bcrypt($request->password),
        ]);
    }

    public function edit_user($id)
    {
        $data = User::where('id', $id)->get();
        return Inertia::render('dashboard/users/EditUser', [
            'user' => $data[0]
        ]);
    }

    public function update_user(Request $request)
    {
        $data = User::where('id', $request->id)->get();
        User::where('id', $request->id)->update([
            'name' => $request->name,
            'nis' => $request->nis,
            'role' => $request->role,
            'jurusan' => $request->jurusan,
            'kelas' => $request->kelas,
            'jenis_kelamin' => $request->kelamin,
            'password' => $data[0]->password
        ]);

        return redirect('/dashboard/users');
    }

    public function destroy_user($id)
    {
        User::destroy($id);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit()
    {
        $data = DB::table('rencanas')
            ->where('status_rencana', '=', 'belum_konfirmasi')
            ->leftJoin('users', 'users.id', '=', 'rencanas.id_user')
            ->select('rencanas.*', 'users.name')
            ->latest()
            ->get();
        return Inertia::render('dashboard/Kegiatan', [
            'kegiatans' => $data,
            'title' => 'Konfirmasi Kegiatan'
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request)
    {
        $rencana = Rencana::where('id', $request->id)->get();
        // dd($rencana);
        Rencana::where('id', $request->id)->update(
            [
                'judul' => $rencana[0]->judul,
                'mulai' => $rencana[0]->mulai,
                'selesai' => $rencana[0]->selesai,
                'id_user' => $rencana[0]->id_user,
                'id_ruangan' => $rencana[0]->id_ruangan,
                'kategori' => $rencana[0]->kategori,
                'status_rencana' => 'belum',
            ]
        );
    }
    public function tolak(Request $request)
    {
        $rencana = Rencana::where('id', $request->id)->get();
        // dd($rencana);
        Rencana::where('id', $request->id)->update(
            [
                'judul' => $rencana[0]->judul,
                'mulai' => $rencana[0]->mulai,
                'selesai' => $rencana[0]->selesai,
                'id_user' => $rencana[0]->id_user,
                'id_ruangan' => $rencana[0]->id_ruangan,
                'kategori' => $rencana[0]->kategori,
                'status_rencana' => 'tolak',
            ]
        );
    }
    public function hapus(Request $request)
    {
        // dd($request->id);
        Rencana::destroy($request->id);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        //
    }
}
