<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Carbon;

class VehiculoSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('vehiculos')->insert(
            [
                [
                    'placa'=>'BCD890',
                    'color'=>'morado',
                    'marca'=>'audi',
                    'modelo'=>'a4',
                    'created_at'=>Carbon::now(),
                    'updated_at'=>Carbon::now(),
                ],
                [
                    'placa'=>'ABC123',
                    'color'=>'azul',
                    'marca'=>'toyota',
                    'modelo'=>'corolla',
                    'created_at'=>Carbon::now(),
                    'updated_at'=>Carbon::now(),
                ],
                [
                    'placa'=>'DEF456',
                    'color'=>'rojo',
                    'marca'=>'honda',
                    'modelo'=>'civic',
                    'created_at'=>Carbon::now(),
                    'updated_at'=>Carbon::now(),
                ],
                [
                    'placa'=>'GHI789',
                    'color'=>'blanco',
                    'marca'=>'ford',
                    'modelo'=>'mustang',
                    'created_at'=>Carbon::now(),
                    'updated_at'=>Carbon::now(),
                ],
                [
                    'placa'=>'JKL012',
                    'color'=>'negro',
                    'marca'=>'chevrolet',
                    'modelo'=>'camaro',
                    'created_at'=>Carbon::now(),
                    'updated_at'=>Carbon::now(),
                ],
                [
                    'placa'=>'MNO345',
                    'color'=>'plateado',
                    'marca'=>'bmw',
                    'modelo'=>'serie 3',
                    'created_at'=>Carbon::now(),
                    'updated_at'=>Carbon::now(),
                ],
                [
                    'placa'=>'PQR678',
                    'color'=>'gris',
                    'marca'=>'volkswagen',
                    'modelo'=>'golf',
                    'created_at'=>Carbon::now(),
                    'updated_at'=>Carbon::now(),
                ],
                [
                    'placa'=>'STU901',
                    'color'=>'verde',
                    'marca'=>'hyundai',
                    'modelo'=>'tucson',
                    'created_at'=>Carbon::now(),
                    'updated_at'=>Carbon::now(),
                ],
                [
                    'placa'=>'VWX234',
                    'color'=>'amarillo',
                    'marca'=>'fiat',
                    'modelo'=>'500',
                    'created_at'=>Carbon::now(),
                    'updated_at'=>Carbon::now(),
                ],
                [
                    'placa'=>'YZA567',
                    'color'=>'naranja',
                    'marca'=>'mercedez-benz',
                    'modelo'=>'clase c',
                    'created_at'=>Carbon::now(),
                    'updated_at'=>Carbon::now(),
                ],
            ]
            );
    }
}
