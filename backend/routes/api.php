<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Api\PersonaController;
use App\Http\Controllers\Api\AdministradorController;
use App\Http\Controllers\Api\CargoController;
use App\Http\Controllers\Api\EmpleadoController;
use App\Http\Controllers\Api\ParqueoController;
use App\Http\Controllers\Api\VehiculoController;
use App\Http\Controllers\Api\TarifaController;
use App\Http\Controllers\Api\HorarioAtencionController;
use App\Http\Controllers\Api\DocenteController;
use App\Http\Controllers\Api\MensajeController;
use App\Http\Controllers\Api\PlazaController;
use App\Http\Controllers\Api\SitioClienteController;

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
Route::post('registrarempleados', [EmpleadoController::class, 'store']);
Route::resource('docentes', DocenteController::class);

//Route::resource('cargos',CargoController::class);

//Route::resource('contrataciones',ContratacionController::class);

//RUTAS DE ERIEL
Route::resource('parqueos', ParqueoController::class);
Route::resource('vehiculos', VehiculoController::class);
Route::resource('ctarifa', TarifaController::class);
Route::resource('hatencion', HorarioAtencionController::class);
Route::resource('mensajes', MensajeController::class);
//RUTAS DE ERIEL


//Route::resource('tarifa', TarifaController::class);

Route::resource('plazas', PlazaController::class);

Route::resource('sitio_clientes', SitioClienteController::class);
Route::resource('atencion', HorarioAtencionController::class);
