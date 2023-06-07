<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

use App\Models\Queja;
use App\Models\ResponderQueja;


class ResponderQuejaController extends Controller
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


    

public function obtenerAsuntoQueja($id) {
    $queja = Queja::find($id); // Busca la queja por su ID
    
    if ($queja) {
        return $queja->asunto; // Retorna el valor del asunto
    } else {
        return null; // Maneja el caso de que no se encuentre la queja
    }
}

}
