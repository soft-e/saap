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
                'origen'=>'1',
                'destino' => 'todos',
                'asunto' => 'saludo con el primer comunicado',
                'contenido' => 'este es el primer comunicado para las personas en general',
                'estado'=> 0,
                'created_at' => Carbon::now(),
                'updated_at' => Carbon::now()
            ],
            [
                'origen'=>'1',
                'destino' => 'todos',
                'asunto' => 'El dia viernes 30 de junio se llevaran a cabo las elecciones en la U',
                'contenido' => 'se solicita a todos los clientes a personar a la Universidad a complir con su vito',
                'estado'=> 0,
                'created_at' => Carbon::now(),
                'updated_at' => Carbon::now()
            ],
            [
                'origen'=>'1',
                'destino' => 'todos',
                'asunto' => 'El bloque empedrado estara en mejoramiento',
                'contenido' => 'Se comunica a los clientes que a partir de la primera semana de agosto se procedera a instalar sombrillas a los sitios',
                'estado'=> 0,
                'created_at' => Carbon::now(),
                'updated_at' => Carbon::now()
            ]
        ]);
    }
}
