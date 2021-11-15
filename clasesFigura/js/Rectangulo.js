class Rectangulo extends Figura {
      constructor( nombre="rectangulo", numero1, numero2) {
        super( nombre );
        this.base = numero1;
        this.altura = numero2;
        if (numero1 == 0) throw new Error('Longitud no puede ser cero');
        if (numero2 == 0) throw new Error('Longitud no puede ser cero');
      }
      calcularPerimetro(){
        return this.base*2+this.altura*2;
      }
      calcularSuperficie(){
        return this.base*this.altura;
      }
      toString(){
        return  `${super.toString()}
                 <br/>base:   ${this.base}
                 <br/>altura:   ${this.altura}
                 <br/>Perimetro:   ${this.calcularPerimetro()}
                 <br/>Superficie:   ${this.calcularSuperficie()}` ;
      }
}
