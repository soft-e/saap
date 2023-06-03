<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Contrato;
use App\Models\Plaza;
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
        //
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
       
        $plaza = Plaza::where('numero', $request->input('sitio_id'))->where('bloque', $request->input('bloque'))->first();
 
        //  dd($plaza);
        $plaza->estado = 'ocupado';
        $plaza->save();

        // Devolver una respuesta JSON
        return response()->json([
            'success' => true,
            'message' => 'Contrato creado correctamente',
            'data' => $plaza,
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
}