<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Carbon;

class MensajeSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('mensajes')->insert([
            [
                'contenido' => 'hola soy la deysi y me gusta alguien del grupo de Tis :3',
                'asunto' => 'declaracion de amor',
                'destinatario' => 'todos',
                'created_at' => Carbon::now(),
                'updated_at' => Carbon::now()
            ],
            [
                'contenido' => 'hola soy juana del arco y me aburre estar muerta que asco quiero llorar',
                'asunto' => 'declaracion juana',
                'destinatario' => 'todos',
                'created_at' => Carbon::now(),
                'updated_at' => Carbon::now()
            ],
            [
                'contenido' => 'hola spy goku y me gusta pelear con los mas fuertes del universo y demas ,quiero ser el guerro mas fuerte de todo el tiempo',
                'asunto' => 'declaracion goku',
                'destinatario' => 'todos',
                'created_at' => Carbon::now(),
                'updated_at' => Carbon::now()
            ]
        ]);
    }
}
