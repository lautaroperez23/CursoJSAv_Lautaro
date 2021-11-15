//funciones
async function example1( ){ return 'Hello'; }
async function example2( ){ return Promise.resolve( 'World' ); }
//console.error();
async function errorExample1( /* arguments */ ){
    return Promise.reject( 'Rejected!-1' );
}
async function errorExample2( /* arguments */ ){
    throw 'Rejected!-2';
}
async function errorExample3( /* arguments */ ){
    await Promise.reject( 'Rejected!-3' );
}

async function tryCatchExample() {
// Try to do asynchronous work
    try{
        const value1 = await Promise.resolve( 'Success 1' );
        const value2 = await Promise.resolve( 'Success 2' );
        const value3 = await Promise.reject( 'Oh no!' );
    }
    // Catch errors
    catch( err ){
        console.log( err ); // Expected output: Oh no!
    }
}

async function mostrarArrayConDebito(array, monto){
  array.forEach((item, i) => {
    console.log(`posicion[${i}]`)
    try {
        item.debitar(monto);
    } catch (e) {
      return Promise.reject(`fallo el debito en la cuenta = ${item.numero}`);
    }
    console.log(`\n${item}`);
  });
  return Promise.resolve("funciono todo ok...!!!");
}
