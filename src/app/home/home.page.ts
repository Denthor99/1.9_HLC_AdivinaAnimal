import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
@NgModule({
  imports: [
    FormsModule]
    
})

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

  constructor() {
    // El método animalAleatorio
    this.animalAleatorio();
  }

  comprobarAnimal(){
    var pista: string = "";
    console.log("Click en el botón");
    console.log("animalUsuario= "+this.animalUsuario);
    if (this.animalSecreto == this.animalUsuario){
      console.log("Enhorabuena, has acertado");
      this.mensajeParaUser = "Enhorabuena, el animal secreto es " + this.animalSecreto;
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
      this.mensajeParaUser = "PISTA: Empieza por " + pista;
    }
  }

  animalAleatorio(){

    // Añadimos a la variable "animalSecreto" un valor aleatorio del array. Para ello usaremos la funcion math.random  para generar un valor aleatorio que coincida con alguno de los indices
    this.animalSecreto = this.listaAnimales[Math.floor(Math.random()*this.listaAnimales.length)];
    console.log("AnimalSecreto= "+this.animalSecreto);
  }

  reiniciar(){  
    this.animalSecreto = ""; 
    this.animalAleatorio();
    this.esCorrecto = false;
    this.animalUsuario = "";
    this.mensajeParaUser = ""; 
    this.contador = 3;
  }

}
