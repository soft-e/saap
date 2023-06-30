<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Queja;
use Illuminate\Http\Request;

class QuejaController extends Controller
{
    public function index()
    {
        $quejas = Queja::all();
        return response()->json($quejas);
    }

    public function show($id)
    {
        $queja = Queja::findOrFail($id);
        return response()->json($queja);
    }

    public function store(Request $request)
    {
        $queja = new Queja;
        $queja->id_docente = $request->id_docente;
        $queja->asunto = $request->asunto;
        $queja->contenido = $request->contenido;
        $queja->respuesta = $request->respuesta;
        $queja->estado_adm = $request->estado_adm;
        $queja->estado_clt = $request->estado_clt;
        $queja->save();
        return response()->json(['message' => 'se registro correctamente'], 201);
    }

    public function update(Request $request, $id)
    {
        $queja = Queja::find($id);
        if (!$queja) {
            return response()->json(['message' => 'Queja no encontrada'], 404);
        }
        $queja->id_docente = $request->id_docente;
        $queja->asunto = $request->asunto;
        $queja->contenido = $request->contenido;
        $queja->respuesta = $request->respuesta;
        $queja->estado_adm = $request->estado_adm;
        $queja->estado_clt = $request->estado_clt;
        $queja->asunto = $request->asunto;
        $queja->save();

        return response()->json($queja);
    }

    public function destroy($id)
    {
        Queja::findOrFail($id)->delete();
        return response()->json(null, 204);
    }
}