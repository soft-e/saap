<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Carbon;

class QuejaSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('quejas')->insert([
            [
                'id_docente'=>100,
                'asunto' => 'Queja parqueo',
                'contenido' => 'hola quiero presentar una queja, mi parqueo estaba ocupado por otro vehiculo',
                'respuesta'=>'ya fuimos notificados por el guardia y ya corregimos el problema',
                'estado_adm'=>0,
                'estado_clt'=>0,
                'created_at' => Carbon::now(),
                'updated_at' => Carbon::now()
            ],
            
        ]);
    }
}
