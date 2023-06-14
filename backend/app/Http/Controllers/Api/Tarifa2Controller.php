<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Tarifa2;

class Tarifa2Controller extends Controller
{
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
        $tarifa2 = new Tarifa2;
        $tarifa2->costo_tarifa = $request->costo_tarifa;
        $tarifa2->save();
        return response()->json($tarifa2);
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $tarifa2 = Tarifa2::findOrFail($id);
        return response()->json($tarifa2);
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
        $tarifa2 = Tarifa2::findOrFail($id);
        $tarifa2->costo_tarifa = $request->costo_tarifa;
        $tarifa2->save();
        return response()->json($tarifa2);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $tarifa2 = Tarifa2::findOrFail($id);
        $tarifa2->delete();
        return response()->json(['message' => 'Tarifa eliminada']);
    }
}