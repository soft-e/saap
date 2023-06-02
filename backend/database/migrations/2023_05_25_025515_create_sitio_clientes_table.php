<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateSitioClientesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()


    {

        Schema::create('sitio_clientes', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('parqueo_id');
            $table->unsignedBigInteger('sitio_id');
            
            //Otros campos del sitio_clientes
            $table->timestamps();
              
            $table->foreign('parqueo_id')->references('id')->on('parqueos');
            $table->foreign('sitio_id')->references('id')->on('plazas');
        });
        
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('sitio_clientes');
    }
}
