<?php

namespace App\Http\Controllers\api;

use App\Http\Controllers\Controller;
use App\Models\VehiculosExtras;
use Illuminate\Http\Request;

class VehiculosExtrasController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $vehiculo = VehiculosExtras::get();
        return response()->json($vehiculo);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $vehiculo = new VehiculosExtras();
        $vehiculo->contrato_id = $request->contrato_id;
        $vehiculo->placa = $request->placa;
        $vehiculo->color = $request->color;
        $vehiculo->marca = $request->marca;
        $vehiculo->modelo = $request->modelo;
        $vehiculo->save();
        return response()->json($vehiculo);
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $vehiculo = VehiculosExtras::find($id);
        if (!$vehiculo) {
            return response()->json(['message' => 'vehiculo no encontrado'], 404);
        }

        return response()->json($vehiculo);
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
    public function getbyidContract($id)
    {
        $lista = VehiculosExtras::where('contrato_id', $id)->get();
        return response()->json($lista);
    }
}
