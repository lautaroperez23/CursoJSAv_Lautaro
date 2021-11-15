class Cuadrado extends Figura {
      constructor( nombre='cuadrado', numero) {
        super( nombre );
        this.lado = numero;
        if (numero == 0){
            throw new Error('Longitud no puede ser cero');
            console.log('if');
          }
      }
      calcularPerimetro(){
        return this.lado*4;
      }
      calcularSuperficie(){
        return this.lado*this.lado;
      }
      toString(){
        return  `${super.toString()}
                 <br/>lado:   ${this.lado}
                 <br/>Perimetro:   ${this.calcularPerimetro()}
                 <br/>Superficie:   ${this.calcularSuperficie()}` ;
      }
}
