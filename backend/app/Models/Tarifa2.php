<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Tarifa2 extends Model
{
    use HasFactory;
    protected $fillable =[
        'costo_tarifa'
    ];
    public function pagos(){
        return $this->hasMany(Pago::class);
    }
    
}
