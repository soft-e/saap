<?php

namespace App\Models;


use Illuminate\Database\Eloquent\Model;

use App\Models\Parqueo;


class Sitios extends Model
{
    protected $fillable = [
        'parqueo_id',
        'nombre_bloque',
        'numero_sitio',
        'estado',
    ];
   
    public function parqueo()
    {
        return $this->belongsTo(Parqueo::class);
    }
}

