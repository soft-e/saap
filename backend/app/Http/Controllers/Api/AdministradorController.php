<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Persona;
use App\Models\Administrador;

class AdministradorController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $administradores = Administrador::with('persona')->get();
        return response()->json($administradores,200);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        /**
        $request->validate([
            
            'nombre'=>'required|string',
            'apellido_paterno'=>'required|string',
            'apellido_materno'=>'required|string',
            'ci'=>'required|string',
            'telefono'=>'required|string',
            'email'=>'required|string',
            'password'=>'required|string'
        ]);
         */
        $persona = Persona::create([
            'nombre'=>$request->input('nombre'),
            'apellido_paterno'=>$request->input('apellido_paterno'),
            'apellido_materno'=>$request->input('apellido_materno'),
            'ci'=>$request->input('ci'),
            'telefono'=>$request->input('telefono'),
            'email'=>$request->input('email'),
            'password'=>$request->input('password')
        ]);
        $administrador = new Administrador([
            
        ]);
        //$persona->administrador()->save($administrador);
        $administrador->persona()->associate($persona);
        $administrador->save();

        return response()->json([
            'message'=>'Administrador creado exitosamente'
        ],201);
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $administrador = Administrador::with('persona')->find($id);
        if (!$administrador) {
            return response()->json(['message' => 'Administrador no encontrado'], 404);
        }
        return response()->json($administrador, 200);
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
        $administrador = Administrador::with('persona')->find($id);
        if (!$administrador) {
            return response()->json(['message' => 'Administrador no encontrado'], 404);
        }
        $persona = $administrador->persona;
        $persona->nombre = $request->input('nombre', $persona->nombre);
        $persona->apellido_paterno = $request->input('apellido_paterno', $persona->apellido_paterno);
        $persona->apellido_materno = $request->input('apellido_materno', $persona->apellido_materno);
        $persona->ci = $request->input('ci', $persona->ci);
        $persona->telefono = $request->input('telefono', $persona->telefono);
        $persona->email = $request->input('email', $persona->email);
        $persona->password = $request->input('password', $persona->password);
        
        $persona->save();
        
        $administrador->save();
        return response()->json([
            'message' => 'Administrador actualizado exitosamente'
        ], 200);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $administrador = Administrador::findOrFail($id);
        $persona = $administrador->persona;

        $administrador->delete();
        $persona->delete();

        return response()->json(['message' => 'Administrador eliminado correctamente']);
    }
}
