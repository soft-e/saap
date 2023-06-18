<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\SolicitarContrato;

class SolicitarContratoController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $solicitarContrato = SolicitarContrato::all();
        return response()->json($solicitarContrato);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $solicitarContrato = new SolicitarContrato;
        $solicitarContrato-> empleado_id = $request-> empleado_id;
        $solicitarContrato-> docente_id = $request-> docente_id;
        $solicitarContrato-> estado = $request-> estado;
        $solicitarContrato-> save();
        return response()->json($solicitarContrato);
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $solicitarContrato = SolicitarContrato::find($id);
        if (!$solicitarContrato) {
            return response()->json(['message' => 'Solicitud de contrato no encontrada'], 404);
        }

        return response()->json($solicitarContrato);
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
        $solicitarContrato = SolicitarContrato::find($id);
        if (!$solicitarContrato) {
            return response()->json(['message' => 'Solicitud de contrato no encontrada'], 404);
        }
        $solicitarContrato-> empleado_id = $request-> empleado_id;
        $solicitarContrato-> docente_id = $request-> docente_id;
        $solicitarContrato-> estado = $request-> estado;
        $solicitarContrato-> save();

        return response()->json($solicitarContrato);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $solicitarContrato = SolicitarContrato::find($id);
        if (!$solicitarContrato) {
            return response()->json(['message' => 'Solicitud de contrato no encontrada'], 404);
        }

        $solicitarContrato->delete();

        return response()->json(['message' => 'solicitud de contrato eliminada']);
    }
}
