// Tipos
type Lugar = { id: number; nombre: string; tipo: string; peligro: number };
type Personaje = { id: number; nombre: string; fuerza: number; aliado: boolean };
type Objeto = { id: number; nombre: string; poder: number; categoria: string };

// 1. Datos iniciales
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

// 2. Funciones flecha

// listarLugares usando forEach
const listarLugares = (): void => {
  lugares.forEach((l: Lugar) => {
    console.log(`${l.nombre} (Peligro: ${l.peligro})`);
  });
};

// buscarPersonaje usando filter
const buscarPersonaje = (nombre: string): void => {
  const encontrados: Personaje[] = personajes.filter(
    (p: Personaje) => p.nombre.toLowerCase() === nombre.toLowerCase()
  );

  if (encontrados.length > 0) {
    encontrados.forEach((p: Personaje) =>
      console.log(`${p.nombre} - Fuerza: ${p.fuerza}, ${p.aliado ? "Aliado" : "Enemigo"}`)
    );
  } else {
    console.log(`Personaje "${nombre}" no encontrado.`);
  }
};

// inventarioConFrases usando map
const inventarioConFrases = (): string[] =>
  objetos.map(
    (o: Objeto) => `${o.nombre} (+${o.poder} poder, categoría: ${o.categoria})`
  );

// agruparObjetosPorCategoria: usa reduce
const agruparObjetosPorCategoria = (): Record<string, number> =>
  objetos.reduce((acc: Record<string, number>, obj: Objeto) => {
    acc[obj.categoria] = (acc[obj.categoria] || 0) + obj.poder;
    return acc;
  }, {});

// poderTotalInventario usando reduce
const poderTotalInventario = (): number =>
  objetos.reduce((total: number, o: Objeto) => total + o.poder, 0);

// 3. Simulación de menú
const main = (): void => {
  const opcion: number = 5; // <-- Este es el numero a cabiar del 1 al 5
  switch (opcion) {
    case 1:
      listarLugares();
      break;
    case 2:
      const nombreBuscado: string = "Sabio";
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

main();

/*
1	Lista los lugares y su nivel de peligro
2	Busca un personaje por nombre
3	Muestra inventario con frases
4	Agrupa objetos por categoría y suma su poder
5	Muestra el poder total del inventario
*/

/*Ejecutar programa terminal (CMD): npm run dev
*/