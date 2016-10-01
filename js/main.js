/* jshint esversion: 6 */
var Animal = function(
  //parametros
  numero_de_patas = 4,
  carnivoro = false,
  pelaje = true,
  numero_de_ojos = 2,
  nombre = null
){ //Function
  return {
    numero_de_patas: numero_de_patas,
    carnivoro: carnivoro,
    pelaje: pelaje,
    numero_de_ojos: numero_de_ojos,
    nombre: nombre,
    comer: function(){
      if( this.carnivoro === true){
        return "carnivoro";
      } else {
        return "No carnivoro";
      }
    }
  }; //Return
}; //Animal()

var jirafa = new Animal(4, false, true, 2, "Jirafa");
var araña = new Animal(8, false, true, 12, "Araña");
var rata = new Animal(4, true, true, 2, "Rata");
console.log(jirafa, araña, rata);

// var ProtoAnimal = function(){
//   var animal = new animal();
//   ProtoAnimal = Object.create(animal);
// };

var Pokemon = function(){
  var pokemon = Object.create(Animal());
  pokemon.tipo = "agua";
  // tipo, poder, energia, fuerza, atacar -> function energia/fuerza > 1 gano / else perdio
  return pokemon;
};

var Pikachu = new Pokemon();
