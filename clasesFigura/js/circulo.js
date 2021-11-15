class Circulo extends Figura {
      constructor( nombre="circulo", numero) {
        super( nombre );
        this.radio = numero;
        if (numero == 0 )throw new Error('Longitud no puede ser cero');
      }
      calcularPerimetro(){
        return this.radio*3.14*2;
      }
      calcularSuperficie(){
        return this.radio*this.radio*3.14;
      }
      toString(){
        return  `${super.toString()}
                 <br/>radio:   ${this.radio}
                 <br/>Perimetro:   ${this.calcularPerimetro()}
                 <br/>Superficie:   ${this.calcularSuperficie()}` ;
      }
}
