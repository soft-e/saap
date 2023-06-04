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
           
            //$table->enum('estado',['ocupado','libre']);
              
           $table->string('estado'); 
           $table->string('bloque');
           $table->timestamps();
         //  $table->unsignedBigInteger('parqueo_id');
          // $table->foreign('parqueo_id')->references('id')->on('parqueos');
          
         /* $table->unsignedBigInteger('parqueo_id');
          $table->foreign('parqueo_id')->references('id')->on('parqueos');
            $table->timestamps();*/
    

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