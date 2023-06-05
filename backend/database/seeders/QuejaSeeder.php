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
                'contenido' => 'hola quiero presentar una queja, mi parqueo estaba ocupado por otro vehiculo',
                'asunto' => 'Queja parqueo',
                'created_at' => Carbon::now(),
                'updated_at' => Carbon::now()
            ],
            [
                'contenido' => 'hola Quiero presentar una queja alguien rayo mi automovil',
                'asunto' => 'auto daniado',
                'created_at' => Carbon::now(),
                'updated_at' => Carbon::now()
            ],
            [
                'contenido' => 'La siguiente queja es por que no respetaron el horario del parqueo y cerraron mas antes',
                'asunto' => 'queja respecto a horarios',
                'created_at' => Carbon::now(),
                'updated_at' => Carbon::now()
            ]
        ]);
    }
}
