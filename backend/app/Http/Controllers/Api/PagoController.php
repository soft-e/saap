<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Pago;


class PagoController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $pagos = Pago::all();
        return response()->json($pagos);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
   
    
    public function store(Request $request)
    {
        $pagos = new Pago;
        $pagos->tarifa2_id = $request->tarifa2_id;
        $pagos->monto_pagado = $request->monto_pagado;
        $pagos->contrato_id = $request->contrato_id;
        $pagos->saldo= $request->saldo;
        $pagos->save();
        
        return response()->json($pagos, 201);
    }
    
    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
  
    public function show($id)
{
    $pago = Pago::find($id);

    if (!$pago) {
        return response()->json(['error' => 'Pago no encontrado'], 404);
    }

    return response()->json($pago);
}


    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }

    public function getSaldoByContratoId($contratoId)
    {
        $saldo = Pago::where('contrato_id', $contratoId)
            ->orderBy('created_at', 'desc')
            ->value('saldo');

        return response()->json(['saldo' => $saldo]);
    }

    public function getUpdatedDatesByContratoId($contratoId)
    {
        $pagos = Pago::where('contrato_id', $contratoId)
            ->orderBy('updated_at', 'desc')
            ->pluck('updated_at');

        return response()->json(['updated_dates' => $pagos]);
    }




    public function getUltimaFechaRegistroPorContratoId($contratoId)
    {
        $ultimoRegistro = Pago::where('contrato_id', $contratoId)
            ->latest('created_at')
            ->first();

        if ($ultimoRegistro) {
            $ultimaFechaRegistro = $ultimoRegistro->created_at;
            return response()->json($ultimaFechaRegistro);
        } else {
            return response()->json(null);
        }
    }
}
