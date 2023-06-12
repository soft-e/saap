<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Carbon;

class Tarifa2Seeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('tarifa2s')->insert(
            [
                [
                    'costo_tarifa'=>150,
                    //'created_at'=>Carbon::now()->format('Y-m-d H:i
                    //:s'),
                    //'updated_at'=>Carbon::now()->format('Y-m-d H:i
                    //:s')
                    'created_at'=>Carbon::now(),
                    'updated_at'=>Carbon::now(),
                ],
                [
                    'costo_tarifa'=>200,
                    //'created_at'=>Carbon::now()->format('Y-m-d H:i
                    //:s'),
                    //'updated_at'=>Carbon::now()->format('Y-m-d H:i
                    //:s')
                    'created_at'=>Carbon::now(),
                    'updated_at'=>Carbon::now(),
                ],
                
            ]
        );
    }
}
