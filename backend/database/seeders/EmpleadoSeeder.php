<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Carbon;

class EmpleadoSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('empleados')->insert([
            [   
                'nombre_cargo'=>'administrador',
                'persona_id'=>100,
                'created_at'=>Carbon::now(),
                'updated_at'=>Carbon::now(),
            ],
            [
                'nombre_cargo'=>'secretaria',
                'persona_id'=>101,
                'created_at'=>Carbon::now(),
                'updated_at'=>Carbon::now(),
            ],
            [
                'nombre_cargo'=>'guardia',
                'persona_id'=>102,
                'created_at'=>Carbon::now(),
                'updated_at'=>Carbon::now(),
            ]
        ]);
    }
}
