# practica1-APSI
Objetivo
Construir una pequeña aventura por texto en la que pondrás en práctica:
-	Declaración de variables y tipos en TypeScript.
-	Uso de funciones flecha con tipado.
-	Métodos de arrays (forEach, map, filter, reduce).
-	Creación de un objeto nuevo a partir de un reduce.

Contexto
Eres un héroe que explora lugares, se encuentra con personajes y reúne objetos mágicos. Toda la aventura estará representada con arrays locales. No habrá entradas por consola: el comportamiento del programa se controla mediante variables definidas en el código.

Paso 1: Datos Iniciales
Declara los siguientes arrays y típalos:
const lugares: Lugar[] = [
  { id: 1, nombre: "Bosque Misterioso", tipo: "bosque", peligro: 2 },
  { id: 2, nombre: "Cueva Oscura", tipo: "cueva", peligro: 5 },
  { id: 3, nombre: "Castillo Abandonado", tipo: "castillo", peligro: 4 }
];
 
const personajes: Personaje[] = [
  { id: 1, nombre: "Guardián", fuerza: 8, aliado: false },
  { id: 2, nombre: "Sabio", fuerza: 2, aliado: true },
  { id: 3, nombre: "Bandido", fuerza: 6, aliado: false }
];
 
const objetos: Objeto[] = [
  { id: 1, nombre: "Espada", poder: 5, categoria: "arma" },
  { id: 2, nombre: "Antorcha", poder: 1, categoria: "herramienta" },
  { id: 3, nombre: "Amuleto", poder: 3, categoria: "mágico" },
  { id: 4, nombre: "Escudo", poder: 4, categoria: "arma" }
];

Paso 2: Funciones a Implementar

listarLugares: () => void

Usa forEach para recorrer el array lugares.
Muestra en consola cada lugar con su nivel de peligro.
buscarPersonaje: (nombre: string) => void

Usa filter para buscar personajes por nombre.
Si lo encuentra, muestra su fuerza y si es aliado o enemigo.
inventarioConFrases: () => string[]

Usa map para devolver un array de frases con el inventario.
agruparObjetosPorCategoria: () => Record<string, number>

Usa reduce para generar un objeto donde cada clave sea una categoría y el valor sea el poder total acumulado.
poderTotalInventario: () => number

Usa reduce para calcular la suma total de poder.

Paso 3: Simulación de menú
En tu función main (también flecha) crea una variable opción: number para simular lo que el jugador elegiría.
Ejemplo:
const main = (): void => {
  const opcion: number = 3; // Cambia este número para probar
  switch (opcion) {
    case 1:
      listarLugares();
      break;
    case 2:
      const nombreBuscado = "Sabio"; // Cambia el nombre para probar
      buscarPersonaje(nombreBuscado);
      break;
    case 3:
      console.log(inventarioConFrases());
      break;
    case 4:
      console.log(agruparObjetosPorCategoria());
      break;
    case 5:
      console.log("Poder total:", poderTotalInventario());
      break;
    default:
      console.log("Opción no válida.");
  }
};

Ejemplo de ejecución 
Si opción = 3:
[
  'Espada (+5 poder, categoría: arma)',
  'Antorcha (+1 poder, categoría: herramienta)',
  'Amuleto (+3 poder, categoría: mágico)',
  'Escudo (+4 poder, categoría: arma)'
]
Si opción = 4:
{ arma: 9, herramienta: 1, mágico: 3 }
Si opción = 5:
Poder total: 13

Requisitos de entrega 
-	Todas las funciones deben implementarse con funciones flecha.
-	Usa tipos explícitos en todas las funciones y objetos.
-	Cada función debe demostrar el uso de un método de array (forEach, map, filter, reduce).
reduce debe devolver un objeto nuevo con distinta estructura al array original (4).
-	El programa debe ejecutarse cambiando las variables en el código, sin introducir nada por consola.

Entrega Final
-	Crea un repositorio en GitHub con tu solución.
-	Sube tu código y asegúrate de que compile sin errores.
-	Entrega el enlace al repositorio en la plataforma de la asignatura.
-	La práctica se entregará en la propia hora de clase, a las 15:15 se empezará a llamar a gente de manera aleatoria si nadie presenta voluntariamente.
