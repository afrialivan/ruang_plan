<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('rencanas', function (Blueprint $table) {
            $table->id();
            $table->string('judul');
            $table->string('tanggal');
            $table->foreignId('id_user');
            $table->foreignId('id_ruangan');
            $table->enum('kategori', ['siswa', 'guru', 'osis', 'semua'])->default('semua');
            $table->enum('status_rencana', ['belum', 'proses', 'selesai', 'tolak']);
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('rencanas');
    }
};
