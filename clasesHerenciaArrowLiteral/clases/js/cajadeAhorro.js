class CajaDeAhorro extends Cuenta {
 constructor( numero, saldo, interes) {
 super( numero, saldo );
 this.interes = interes;
 }
 debitar(numero ){
   if(numero <= this.sal) this.sal -= numero ;
 }
 toString(){
   return  `Caja de ahorro:   ${super.toString()}  <br/>interes:   ${this.interes}` ;
 }
}
