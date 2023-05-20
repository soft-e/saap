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
   

     /*public function update(Request $request, $id)
     {
         // Valida los datos enviados en la solicitud
         $request->validate([
             'estado' => 'required' // Agrega cualquier otra validación que necesites
         ]);
 
         // Actualiza el estado del sitio a "ocupado" en la tabla "plazas"
         $plaza = Plaza::findOrFail($id);
         $plaza->estado = 'ocupado';
         $plaza->save();
 
         // Devuelve la respuesta con la plaza actualizada
         return response()->json($plaza);
     }

     */
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

    public function update(Request $request, Plaza $plaza)
{
    // Validar y procesar los datos recibidos
    $validatedData = $request->validate([
        'estado' => 'required',
        'nombre' => 'required'
        // Otros campos y reglas de validación
    ]);

    // Actualizar los datos en la base de datos
    $plaza->estado = $validatedData['estado'];
    $plaza->nombre = $validatedData['nombre'];
    // Actualizar otros campos si es necesario
    $plaza->save();

    // Redireccionar o devolver una respuesta según tus necesidades
    return redirect()->back()->with('success', 'Plaza actualizada correctamente');
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
