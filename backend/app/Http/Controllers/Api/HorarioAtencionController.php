<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\HorarioAtencion;

class HorarioAtencionController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $hAtenciones = HorarioAtencion::all();
        return response()->json($hAtenciones);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $hAtencion = new HorarioAtencion;
        $hAtencion-> tipo_atencion = $request-> tipo_atencion;
        $hAtencion-> hora_apertura = $request-> hora_apertura;
        $hAtencion-> hora_cierre = $request-> hora_cierre;
        $hAtencion-> save();
        return response()->json($hAtencion);
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $hAtencion = HorarioAtencion::findOrFail($id);
        return response()->json($hAtencion);
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
        $hAtencion = HorarioAtencion::findOrFail($id);
        $hAtencion-> tipo_atencion = $request-> tipo_atencion;
        $hAtencion-> hora_apertura = $request-> hora_apertura;
        $hAtencion-> hora_cierre = $request-> hora_cierre;
        $hAtencion->save();
        return response()->json($hAtencion);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $hAtencion = HorarioAtencion::findOrFail($id);
        $hAtencion->delete();
        return response()->json(['message'=>'horario eliminado']);
    }
}
