<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Plaza;
use App\Models\Parqueo;

class PlazaController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
        $plazas=Plaza::all(); 
        return response()->json($plazas);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $plaza = new plaza();
        $plaza->numero = $request->numero;
        $plaza->estado = $request->estado;
        $plaza->bloque=$request->bloque;
        
        $plaza->save();
        return response()->json(['message' => 'se registro correctamente'], 201);
        
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
    public function updateEstado(Request $request, $id)
    {
        $plaza = Plaza::findOrFail($id);
        $plaza->estado = 'ocupado'; // Actualiza el estado del sitio a 'ocupado'
        $plaza->save();
           
        return response()->json($plaza);
    }
     /* public function update(Request $request, $id)
    {
        $plaza = Plaza::findOrFail($id);
        $plaza->nombre = $request->nombre;
        $plaza->estado = $request->estado;
        
        $plaza->save();
        return response()->json($plaza);
    }
    */
   
   
   /* public function obtenerPrimerSitioLibre(Request $request)
    {
        $bloque = $request->input('bloque');
        
        $primerSitioLibre = Plaza::where('bloque', $bloque)
            ->where('estado', 'libre')
            ->first();
            
        return response()->json($primerSitioLibre);
    }*/
    public function obtenerPrimerSitioLibre($bloque)
{
    // Obtener el primer sitio libre en el bloque
    $primerSitioLibre = Plaza::where('bloque', $bloque)
        ->where('estado', 'libre')
        ->first();
        
    return response()->json($primerSitioLibre);
}


   
    

   
    public function obtenerBloques()
{
    $bloques = Plaza::distinct('bloque')->pluck('bloque');

    return response()->json($bloques);
}
    
         
}

