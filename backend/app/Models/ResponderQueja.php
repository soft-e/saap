<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class ResponderQueja extends Model
{
    protected $table = 'responder_quejas';

    protected $fillable = ['contenido', 'asunto', 'queja_id'];

    public function queja()
    {
        return $this->belongsTo(Queja::class, 'queja_id');
    }
}