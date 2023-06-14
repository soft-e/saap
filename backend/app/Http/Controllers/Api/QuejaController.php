<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Queja;
use App\Models\ResponderQueja;

class QuejaController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $quejas = Queja::all();
        return response()->json($quejas);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $queja = new Queja;
        $queja->contenido = $request->contenido;
        $queja->asunto = $request->asunto;
        $queja->save();
        return response()->json($queja, 201);
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $queja = Queja::find($id);
        if (!$queja) {
            return response()->json(['message' => 'Queja no encontrada'], 404);
        }

        return response()->json($queja);
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
        $queja = Queja::find($id);
        if (!$queja) {
            return response()->json(['message' => 'Queja no encontrada'], 404);
        }

        $queja->contenido = $request->input('contenido');
        $queja->asunto = $request->input('asunto');
        $queja->save();

        return response()->json($queja);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $queja = Queja::find($id);
        if (!$queja) {
            return response()->json(['message' => 'Queja no encontrada'], 404);
        }

        $queja->delete();

        return response()->json(['message' => 'Queja eliminada']);
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
        $respuesta = ResponderQueja::where('queja_id', $id)->first();

        if ($respuesta) {
            return $respuesta;
        } else {
            return null;
        }
    }
}