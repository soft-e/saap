<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Carbon;

class PagoSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('pagos')->insert(
            [
                [
                    'monto_pagado'=>150,
                    'tarifa2_id'=>1,
                    'Contrato_id'=>1,
                    'created_at'=>Carbon::now(),
                    'updated_at'=>Carbon::now()
                ],
                [
                    'monto_pagado'=>150,
                    'tarifa2_id'=>2,
                    'Contrato_id'=>1,
                    'created_at'=>Carbon::now(),
                    'updated_at'=>Carbon::now()
                ],
                [
                    'monto_pagado'=>150,
                    'tarifa2_id'=>1,
                    'Contrato_id'=>2,
                    'created_at'=>Carbon::now(),
                    'updated_at'=>Carbon::now()
                ],
                [
                    'monto_pagado'=>150,
                    'tarifa2_id'=>1,
                    'Contrato_id'=>3,
                    'created_at'=>Carbon::now(),
                    'updated_at'=>Carbon::now()
                ],
                [
                    'monto_pagado'=>150,
                    'tarifa2_id'=>2,
                    'Contrato_id'=>4,
                    'created_at'=>Carbon::now(),
                    'updated_at'=>Carbon::now()
                ],
                [
                    'monto_pagado'=>150,
                    'tarifa2_id'=>2,
                    'Contrato_id'=>5,
                    'created_at'=>Carbon::now(),
                    'updated_at'=>Carbon::now()
                ],
                [
                    'monto_pagado'=>150,
                    'tarifa2_id'=>2,
                    'Contrato_id'=>6,
                    'created_at'=>Carbon::now(),
                    'updated_at'=>Carbon::now()
                ],
                [
                    'monto_pagado'=>150,
                    'tarifa2_id'=>2,
                    'Contrato_id'=>7,
                    'created_at'=>Carbon::now(),
                    'updated_at'=>Carbon::now()
                ],
                [
                    'monto_pagado'=>150,
                    'tarifa2_id'=>2,
                    'Contrato_id'=>9,
                    'created_at'=>Carbon::now(),
                    'updated_at'=>Carbon::now()
                ],
                [
                    'monto_pagado'=>150,
                    'tarifa2_id'=>2,
                    'Contrato_id'=>10,
                    'created_at'=>Carbon::now(),
                    'updated_at'=>Carbon::now()
                ],
            ]
        );
    }
}
