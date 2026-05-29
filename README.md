# p5-digital-academy-ejercicios-javascript-simone

1. [Word exists or not](#word-exists-or-not)

## Word exists or not

**Objetivo:** 

Dada una cadena de texto (string) de longitud arbitraria que contiene cualquier carácter ASCII, escribir una función para determinar si dicha cadena contiene la palabra completa "English".

**Condiciones:**

1. El orden de los caracteres es importante: una cadena como "abcEnglishdef" es correcta, pero "abcnEglishsef" no lo es.

2. No importa si son mayúsculas o minúsculas: "eNglisH" también se considera correcto (insensible a mayúsculas).

3. Valor de retorno: Devuelve un valor booleano: true si la cadena contiene "English" y false en caso contrario.

**Algoritmo:**

```javascript
const lookupValue = "english";
const testString1 = "abcEnglishdef.";
const testString2 = "abcnEglishsef.";

function testString(testData, lookup){
  return testData.toLowerCase().indexOf(lookup) === -1;

function PrintResult(yesNo){
  return "The string does" + (yesNo ? " NOT" : "") + " contain \"english\" in some form."
}

console.log(prettyPrint(testString(testString1, lookupValue)));
console.log(prettyPrint(testString(testString2, lookupValue)));
}
```