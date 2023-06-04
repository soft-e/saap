<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Plaza extends Model
{
    use HasFactory;
    protected $table = 'plazas';
    
    protected $fillable = ['numero','estado','bloque'];

    public function sitioCliente()
    {
        return $this->hasOne(SitioCliente::class, 'sitio_id');
    }

   /* public function parqueo()
    {
        return $this->belongsTo(Parqueo::class);
    }

*/
/*public function parqueo()
{
    return $this->belongsTo(Parqueo::class);
}*/

}

