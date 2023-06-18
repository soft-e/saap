<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Queja;
use Illuminate\Http\Request;

class QuejaController extends Controller
{
    public function index()
    {
        $quejas = Queja::all();
        return response()->json($quejas);
    }

    public function show($id)
    {
        $queja = Queja::findOrFail($id);
        return response()->json($queja);
    }

    public function store(Request $request)
    {
        $queja = Queja::create($request->all());
        return response()->json($queja, 201);
    }

    public function update(Request $request, $id)
    {
        $queja = Queja::findOrFail($id);
        $queja->update($request->all());
        return response()->json($queja, 200);
    }

    public function destroy($id)
    {
        Queja::findOrFail($id)->delete();
        return response()->json(null, 204);
    }
}