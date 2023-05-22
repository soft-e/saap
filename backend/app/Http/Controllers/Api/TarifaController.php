<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Tarifa;

class TarifaController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $Ctarifas = Tarifa::all();
        return response()->json($Ctarifas);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $Ctarifa = new Tarifa;
        $Ctarifa->costo_tarifa = $request->costo_tarifa;
        $Ctarifa->save();
        return response()->json($Ctarifa);
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $Ctarifa = Tarifa::findOrFail($id);
        return response()->json($Ctarifa);
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
        $Ctarifa = Tarifa::findOrFail($id);
        $Ctarifa->costo_tarifa = $request->costo_tarifa;
        $Ctarifa->save();
        return response()->json($Ctarifa);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $Ctarifa = Tarifa::findOrFail($id);
        $Ctarifa->delete();
        return response()->json(['message' => 'Tarifa eliminada']);
    }
}