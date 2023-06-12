<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Carbon;

class PlazaSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('plazas')->insert(
            [
                [
                    'numero'=>1,
                    'estado'=>'ocupado',
                    'bloque'=>'asfaltado',
                    'created_at'=>Carbon::now(),
                    'updated_at'=>Carbon::now()
                ],
                [
                    'numero'=>2,
                    'estado'=>'ocupado',
                    'bloque'=>'asfaltado',
                    'created_at'=>Carbon::now(),
                    'updated_at'=>Carbon::now()
                ],
                [
                    'numero'=>3,
                    'estado'=>'ocupado',
                    'bloque'=>'asfaltado',
                    'created_at'=>Carbon::now(),
                    'updated_at'=>Carbon::now()
                ],
                [
                    'numero'=>4,
                    'estado'=>'ocupado',
                    'bloque'=>'asfaltado',
                    'created_at'=>Carbon::now(),
                    'updated_at'=>Carbon::now()
                ],
                [
                    'numero'=>5,
                    'estado'=>'ocupado',
                    'bloque'=>'asfaltado',
                    'created_at'=>Carbon::now(),
                    'updated_at'=>Carbon::now()
                ],
                [
                    'numero'=>1,
                    'estado'=>'ocupado',
                    'bloque'=>'empedrado',
                    'created_at'=>Carbon::now(),
                    'updated_at'=>Carbon::now()
                ],
                [
                    'numero'=>2,
                    'estado'=>'ocupado',
                    'bloque'=>'empedrado',
                    'created_at'=>Carbon::now(),
                    'updated_at'=>Carbon::now()
                ],
                [
                    'numero'=>3,
                    'estado'=>'ocupado',
                    'bloque'=>'empedrado',
                    'created_at'=>Carbon::now(),
                    'updated_at'=>Carbon::now()
                ],
                [
                    'numero'=>4,
                    'estado'=>'ocupado',
                    'bloque'=>'empedrado',
                    'created_at'=>Carbon::now(),
                    'updated_at'=>Carbon::now()
                ],
                [
                    'numero'=>5,
                    'estado'=>'ocupado',
                    'bloque'=>'empedrado',
                    'created_at'=>Carbon::now(),
                    'updated_at'=>Carbon::now()
                ],
            ]
        );
    }
}
