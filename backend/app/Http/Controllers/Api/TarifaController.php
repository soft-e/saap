<?php

namespace App\Http\Controllers;

use App\Models\Tarifa;
use Illuminate\Http\Request;
use Illuminate\Routing\Controller;

class TarifaController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $tarifas = Tarifa::get();
        return response()->json($tarifas);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        return view('tarifas.create');
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $tarifa = new Tarifa;
        $tarifa->costo_tarifa = $request->costo_tarifa;
        $tarifa->save();
        return redirect()->route('tarifa.index');
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $tarifa = Tarifa::findOrFail($id);
        return view('tarifas.show', compact('tarifa'));
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        $tarifa = Tarifa::findOrFail($id);
        return view('tarifas.edit', compact('tarifa'));
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
        $tarifa = Tarifa::findOrFail($id);
        $tarifa->costo_tarifa = $request->costo_tarifa;
        $tarifa->save();
        return redirect()->route('tarifa.index');
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $tarifa = Tarifa::findOrFail($id);
        $tarifa->delete();
        return redirect()->route('tarifa.index');
    }
}