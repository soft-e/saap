<?php

namespace Database\Seeders;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Carbon;

use Illuminate\Database\Seeder;

class AtencionSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('horario_atencions')->insert([
            [
                'tipo_atencion'=>'lunes a viernes',
                'hora_apertura'=>'08:00',
                'hora_cierre'=>'18:00',
                'created_at'=>Carbon::now(),
                'updated_at'=>Carbon::now(),
            ],
            [
                'tipo_atencion'=>'sabado',
                'hora_apertura'=>'09:00',
                'hora_cierre'=>'12:00',
                'created_at'=>Carbon::now(),
                'updated_at'=>Carbon::now(),
            ]
        ]);
    }
}
