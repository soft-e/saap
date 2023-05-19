<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Plaza;
use Illuminate\Http\Request;

class PlazaController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
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
        $plaza->nombre = $request->nombre;
        $plaza->estado = $request->estado;
        
        $plaza->save();
        
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
         // Valida los datos enviados en la solicitud
         $request->validate([
             'estado' => 'required' // Agrega cualquier otra validación que necesites
         ]);
     
         // Actualiza la plaza utilizando el método update del modelo
         $updated = Plaza::where('id', $id)->update(['estado' => $request->input('estado')]);
     
         if ($updated) {
             // Si se actualizó correctamente, busca la plaza actualizada y retorna la respuesta
             $plaza = Plaza::find($id);
             return response()->json($plaza);
         } else {
             // Si no se pudo actualizar, retorna una respuesta de error
             return response()->json(['message' => 'Error al actualizar la plaza'], 500);
         }
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
