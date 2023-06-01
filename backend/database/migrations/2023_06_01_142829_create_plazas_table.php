<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreatePlazasTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('plazas', function (Blueprint $table) {

            $table->id();
           $table->integer('numero'); 
           //$table->string('estado'); 
           $table->string('bloque');
           $table->enum('estado',['ocupado','libre']);
      
           
    

        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('plazas');
    }
}