<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Persona extends Model
{
    //use HasFactory;
    protected $fillable =[
        'nombre',
        'apellido_paterno',
        'apellido_materno',
        'ci',
        'telefono',
        'email',
        'password'
    ];
    public function administrador()
    {
        return $this->hasOne(Administrador::class);
    }
}
