class CuentaCorriente extends Cuenta {
 constructor( numero, saldo, descubierto) {
 super( numero, saldo );
 this.descubierto = descubierto;
 }
 debitar(numero ){
   if(numero <= this.sal + this.descubierto) this.sal -= numero ;
 }
   toString(){
     return  `Cuenta Corriente:   ${super.toString()}  <br/>descubierto:   ${this.descubierto}` ;
   }
}
