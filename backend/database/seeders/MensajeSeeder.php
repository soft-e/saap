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
                'asunto' => 'lorem ipsum',
                'contenido' => 'Lorem ipsum dolor sit amet dolores gubergren eum lorem ea kasd vel magna commodo stet ut duo nulla esse aliquyam sea vero tempor erat erat',
                'estado'=> 0,
                'created_at' => Carbon::now(),
                'updated_at' => Carbon::now()
            ],
            [
                'origen'=>'1',
                'destino' => 'todos',
                'asunto' => 'lorem ipsum',
                'contenido' => 'Lorem ipsum dolor sit amet sed esse tincidunt nulla vulputate elit amet euismod nulla duo lorem ut vulputate diam lorem ut ut in dolore praesent',
                'estado'=> 0,
                'created_at' => Carbon::now(),
                'updated_at' => Carbon::now()
            ],
            [
                'origen'=>'1',
                'destino' => 'todos',
                'asunto' => 'lorem ipsum',
                'contenido' => 'Lorem ipsum dolor sit amet ipsum at dolor gubergren ea consectetuer amet sed lobortis sanctus nonummy sit kasd justo sed dolor et tempor nonumy kasd',
                'estado'=> 0,
                'created_at' => Carbon::now(),
                'updated_at' => Carbon::now()
            ]
        ]);
    }
}
