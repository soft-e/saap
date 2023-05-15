<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Api\PersonaController;
use App\Http\Controllers\Api\AdministradorController;
use App\Http\Controllers\Api\CargoController;
use App\Http\Controllers\Api\EmpleadoController;
use App\Http\Controllers\Api\ParqueoController;
use App\Http\Controllers\api\VehiculoController;
use App\Http\Controllers\api\TarifaController;


/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});

Route::resource('personas', PersonaController::class);

//Route::resource('administradores',AdministradorController::class);
Route::resource('empleados', EmpleadoController::class);
Route::post('registrarEmpleados', [EmpleadoController::class, 'store']);


//Route::resource('cargos',CargoController::class);

//Route::resource('contrataciones',ContratacionController::class);
Route::resource('parqueos', ParqueoController::class);
Route::resource('vehiculos', VehiculoController::class);
Route::resource('tarifa', TarifaController::class);