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
            $table->string('estado_sitio');
            //$table->string('estado_sitio')->default('libre');
            
            $table->integer('numero_sitio');
            $table->timestamps();
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