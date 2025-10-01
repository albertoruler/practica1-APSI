"use strict";
// Paso 1: Datos iniciales
const lugares = [
    { id: 1, nombre: "Bosque Misterioso", tipo: "bosque", peligro: 2 },
    { id: 2, nombre: "Cueva Oscura", tipo: "cueva", peligro: 5 },
    { id: 3, nombre: "Castillo Abandonado", tipo: "castillo", peligro: 4 }
];
const personajes = [
    { id: 1, nombre: "Guardián", fuerza: 8, aliado: false },
    { id: 2, nombre: "Sabio", fuerza: 2, aliado: true },
    { id: 3, nombre: "Bandido", fuerza: 6, aliado: false }
];
const objetos = [
    { id: 1, nombre: "Espada", poder: 5, categoria: "arma" },
    { id: 2, nombre: "Antorcha", poder: 1, categoria: "herramienta" },
    { id: 3, nombre: "Amuleto", poder: 3, categoria: "mágico" },
    { id: 4, nombre: "Escudo", poder: 4, categoria: "arma" }
];
// Paso 2: Funciones flecha
// listarLugares: usa forEach
const listarLugares = () => {
    lugares.forEach((l) => {
        console.log(`${l.nombre} (Peligro: ${l.peligro})`);
    });
};
// buscarPersonaje: usa filter
const buscarPersonaje = (nombre) => {
    const encontrados = personajes.filter((p) => p.nombre.toLowerCase() === nombre.toLowerCase());
    if (encontrados.length > 0) {
        encontrados.forEach((p) => console.log(`${p.nombre} - Fuerza: ${p.fuerza}, ${p.aliado ? "Aliado" : "Enemigo"}`));
    }
    else {
        console.log(`Personaje "${nombre}" no encontrado.`);
    }
};
// inventarioConFrases: usa map
const inventarioConFrases = () => objetos.map((o) => `${o.nombre} (+${o.poder} poder, categoría: ${o.categoria})`);
// agruparObjetosPorCategoria: usa reduce
const agruparObjetosPorCategoria = () => objetos.reduce((acc, obj) => {
    acc[obj.categoria] = (acc[obj.categoria] || 0) + obj.poder;
    return acc;
}, {});
// poderTotalInventario: usa reduce
const poderTotalInventario = () => objetos.reduce((total, o) => total + o.poder, 0);
// Paso 3: Simulación de menú
const main = () => {
    const opcion = 3; // <-- Cambia este número (1..5) para probar
    switch (opcion) {
        case 1:
            listarLugares();
            break;
        case 2:
            const nombreBuscado = "Sabio"; // <-- Cambia el nombre para probar
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
// Ejecutar la aventura
main();
const opcion = 1; // Cambia entre 1,2,3,4,5
