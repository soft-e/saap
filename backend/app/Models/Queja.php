<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Queja extends Model
{
    use HasFactory;
    protected $fillable = ['contenido', 'asunto'];

    public function respuestas()
    {
        return $this->hasMany(ResponderQueja::class, 'queja_id');
    }
}