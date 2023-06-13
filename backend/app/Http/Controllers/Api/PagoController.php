<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Pago;
use App\Models\Contrato;
use App\Models\Tarifa2;


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
        //
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
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

//esty tratando de obtener el 
    public function registrarPago(Request $request)
    {
        // Obtener el contrato asociado al pago
        $contrato = Contrato::find($request->contrato_id);

        // Obtener el último costo de tarifa asociado al contrato
        $ultimoCostoTarifa = $contrato->pagos()
            ->orderByDesc('created_at')
            ->first()
            ->tarifa2
            ->costo_tarifa;

        // Resto de la lógica para registrar el pago
    }
}
