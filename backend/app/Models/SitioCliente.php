<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class SitioCliente extends Model
{
    use HasFactory;
    protected $table = 'sitio_clientes';

    protected $fillable = [
        'parqueo_id',
        'sitio_id',
       
        // Otros campos del sitio_cliente
    ];
    public function parqueo()
    {
        return $this->belongsTo(Parqueo::class);
    }

    public function plaza()
    {
        return $this->belongsTo(Plaza::class, 'sitio_id');
    }

}
