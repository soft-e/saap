<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Tarifa2;

class Tarifa2Controller extends Controller
{

//


public function obtenerUltimoTarifa()
{
    //$ultimaTarifa = Tarifa2::latest('updated_at')->first();
    //ordenamos de mayor a menor y tomamos el primer
   
  
       
      


    //$ultimaTarifa = Tarifa2::orderBy('updated_at', 'desc')->value('costo_tarifa');
    
    
    $ultimaTarifa = Tarifa2::orderByDesc('updated_at')->first();

    if (!$ultimaTarifa) {
        return response()->json(['message' => 'No se encontró ninguna tarifa registrada.'], 404);
    }

    return response()->json($ultimaTarifa);
}






    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $tarifa2s = Tarifa2::all();
        return response()->json($tarifa2s);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        //
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
