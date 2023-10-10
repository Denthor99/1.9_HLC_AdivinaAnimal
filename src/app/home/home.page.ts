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

  constructor() {
    // El método animalAleatorio se ejecutará al iniciar el programa
    this.animalAleatorio();
  }

  comprobarAnimal(){
    console.log("Click en el botón");
    console.log("animalUsuario= "+this.animalUsuario);
    if (this.animalSecreto == this.animalUsuario){
      console.log("Enhorabuena, has acertado");
      this.mensajeParaUser = "Enhorabuena, el animal secreto es " + this.animalSecreto;
      this.esCorrecto = true;
    } else {
      console.log("CASI!!, Prueba otra vez");
      this.mensajeParaUser = "¡¡CASI!!, pruebe otra vez"
    }
  }

  animalAleatorio(){
    // Crearemos un array de cadenas, donde introduciremos una lista de animales
    let listaAnimales: string[] = ["León","Gato","Camello", "Loro", "Perro","Dromedario","Gorrión","Elefante"];

    // Añadimos a la variable "animalSecreto" un valor aleatorio del array. Para ello usaremos la funcion math.random  para generar un valor aleatorio que coincida con alguno de los indices
    this.animalSecreto = listaAnimales[Math.floor(Math.random()*listaAnimales.length)];
    console.log("AnimalSecreto= "+this.animalSecreto);
  }

  reiniciar(){  
    this.animalAleatorio();
    this.esCorrecto = false;
    this.animalUsuario = "";
    this.mensajeParaUser = "";  
  }

}
