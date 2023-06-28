<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Parqueo;

class ParqueoController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $parqueos = Parqueo::get();
        return response()->json($parqueos);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $parqueo = new Parqueo;
        $parqueo->nombre_bloque = $request->nombre_bloque;
        $parqueo->cantidad_sitios = $request->cantidad_sitios;
        $parqueo->empleado_id = $request->empleado_id;
      
        $parqueo->save();
        return response()->json([$parqueo], 201);
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $parqueo = Parqueo::find($id);
        if (!$parqueo) {
            return response()->json(['message' => 'parqueo no encontrado'], 404);
        }

        return response()->json(['data' => $parqueo]);
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
        $parqueo = Parqueo::find($id);
        $parqueo->nombre_bloque = $request->nombre_bloque;
        $parqueo->cantidad_sitios = $request->cantidad_sitios;
        $parqueo->empleado_id = $request->empleado_id;
        $parqueo->update($request->all());
        return response()->json($parqueo);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $parqueo = Parqueo::find($id);
        if (!$parqueo) {
            return response()->json(['message' => 'Parqueo no encontrado'], 404);
        }
        $parqueo->delete();
        return response()->json(['message' => 'Parqueo eliminado']);
    }
}
