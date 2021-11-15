class Figura{
  constructor(nombre){
    this.nombre=nombre;
  }
  calcularPerimetro() {return 0;}
  calcularSuperficie() {return 0;}
  toString(){
     return  `<br/>nombre:   ${this.nombre} `;
  }
}
