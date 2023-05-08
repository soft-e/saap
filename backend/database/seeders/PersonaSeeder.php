<?php

use Faker\Factory as Faker;

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Carbon;


class PersonaSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('personas')->insert(
            [
                [
                    'nombre' => 'joel',
                    'apellido_paterno' => 'colque',
                    'apellido_materno' => 'rivera',
                    'ci' => '7896325',
                    'telefono' => '78321569',
                    'email' => 'joel.colque@gmail.com',
                    'password' => 'un password',
                    'created_at' => Carbon::now(),
                    'updated_at' => Carbon::now()
                ],
                [
                    'nombre' => 'erika',
                    'apellido_paterno' => 'ramos',
                    'apellido_materno' => 'cabrera',
                    'ci' => '6985723',
                    'telefono' => '78693523',
                    'email' => 'erika.cabrera@gmail.com',
                    'password' => 'un password',
                    'created_at' => Carbon::now(),
                    'updated_at' => Carbon::now()
                ],
                [
                    'nombre' => 'julian',
                    'apellido_paterno' => 'apaza',
                    'apellido_materno' => 'rojas',
                    'ci' => '5248963',
                    'telefono' => '78321569',
                    'email' => 'julian.rojas@gmail.com',
                    'password' => 'un password',
                    'created_at' => Carbon::now(),
                    'updated_at' => Carbon::now()
                ],
            ]
        );
    }
}
