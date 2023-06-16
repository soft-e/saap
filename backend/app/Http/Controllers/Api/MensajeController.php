<?php

namespace App\Http\Controllers\api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Mensaje;

class MensajeController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $mensajes = Mensaje::all();
        return response()->json($mensajes);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $mensaje = new Mensaje;
        $mensaje->origen = $request->origen;
        $mensaje->destino = $request->destino;
        $mensaje->asunto = $request->asunto;
        $mensaje->contenido = $request->contenido;
        $mensaje->estado = $request->estado;
        $mensaje->save();
        return response()->json([$mensaje], 201);
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $mensaje = Mensaje::find($id);
        if (!$mensaje) {
            return response()->json(['message' => 'parqueo no encontrado'], 404);
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
}
