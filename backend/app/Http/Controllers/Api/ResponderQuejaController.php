<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

use App\Models\Queja;
use App\Models\ResponderQueja;

class ResponderQuejaController extends Controller
{
    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $Rqueja = new ResponderQueja;
        $Rqueja->contenido = $request->input('contenido');
        $Rqueja->asunto = $request->input('asunto');
        $Rqueja->queja_id = $request->queja_id;
        $Rqueja->save();
        return response()->json($Rqueja, 201);
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $mensaje = ResponderQueja::find($id);

        if (!$mensaje) {
            return response()->json(['message' => 'La respuesta de queja no fue encontrada'], 404);
        }

        return response()->json($mensaje);
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
        // Update logic
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        // Delete logic
    }

    public function obtenerAsuntoQueja($id)
    {
        $queja = Queja::find($id);
        
        if ($queja) {
            return $queja->asunto;
        } else {
            return null;
        }
    }

    public function obtenerRespuestaQueja($id)
{
    $respuesta = ResponderQueja::find($id);

    if ($respuesta) {
        return $respuesta;
    } else {
        return null;
    }
}
}
