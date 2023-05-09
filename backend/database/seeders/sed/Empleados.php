<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Carbon;

class Empleados extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        for ($i = 1; $i < 10; $i++) {
            if ($i % 2 == 0) {
                DB::table('empleados')->insert([
                    'nombre_cargo' => 'guardia',
                    'persona_id' => random_int(2, 15),
                    'created_at' => Carbon::now(),
                    'updated_at' => Carbon::now()
                ]);
            } else {
                DB::table('empleados')->insert([
                    'nombre_cargo' => 'administrador',
                    'persona_id' => $i,
                    'created_at' => Carbon::now(),
                    'updated_at' => Carbon::now()
                ]);
            }
        }
    }
}
