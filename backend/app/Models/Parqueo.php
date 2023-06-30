<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Parqueo extends Model
{
    use HasFactory;
    protected $fillable=['nombre_bloque','numero_sitios'];

    
    public function empleado(){
        return $this->belongsTo(Empleado::class);
    }
    public function sitios()
    {
        return $this->hasMany(Sitio::class);
    }
}
    
}
