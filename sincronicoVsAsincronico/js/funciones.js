function foo( x ) { return 2 * x; }
function bar( y ) { return foo( y + 5 ) - 10; }

function f1() { console.log( 'f1' ); }
function f2() { console.log( 'f2' ); }
function f3() {
  console.log( 'f3' );
  setTimeout( f5, 90 );
}
function f4() { console.log( 'f4' ); }
function f5() { console.log( 'f5' ); }

function higherOrder( data, cb ) {
    if ( !cb || !( typeof cb === 'function' ) ) {
        throw new Error( 'Invalid callback. Please provide a function.' );
    }
    console.log( data );
    setTimeout( cb, 10 );
}
//vamos
function fn_MostrarArray(cb, tiempo){
  if ( !cb || !( typeof cb === 'function' ) ) {
      throw new Error( 'Invalid callback. Please provide a function.' );
  }
  setTimeout( cb, tiempo );
}
