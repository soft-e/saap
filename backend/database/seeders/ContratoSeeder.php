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
                    'created_at'=>'2023-06-09 08:23:47.000',
                    'updated_at'=>'2023-06-09 08:23:47.000',
                ],
                [
                    'sitio_id'=>2,
                    'docente_id'=>101,
                    'vehiculo_id'=>2,
                    'bloque'=>'asfalto',
                    'created_at'=>Carbon::now(),
                    'updated_at'=>Carbon::now(),
                ],
                [
                    'sitio_id'=>3,
                    'docente_id'=>102,
                    'vehiculo_id'=>3,
                    'bloque'=>'asfalto',
                    'created_at'=>Carbon::now(),
                    'updated_at'=>Carbon::now(),
                ],
                [
                    'sitio_id'=>4,
                    'docente_id'=>103,
                    'vehiculo_id'=>4,
                    'bloque'=>'asfalto',
                    'created_at'=>Carbon::now(),
                    'updated_at'=>Carbon::now(),
                ],
                [
                    'sitio_id'=>5,
                    'docente_id'=>104,
                    'vehiculo_id'=>5,
                    'bloque'=>'asfalto',
                    'created_at'=>Carbon::now(),
                    'updated_at'=>Carbon::now(),
                ],
                [
                    'sitio_id'=>6,
                    'docente_id'=>105,
                    'vehiculo_id'=>6,
                    'bloque'=>'asfalto',
                    'created_at'=>Carbon::now(),
                    'updated_at'=>Carbon::now(),
                ],
                [
                    'sitio_id'=>7,
                    'docente_id'=>106,
                    'vehiculo_id'=>7,
                    'bloque'=>'asfalto',
                    'created_at'=>Carbon::now(),
                    'updated_at'=>Carbon::now(),
                ],
                [
                    'sitio_id'=>8,
                    'docente_id'=>107,
                    'vehiculo_id'=>8,
                    'bloque'=>'asfalto',
                    'created_at'=>Carbon::now(),
                    'updated_at'=>Carbon::now(),
                ],
                [
                    'sitio_id'=>9,
                    'docente_id'=>108,
                    'vehiculo_id'=>9,
                    'bloque'=>'asfalto',
                    'created_at'=>Carbon::now(),
                    'updated_at'=>Carbon::now(),
                ],
                [
                    'sitio_id'=>10,
                    'docente_id'=>109,
                    'vehiculo_id'=>10,
                    'bloque'=>'asfalto',
                    'created_at'=>Carbon::now(),
                    'updated_at'=>Carbon::now(),
                ],
            ]
        );
    }
}
