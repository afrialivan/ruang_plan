<?php

namespace App\Http\Controllers;

use App\Models\Rencana;
use App\Models\Ruangan;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Inertia\Inertia;

class rencanaController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $data = DB::table('rencanas')
            ->leftJoin('ruangans', 'ruangans.id', '=', 'rencanas.id_ruangan')
            ->select('rencanas.*', 'ruangans.nama_ruangan')
            ->latest()
            ->get();
        return Inertia::render('rencana/Rencana', [
            'title' => 'Rencana',
            'rencana' => $data
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return Inertia::render('rencana/TambahRencana', [
            'title' => 'Rencana',
            'ruangan' => Ruangan::all(),
            'rencana' => Rencana::latest()->get()
        ]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        Rencana::create([
            'judul' => $request->judul,
            'tanggal' => $request->tanggal,
            'id_user' => $request->idUser,
            'id_ruangan' => $request->ruangan
        ]);
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
    public function edit(string $id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        //
    }
}
