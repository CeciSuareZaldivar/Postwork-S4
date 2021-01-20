/** Ejercicio 1*/
function deepEqual(a, b) 
{
    tipo_a = typeof(a);

    if ( tipo_a !== 'object' )
    {
        if (a === b)
            return true;
        else
            return false;
    }
    else
    {
        primero = Object.keys(a);
        segundo = Object.keys(b);
    
        if(deepEqual(primero[0],segundo[0]))
        {
            if(deepEqual(primero[1],segundo[1]))
                return true;
            else
                return false;
        }
        else
            return false;
    }
    
}
  
var john = {
    firstName: 'John',
    lastName: 'Doe'
}
  
console.log('Test 1:', deepEqual(1, 1)) // true
console.log('Test 2:', deepEqual(1, '1')) // false
console.log('Test 3:', deepEqual(john, john)) // true
console.log('Test 4:', deepEqual(john, { firstName: 'John', lastName: 'Doe' })) // true
console.log('Test 5:', deepEqual(john, { firstName: 'John' })) // false


/** Ejercicio 2*/
function chunk(array, size) {
    var result = [], aux = []; contador = 0;

    if( size > array.length){
        return("el valor es mas grande que el arreglo");
    }

    for(var i=0; i<array.length;i++){
        aux.push(array[i]);
        contador++;
        if(contador===size){
            console.log(aux);
            result.push(aux);
            contador = 0;
            aux = [];
        }
    }    
    return result;
};
  
    var data = [1, 2, 3, 4, 5, 6, 7, 8]
  
    console.log('Test 1:', chunk(data, 1)) // [[1], [2], [3], [4], [5], [6], [7], [8]]
    console.log('Test 2:', chunk(data, 2)) // [[1, 2], [3, 4], [5, 6], [7, 8]]
    console.log('Test 3:', chunk(data, 3)) // [[1, 2, 3], [4, 5, 6], [7, 8]]


/** Ejercicio 3*/
function frecuency(string){
	var objetoOrdenado = {};
	var arrayOrdenado = [];

	for(var i = 0; i < string.length; i++){
		arrayOrdenado.push(string[i]);
	}
	arrayOrdenado.sort();

	for(var i = 0; i < string.length; i++){
		var acum = 0;
		for(var j = 0; j < arrayOrdenado.length; j++)
		{
			if(arrayOrdenado[i] === arrayOrdenado[j])
			{
				acum = acum + 1;
			}
		}
		objetoOrdenado[arrayOrdenado[i]] = acum;
	}
	return objetoOrdenado;
}

console.log('Test 1',frecuency('cccbbbaaa'));
console.log('Test 2',frecuency('www.bedu.org'));
console.log('Test 3',frecuency('john.doe@domain.com'));