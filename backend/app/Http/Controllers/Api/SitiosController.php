<?php

namespace App\Http\Controllers\api;

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
    public function index()
    {
        $sitios = Sitios::all();
        return response()->json($sitios);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
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

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $sitio = Sitios::findOrFail($id);
        return response()->json($sitio);
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
    public function getSitiosByParqueo($parqueo_id)
    {
        $sitios = Sitios::where('parqueo_id', $parqueo_id)->get();
        return response()->json($sitios);
    }

    public function getNombreBloque($sitioId)
    {
        // Obtén el nombre del bloque asociado al sitio
        $sitio = Sitios::findOrFail($sitioId);
        $parqueo = Parqueo::findOrFail($sitio->parqueo_id);
        $nombreBloque = $parqueo->nombre_bloque;

        return $nombreBloque;
    }
    public function obtenerSitiosLibres($id)
    {
        $sitiosLibres = Sitios::where('parqueo_id', $id )->get();
        return response()->json($sitiosLibres);
    }
}
