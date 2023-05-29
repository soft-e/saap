<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Plaza extends Model
{
    use HasFactory;
    protected $table = 'plazas';
    
    protected $fillable = ['nombre','estado','bloque'];

    public function sitioCliente()
    {
        return $this->hasOne(SitioCliente::class, 'sitio_id');
    }
}

