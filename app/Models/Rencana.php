<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Rencana extends Model
{
    use HasFactory;

    protected $guarded = ['id'];

    public function ruangan() {
        return $this->belongsTo(Ruangan::class, 'idRuangan');
    }
}
