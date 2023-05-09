<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Carbon;

class ParqueoSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('parqueos')->insert([
            [
                'nombre_bloque' => 'a',
                'cantidad_sitios' => 40,
                'empleado_id' => 1,
                'created_at' => Carbon::now(),
                'updated_at' => Carbon::now()
            ],
            [
                'nombre_bloque' => 'b',
                'cantidad_sitios' => 50,
                'empleado_id' => 1,
                'create_at' => Carbon::now(),
                'update_at' => Carbon::now()
            ]

        ]);
    }
}
