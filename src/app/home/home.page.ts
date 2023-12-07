import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  // Variables que usaremos en el ejercicio
  esCorrecto: boolean = false;
  animalSecreto: string = "";
  animalUsuario: string = "";
  mensajeParaUser: string = "";
  contador: number = 2;
  listaAnimales: string[] = ["Oca","Túcan","Rinoceronte","Coyote","Tortuga Marina","Caracol","León","Guepardo","Tortuga","Cerdo","Gallina","Mantis","Castor","Conejo","Ganso","Loro","Cocodrilo","Oso Panda","Mariquita","Canguro","Pato","Zarigueya","Caballo","Cabra","Oveja","Perro"];
  puntosTotales: number = 0;
  constructor() {
    // El método animalAleatorio
    this.animalAleatorio();
  }

  comprobarAnimal(){
    var pista: string = "";
    var pista2: string ="";
    console.log("Click en el botón");
    console.log("animalUsuario= "+this.animalUsuario);
    if (this.animalSecreto == this.animalUsuario){
      console.log("Enhorabuena, has acertado");
      this.mensajeParaUser = "Enhorabuena, el animal secreto es " + this.animalSecreto;
      this.sistemaPuntos();
      this.esCorrecto = true;
    } else if (this.contador != 0){
      console.log("CASI!!, Prueba otra vez");
      this.animalUsuario ="";
      this.mensajeParaUser = "¡¡CASI!!, pruebe otra vez. " + (this.contador) + " intentos para pista";
      this.contador--;
    } else {
      console.log("PISTA");
      this.animalUsuario ="";
      pista = this.animalSecreto[0] + this.animalSecreto [1];
      pista2=this.animalSecreto[this.animalSecreto.length-1];
      this.mensajeParaUser = "PISTA: Empieza por " + pista + " y termina por " + pista2;
    }
  }

  animalAleatorio(){

    // Añadimos a la variable "animalSecreto" un valor aleatorio del array. Para ello usaremos la funcion math.random  para generar un valor aleatorio que coincida con alguno de los indices
    this.animalSecreto = this.listaAnimales[Math.floor(Math.random()*this.listaAnimales.length)];
    console.log("AnimalSecreto= "+this.animalSecreto);
  }

  sistemaPuntos(){
    if(this.contador === 2){
      this.puntosTotales+=100;
    } else if(this.contador===1){
      this.puntosTotales +=50;
    } else{
      this.puntosTotales +=25;
    }
  }

  reiniciar(){  
    this.animalSecreto = ""; 
    this.animalAleatorio();
    this.esCorrecto = false;
    this.animalUsuario = "";
    this.mensajeParaUser = ""; 
    this.contador = 2;
  }
  reiniciarPuntos(){
    this.animalSecreto = ""; 
    this.animalAleatorio();
    this.esCorrecto = false;
    this.animalUsuario = "";
    this.mensajeParaUser = ""; 
    this.contador = 2;
    this.puntosTotales = 0;
  }

}
