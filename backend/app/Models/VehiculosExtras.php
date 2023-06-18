<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class VehiculosExtras extends Model
{
    use HasFactory;
    protected $table = 'vehiculos_extras';
    protected $fillable = ['placa', 'color', 'marca', 'modelo'];
    public function contracts()
    {
        return $this->belongsTo(Contrato::class);
    }
}
