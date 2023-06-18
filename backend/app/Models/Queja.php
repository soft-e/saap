<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Queja extends Model
{
    use HasFactory;
    protected $fillable = ['id_docente','asunto','contenido','respuesta','estado_adm','estado_clt'];

    public function respuesta()
{
    return $this->hasOne(ResponderQueja::class, 'queja_id');
}
}
