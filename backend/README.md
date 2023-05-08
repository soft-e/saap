## Rutas para interaccion con el backend mediante el uso de peticiones http desde el frontend o para testear usando thunder client

+--------+-----------+-------------------------------+-------------------+-----------------------------------------------------+
| Domain | Method    | URI                           | Name              | Action                                              |
+--------+-----------+-------------------------------+-------------------+-----------------------------------------------------+
|        | GET       | api/empleados                 | empleados.index   | App\Http\Controllers\Api\EmpleadoController@index   |
|        | POST      | api/empleados                 | empleados.store   | App\Http\Controllers\Api\EmpleadoController@store   |
|        | PUT       | api/empleados/{id_empleado}   | empleados.update  | App\Http\Controllers\Api\EmpleadoController@update  |
|        | DELETE    | api/empleados/{id_empleado}   | empleados.destroy | App\Http\Controllers\Api\EmpleadoController@destroy |
|        | GET       | api/empleados/{id_empleado}   | empleados.show    | App\Http\Controllers\Api\EmpleadoController@show    |
|        | POST      | api/parqueos                  | parqueos.store    | App\Http\Controllers\Api\ParqueoController@store    |
|        | GET       | api/parqueos                  | parqueos.index    | App\Http\Controllers\Api\ParqueoController@index    |
|        | PUT       | api/parqueos/{id_parqueo}     | parqueos.update   | App\Http\Controllers\Api\ParqueoController@update   |
|        | GET       | api/parqueos/{id_parqueo}     | parqueos.show     | App\Http\Controllers\Api\ParqueoController@show     |
|        | DELETE    | api/parqueos/{id_parqueo}     | parqueos.destroy  | App\Http\Controllers\Api\ParqueoController@destroy  |
|        | POST      | api/personas                  | personas.store    | App\Http\Controllers\Api\PersonaController@store    |
|        | GET       | api/personas                  | personas.index    | App\Http\Controllers\Api\PersonaController@index    |
|        | DELETE    | api/personas/{id_persona}     | personas.destroy  | App\Http\Controllers\Api\PersonaController@destroy  |
|        | PUT       | api/personas/{id_persona}     | personas.update   | App\Http\Controllers\Api\PersonaController@update   |
|        | GET       | api/personas/{id_persona}     | personas.show     | App\Http\Controllers\Api\PersonaController@show     |
+--------+-----------+-------------------------------+-------------------+-----------------------------------------------------+

## Donde usar
Las rutas definidas deben usarse en las api del frontend usando la libreria Axios e indicando el tipo de peticion