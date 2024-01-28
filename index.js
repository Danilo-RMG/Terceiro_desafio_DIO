
class hero 
 {
  constructor(name, age, tipe, hability) 
   {
    this.name = name;
    this.age = age;
    this.tipe = tipe;
    this.hability = hability;
   }
  attack()
   {
    console.log("the " + this.name + " attack using" + this.hability)
   }
 } 

 let mage = new hero("Bob", "43", " mage", " magic");
 let ninja = new hero("Oz", "23", " ninja", " shuriken");
 
 mage.attack()
 ninja.attack()