<?php
use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateResponderQuejasTable extends Migration
{
    public function up()
    {
        Schema::create('responder_quejas', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('queja_id');
            $table->foreign('queja_id')->references('id')->on('quejas')->onDelete('cascade');
            $table->string('contenido');
            $table->string('asunto');
            $table->timestamps();
            
        });
    }

    public function down()
    {
        Schema::dropIfExists('responder_quejas');
    }
}
