<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Persona;
use App\Models\Docente;

class DocenteController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $docente = Docente::with('persona')->get();
        return response()->json($docente,200);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $persona = Persona::create([
            'nombre'=>$request->input('nombre'),
            'apellido_paterno'=>$request->input('apellido_paterno'),
            'apellido_materno'=>$request->input('apellido_materno'),
            'ci'=>$request->input('ci'),
            'telefono'=>$request->input('telefono'),
            'email'=>$request->input('email'),
            'password'=>$request->input('password')
        ]);
        $docente = new Docente([
        ]);
        $persona->persona()->associate($persona);
        $persona->save();

        return response()->json([
            'message'=>'docente creado exitosamente'
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
        $docente = Docente::with('persona')->find($id);
        if(!$docente){
            return response()->json(['message'=>'docente no encontrado'],404);
        }
        return response()->json($docente,200);
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
        $docente = Docente::with('persona')->find($id);
        if (!$docente) {
            return response()->json(['message' => 'docente no encontrado'], 404);
        }
        $persona = $docente->persona;
        $persona->nombre = $request->input('nombre', $persona->nombre);
        $persona->apellido_paterno = $request->input('apellido_paterno', $persona->apellido_paterno);
        $persona->apellido_materno = $request->input('apellido_materno', $persona->apellido_materno);
        $persona->ci = $request->input('ci', $persona->ci);
        $persona->telefono = $request->input('telefono', $persona->telefono);
        $persona->email = $request->input('email', $persona->email);
        $persona->password = $request->input('password', $persona->password);

        $docente = new Docente([
        ]);
        
        $persona->save();
        
        $docente->save();
        return response()->json([
            'message' => 'docente actualizado exitosamente'
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
        $docente = Docente::findOrFail($id);
        $persona = $docente->persona;

        $docente -> delete();
        $persona->delete();
        return response()->json(['message'=>'docente eliminado correctamente']);
    }
}
