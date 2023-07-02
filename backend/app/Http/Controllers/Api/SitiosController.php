<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Sitios;
use App\Models\Parqueo;
class SitiosController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
   

   /*  public function store(Request $request)
     {
         $sitios = new Sitios;
         $sitios->parqueo_id = $request->parqueo_id;
        
         $sitios->numero_sitio = $request->numero_sitio;
         $sitios->estado_sitio = $request->estado_sitio;
         $sitios->save();
         
         return response()->json(['message' => 'Sitio creado exitosamente'], 201);
     
     } */

     public function store(Request $request)
{
    $sitios = $request->all(); // Obtener la matriz de sitios enviada
    
    foreach ($sitios as $sitio) {
        $nuevoSitio = new Sitios;
        $nuevoSitio->parqueo_id = $sitio['parqueo_id'];
        $nuevoSitio->numero_sitio = $sitio['numero_sitio'];
        $nuevoSitio->estado_sitio = $sitio['estado_sitio'];
        $nuevoSitio->save();
        
    }
    
    return response()->json(['message' => 'Sitios creados exitosamente'], 201);
}
// SitiosController.php

public function getSitiosByParqueo($parqueo_id)
{
    $sitios = Sitios::where('parqueo_id', $parqueo_id)->get();
    return response()->json($sitios);
}


    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
   

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
  
    public function index()
    {
        $sitios = Sitios::all();
        return response()->json($sitios);
    }
    
    public function show($id)
    {
        $sitio = Sitios::findOrFail($id);
        return response()->json($sitio);
    }

    public function getNombreBloque($sitioId)
    {
        // Obtén el nombre del bloque asociado al sitio
        $sitio = Sitios::findOrFail($sitioId);
        $parqueo = Parqueo::findOrFail($sitio->parqueo_id);
        $nombreBloque = $parqueo->nombre_bloque;

        return $nombreBloque;
    }



    //obtner sitios libres
    public function obtenerSitiosLibres($id)
{
    $sitiosLibres = Sitios::where('parqueo_id', $id )->get();
    return response()->json($sitiosLibres);
}

public function obtenerPrimerSitioLibre($idBloque)
{
    // Obtener el primer sitio libre en el bloque
    $primerSitioLibre = Sitios::where('parqueo_id', $idBloque)
        ->where('estado_sitio', 'libre')
        ->orderBy('numero_sitio')
        ->first();
        
    return response()->json($primerSitioLibre);
}




/*public function actualizarEstadoSitio($id)
{
    // Buscar el sitio por su ID
    $sitio = Sitios::findOrFail($id);

    // Actualizar el estado del sitio
    $sitio->update(['estado_sitio' => 'ocupado']);

    // Retornar la respuesta apropiada (puede ser un JSON, redirección, etc.)
    // ...
} */
public function actualizarEstadoSitio($id)
{
    // Buscar el sitio por su ID
    $sitio = Sitios::findOrFail($id);

    // Actualizar el estado del sitio
    $sitio->estado_sitio = 'ocupado';
    $sitio->save();

    // Retornar la respuesta apropiada (puede ser un JSON, redirección, etc.)
    // ...
}




}