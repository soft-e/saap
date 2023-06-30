<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Api\PersonaController;
use App\Http\Controllers\Api\AdministradorController;
use App\Http\Controllers\Api\CargoController;

use App\Http\Controllers\Api\ContratoController;
use App\Http\Controllers\Api\EmpleadoController;
use App\Http\Controllers\Api\ParqueoController;
use App\Http\Controllers\Api\VehiculoController;

use App\Http\Controllers\Api\HorarioAtencionController;
use App\Http\Controllers\Api\DocenteController;
use App\Http\Controllers\Api\MensajeController;
use App\Http\Controllers\Api\PlazaController;
use App\Http\Controllers\Api\SitioClienteController;
use App\Http\Controllers\Api\QuejaController;
use App\Http\Controllers\Api\Tarifa2Controller;
use App\Http\Controllers\Api\PagoController;
use App\Http\Controllers\Api\ResponderQuejaController;
use App\Http\Controllers\Api\Mensaje2Controller;
use App\Http\Controllers\Api\VehiculosExtrasController;
use App\Http\Controllers\Api\SolicitarContratoController;
use App\Models\VehiculosExtras;
use App\Http\Controllers\Api\SaldoController;
use App\Http\Controllers\Api\PlazaRodrigoController;
use App\Http\Controllers\Api\SitiosController;

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
Route::resource('tarifa2s', Tarifa2Controller::class);
Route::resource('saldos',SaldoController::class);

Route::get('/tarifa2/ultima', [Tarifa2Controller::class, 'ultimaTarifa']);
Route::resource('pagos',PagoController::class);
Route::resource('mensajes2',Mensaje2Controller::class);
Route::post('pagos',[PagoController::class, 'store']);
Route::get('/pagos/saldo/{id}', [PagoController::class, 'getSaldoByContratoId']);
Route::get('/pagos/fechapago/{id}',[PagoController::class, 'getUltimaFechaRegistroPorContratoId']);

//Route::resource('administradores',AdministradorController::class);
Route::resource('empleados', EmpleadoController::class);
Route::post('registrarempleados', [EmpleadoController::class, 'store']);
Route::put('registrarempleado/{id}', [EmpleadoController::class, 'update']);
Route::put('actualizarpersona/{id}', [PersonaController::class, 'update']);
Route::resource('docentes', DocenteController::class);
Route::post('registrarmensaje', [MensajeController::class, 'store']);
Route::put('actualizarmensajes/{id}', [MensajeController::class, 'update']);
Route::post('registrarqueja', [QuejaController::class, 'store']);
Route::put('editarqueja/{id}', [QuejaController::class, 'update']);
Route::resource('solicitarcontrato', SolicitarContratoController::class);
Route::post('savesolicitarcontrato', [SolicitarContratoController::class, 'store']);
Route::put('editsolicitarcontrato', [SolicitarContratoController::class, 'update']);

Route::get('/sitios/disponibles/{id}', [SitiosController::class, 'obtenerSitiosLibres']);
Route::get('/parqueos', [ParqueoController::class, 'show']);
Route::resource('/sitios',SitiosController::class);
//Route::resource('cargos',CargoController::class);

//Route::resource('contrataciones',ContratacionController::class);

//RUTAS DE ERIEL
Route::resource('parqueos', ParqueoController::class);
Route::resource('vehiculos', VehiculoController::class);

Route::resource('hatencion', HorarioAtencionController::class);
Route::resource('mensajes', MensajeController::class);
Route::resource('vehiculosExtras', VehiculosExtrasController::class);
Route::get('vehiculosExtras/getbyidContract/{id}', [VehiculosExtrasController::class, 'getbyidContract']);
//RUTAS DE ERIEL


//Route::resource('tarifa', TarifaController::class);

//Route::resource('plazas', PlazaController::class);


Route::resource('contrato', ContratoController::class);


Route::resource('atencion', HorarioAtencionController::class);
Route::resource('quejas', QuejaController::class);
Route::prefix('plazas')->group(function () {
    Route::resource('/', PlazaController::class);
    Route::get('primer-sitio-libre/{bloque}', [PlazaController::class, 'obtenerPrimerSitioLibre']);
    Route::get('obtener-bloques', [PlazaController::class, 'obtenerBloques']);
});

Route::resource('/responderquejas', ResponderQuejaController::class);

Route::resource('/plazarodrigo',PlazaRodrigoController::class);