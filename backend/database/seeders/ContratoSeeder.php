<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Carbon;

class ContratoSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('contratos')->insert(
            [
                [
                    'sitio_id'=>1,
                    'docente_id'=>100,
                    'vehiculo_id'=>1,
                    'bloque'=>'asfalto',
                    'create_at'=>Carbon::now(),
                    'updated_at'=>Carbon::now(),
                ]
            ]
        );
    }
}
