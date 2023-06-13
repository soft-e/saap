<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Pago extends Model
{
    use HasFactory;
    protected $fillable=[
        'monto_pagado',
        'tarifa2_id',
        'contrato_id'
    ];
    /*public function tarifa2(){
        return $this-> belongsTo(Tarifa2::class);
    }*/
    public function contrato(){
        return $this-> belongsTo(Contrato::class);
    }
}
