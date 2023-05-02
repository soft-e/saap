<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Empleado extends Model
{
    use HasFactory;
    protected $fillable =[
        'nombre_cargo'
    ];
    public function persona()
    {
        return $this->belongsTo(Persona::class);
    }
    /*
    public function parqueos(){
        return $this->hasMany(Parqueo::class);
    }
    */
    /*
    public function contratacion(){
        return $this->hasMany(Contratacion::class);
    }
    */
    
}
