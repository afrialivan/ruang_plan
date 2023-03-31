<?php

namespace Database\Seeders;

// use Illuminate\Database\Console\Seeds\WithoutModelEvents;

use App\Models\Rencana;
use App\Models\Ruangan;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        // \App\Models\User::factory(10)->create();

        // \App\Models\User::factory()->create([
        //     'name' => 'Test User',
        //     'email' => 'test@example.com',
        // ]);

        Rencana::create([
            'judul' => 'Buka Puasa Bersama',
            'id_ruangan' => 1,
            'tanggal' => '2023-03-31',
            'status_rencana' => 'proses'
        ]);
        Rencana::create([
            'judul' => 'Penamatan',
            'id_ruangan' => 5,
            'tanggal' => '2023-04-01',
            'status_rencana' => 'selesai'
        ]);
        Rencana::create([
            'judul' => 'Ukk RPL',
            'id_ruangan' => 2,
            'tanggal' => '2023-04-01',
            'status_rencana' => 'belum'
        ]);
        Rencana::create([
            'judul' => 'Rapat Osis',
            'id_ruangan' => 3,
            'tanggal' => '2023-03-30',
            'status_rencana' => 'belum'
        ]);
        Rencana::create([
            'judul' => 'Sosialisasi',
            'id_ruangan' => 4,
            'tanggal' => '2023-03-31',
            'status_rencana' => 'proses'
        ]);

        Ruangan::create([
            'nama_ruangan' => 'XII RPL',
            'status_ruangan' => 'kosong'
        ]);
        Ruangan::create([
            'nama_ruangan' => 'XII TKJ 1',
            'status_ruangan' => 'disable'
        ]);
        Ruangan::create([
            'nama_ruangan' => 'XII TKJ 2',
            'status_ruangan' => 'kosong'
        ]);
        Ruangan::create([
            'nama_ruangan' => 'XII TKJ 3',
            'status_ruangan' => 'kosong'
        ]);
        Ruangan::create([
            'nama_ruangan' => 'XII TKJ 4',
            'status_ruangan' => 'terisi'
        ]);
        Ruangan::create([
            'nama_ruangan' => 'XII TKJ 5',
            'status_ruangan' => 'kosong'
        ]);
    }
}
