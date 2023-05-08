## Rutas para interaccion con el backend mediante el uso de peticiones http desde el frontend o para testear usando thunder client

+--------+-----------+-------------------------------+-------------------+-----------------------------------------------------+------------+
| Domain | Method    | URI                           | Name              | Action                                              | Middleware |
+--------+-----------+-------------------------------+-------------------+-----------------------------------------------------+------------+
|        | GET       | api/empleados                 | empleados.index   | App\Http\Controllers\Api\EmpleadoController@index   | api        |
|        | POST      | api/empleados                 | empleados.store   | App\Http\Controllers\Api\EmpleadoController@store   | api        |
|        | PUT       | api/empleados/{id_empleado}   | empleados.update  | App\Http\Controllers\Api\EmpleadoController@update  | api        |
|        | DELETE    | api/empleados/{id_empleado}   | empleados.destroy | App\Http\Controllers\Api\EmpleadoController@destroy | api        |
|        | GET       | api/empleados/{id_empleado}   | empleados.show    | App\Http\Controllers\Api\EmpleadoController@show    | api        |
|        | POST      | api/parqueos                  | parqueos.store    | App\Http\Controllers\Api\ParqueoController@store    | api        |
|        | GET       | api/parqueos                  | parqueos.index    | App\Http\Controllers\Api\ParqueoController@index    | api        |
|        | PUT       | api/parqueos/{id_parqueo}     | parqueos.update   | App\Http\Controllers\Api\ParqueoController@update   | api        |
|        | GET       | api/parqueos/{id_parqueo}     | parqueos.show     | App\Http\Controllers\Api\ParqueoController@show     | api        |
|        | DELETE    | api/parqueos/{id_parqueo}     | parqueos.destroy  | App\Http\Controllers\Api\ParqueoController@destroy  | api        |
|        | POST      | api/personas                  | personas.store    | App\Http\Controllers\Api\PersonaController@store    | api        |
|        | GET       | api/personas                  | personas.index    | App\Http\Controllers\Api\PersonaController@index    | api        |
|        | DELETE    | api/personas/{id_persona}     | personas.destroy  | App\Http\Controllers\Api\PersonaController@destroy  | api        |
|        | PUT       | api/personas/{id_persona}     | personas.update   | App\Http\Controllers\Api\PersonaController@update   | api        |
|        | GET       | api/personas/{id_persona}     | personas.show     | App\Http\Controllers\Api\PersonaController@show     | api        |
+--------+-----------+-------------------------------+-------------------+-----------------------------------------------------+------------+

## Donde usar
Las rutas definidas deben usarse en las api del frontend usando la libreria Axios e indicando el tipo de http request