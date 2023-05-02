<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Persona;
use App\Models\Empleado;

class EmpleadoController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $empleados = Empleado::with('persona')->get();
        return response()->json($empleados,200);
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
        $empleado = new Empleado([
            'nombre_cargo'=>$request->input('nombre_cargo')
        ]);
        //$persona->empleado$empleado()->save($empleado);
        $empleado->persona()->associate($persona);
        $empleado->save();

        return response()->json([
            'message'=>'Empleado creado exitosamente'
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
        $empleado = Empleado::with('persona')->find($id);
        if(!$empleado){
            return response()->json(['message'=>'Empleado no encontrado'],404);
        }
        return response()->json($empleado,200);
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
        $empleado = Empleado::with('persona')->find($id);
        if (!$empleado) {
            return response()->json(['message' => 'Empleado no encontrado'], 404);
        }
        $persona = $empleado->persona;
        $persona->nombre = $request->input('nombre', $persona->nombre);
        $persona->apellido_paterno = $request->input('apellido_paterno', $persona->apellido_paterno);
        $persona->apellido_materno = $request->input('apellido_materno', $persona->apellido_materno);
        $persona->ci = $request->input('ci', $persona->ci);
        $persona->telefono = $request->input('telefono', $persona->telefono);
        $persona->email = $request->input('email', $persona->email);
        $persona->password = $request->input('password', $persona->password);

        $empleado = new Empleado([
            'nombre_cargo'=>$request->input('nombre_cargo')
        ]);
        
        $persona->save();
        
        $empleado->save();
        return response()->json([
            'message' => 'Empleado actualizado exitosamente'
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
        $empleado = Empleado::findOrFail($id);
        $persona = $empleado->persona;

        $empleado -> delete();
        $persona->delete();
        return response()->json(['message'=>'empleado eliminado correctamente']);

    }
}
