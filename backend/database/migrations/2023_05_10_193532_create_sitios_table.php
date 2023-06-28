<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateSitiosTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
   
     public function up()
     {
         Schema::create('sitios', function (Blueprint $table) {
             $table->id();
             $table->unsignedBigInteger('parqueo_id');
             $table->string('nombre_bloque');
             $table->integer('numero_sitio');
             $table->string('estado');
             $table->timestamps();
             //claves foranias 
             
             $table->foreign('parqueo_id')->references('id')->on('parqueos')->onDelete('cascade');
         });
     }
 

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('sitios');
    }
}
