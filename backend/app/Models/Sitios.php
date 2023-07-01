<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Sitios extends Model
{
    use HasFactory;
    protected $fillable = ['estado_sitio','numero_sitio'];

    public function parqueo()
    {
        return $this->belongsTo(Parqueo::class);
    }
    
}