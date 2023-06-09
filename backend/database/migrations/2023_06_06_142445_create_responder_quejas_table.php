<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateResponderQuejasTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('responder_quejas', function (Blueprint $table) {
            Schema::create('responder_quejas', function (Blueprint $table) {
                $table->id();
                $table->unsignedBigInteger('queja_id'); // Columna de clave externa
                $table->string('contenido');
                $table->string('asunto');
                $table->timestamps();
        
                // Definir la relación de clave externa después de la migración de la tabla "quejas"
                $table->foreign('queja_id')->references('id')->on('quejas')->before('id');
            });
        });
        



        
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('responder_quejas');
    }
}
