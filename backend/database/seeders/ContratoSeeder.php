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
                    'docente_id'=>1,
                    'vehiculo_id'=>1,
                    'bloque'=>'asfalto',
                    'created_at'=>'2023-03-05 02:44:01.000',
                    'updated_at'=>'2023-03-05 02:44:01.000',
                ],
                [
                    'sitio_id'=>2,
                    'docente_id'=>2,
                    'vehiculo_id'=>2,
                    'bloque'=>'asfalto',
                    'created_at'=>'2023-04-05 02:44:01.000',
                    'updated_at'=>'2023-04-05 02:44:01.000',
                ],
                [
                    'sitio_id'=>3,
                    'docente_id'=>3,
                    'vehiculo_id'=>3,
                    'bloque'=>'asfalto',
                    'created_at'=>'2023-04-05 02:44:01.000',
                    'updated_at'=>'2023-04-05 02:44:01.000',
                ],
                [
                    'sitio_id'=>4,
                    'docente_id'=>4,
                    'vehiculo_id'=>4,
                    'bloque'=>'asfalto',
                    'created_at'=>'2023-04-05 02:44:01.000',
                    'updated_at'=>'2023-04-05 02:44:01.000',
                ],
                [
                    'sitio_id'=>5,
                    'docente_id'=>5,
                    'vehiculo_id'=>5,
                    'bloque'=>'asfalto',
                    'created_at'=>'2023-04-05 02:44:01.000',
                    'updated_at'=>'2023-04-05 02:44:01.000',
                ],
                [
                    'sitio_id'=>6,
                    'docente_id'=>6,
                    'vehiculo_id'=>6,
                    'bloque'=>'empedrado',
                    'created_at'=>'2023-04-05 02:44:01.000',
                    'updated_at'=>'2023-04-05 02:44:01.000',
                ],
                [
                    'sitio_id'=>7,
                    'docente_id'=>7,
                    'vehiculo_id'=>7,
                    'bloque'=>'empedrado',
                    'created_at'=>'2023-04-05 02:44:01.000',
                    'updated_at'=>'2023-04-05 02:44:01.000',
                ],
                [
                    'sitio_id'=>8,
                    'docente_id'=>8,
                    'vehiculo_id'=>8,
                    'bloque'=>'empedrado',
                    'created_at'=>'2023-04-05 02:44:01.000',
                    'updated_at'=>'2023-04-05 02:44:01.000',
                ],
                [
                    'sitio_id'=>9,
                    'docente_id'=>9,
                    'vehiculo_id'=>9,
                    'bloque'=>'empedrado',
                    'created_at'=>'2023-04-05 02:44:01.000',
                    'updated_at'=>'2023-04-05 02:44:01.000',
                ],
                [
                    'sitio_id'=>10,
                    'docente_id'=>10,
                    'vehiculo_id'=>10,
                    'bloque'=>'empedrado',
                    'created_at'=>'2023-04-05 02:44:01.000',
                    'updated_at'=>'2023-04-05 02:44:01.000',
                ],
            ]
        );
    }
}
