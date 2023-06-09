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
                    'placa'=>'qwer456',
                    'color'=>'negro',
                    'marca'=>'ford',
                    'modelo'=>'explorer',
                    'created_at'=>Carbon::now(),
                    'updated_at'=>Carbon::now(),
                ],
            ]
            );
    }
}
