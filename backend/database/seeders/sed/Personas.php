<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Carbon;
use Faker\Factory as Faker;

class Personas extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        /*$faker = Faker::create();
        for ($i = 0; $i < 5; $i++) {
            DB::table('personas')->insert([
                'nombre' => $faker->name(),
                'apellido_paterno' => 'colque',
                'apellido_materno' => 'rivera',
                'ci' => '7896325',
                'telefono' => '78321569',
                'email' => $faker->unique()->safeEmail(),
                'password' => bcrypt('password'),
                'created_at' => Carbon::now(),
                'updated_at' => Carbon::now()
            ]);
        }*/
    }
}
