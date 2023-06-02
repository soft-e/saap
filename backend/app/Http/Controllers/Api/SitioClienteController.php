<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\SitioCliente;

use App\Models\Plaza;
class SitioClienteController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        // Validar los datos de entrada
        $request->validate([
            'parqueo_id' => 'required',
            'sitio_id' => 'required',
        ]);

        // Crear un nuevo SitioCliente
        $sitioCliente = SitioCliente::create($request->all());

        // Actualizar el estado del sitio a "ocupado" en la tabla "plazas"
        $plaza = Plaza::find($request->sitio_id);
        $plaza->estado = 'ocupado';
        $plaza->save();

        // Otras operaciones necesarias

        return response()->json($sitioCliente, 201);
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
