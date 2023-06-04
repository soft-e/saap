<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Contrato extends Model
{   use HasFactory;
    protected $table = 'contratos';
    protected $fillable = ['sitio_id', 'docente_id', 'vehiculo_id','bloque'];

    
}