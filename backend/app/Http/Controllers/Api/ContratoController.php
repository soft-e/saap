<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Contrato;
use App\Models\Sitios;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class ContratoController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $contrato = Contrato::get();
        return response()->json($contrato);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $request->validate([
            'sitio_id' => 'required',
            'docente_id' => 'required',
            'vehiculo_id' => 'required',
            'bloque' => 'required',
        ]);

        // Crear un nuevo contrato en la base de datos
        $contrato = Contrato::create([
            'sitio_id' => $request->input('sitio_id'),
            'docente_id' => $request->input('docente_id'),
            'vehiculo_id' => $request->input('vehiculo_id'),
            'bloque' => $request->input('bloque'),
        ]);
        // $plaza = DB::table('plazas')->where('numero', $request->input('sitio_id'))->first();

        //tabla sitios id y tabla contratos sitio_id
        $sitio = Sitios::where('id', $request->input('sitio_id'))->first();


        //  dd($plaza);
        $sitio->estado_sitio = 'ocupado';
        $sitio->save();

        // Devolver una respuesta JSON
        return response()->json([
            'success' => true,
            'message' => 'Contrato creado correctamente',
            'data' => $sitio,
        ]);
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $contrato = Contrato::find($id);
        if (!$contrato) {
            return response()->json(['message' => 'contrato no encontrado'], 404);
        }

        return response()->json($contrato);
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
    public function eliminarRegistros($name)
    {
        Contrato::where('bloque', $name)->delete();
    }
}
