const movimientos = [
  { nombre: "Salario", tipo: "ingreso", valor: 3000 },
  { nombre: "Comida", tipo: "gasto", valor: 200 },
  { nombre: "Freelance", tipo: "ingreso", valor: 500 },
  { nombre: "Transporte", tipo: "gasto", valor: 150 }
];

function obtenerNombres(movimientos) {
  return movimientos.map(mov => mov.nombre);
}

function obtenerValores(movimientos) {
  return movimientos.map(mov => mov.valor);
}

function calcularTotal(valores) {
  return valores.reduce((total, valor) => total + valor, 0);
}

console.log("Nombres:", obtenerNombres(movimientos));
console.log("Valores:", obtenerValores(movimientos));
console.log("Total:", calcularTotal(obtenerValores(movimientos)));

const contarPorTipo = (movimientos) => {
  let ingresos = 0
  let gastos = 0
  let tipo = {ingresos:0,gastos:0}
  movimientos.forEach((obj) => {
    if(obj.tipo == 'ingreso'){
      ingresos++
      tipo.ingresos++
    }
    else {
      gastos++
      tipo.gastos++
    }
  })
  return tipo
}

console.log("Por Tipo:", contarPorTipo(movimientos));

function obtenerIngresos(movimientos) {
  return movimientos.filter(mov => mov.tipo === 'ingreso');
}

function obtenerGastos(movimientos) {
  return movimientos.filter(mov => mov.tipo === 'gasto');
}

function filtrarPorMonto(movimientos, minimo) {
  return movimientos.filter(mov => mov.valor >= minimo);
}

function buscarPorNombre(movimientos, nombre) {
  return movimientos.find(mov => 
    mov.nombre.toLowerCase().includes(nombre.toLowerCase())
  );
}

function obtenerPrimero(movimientos, tipo) {
  return movimientos.find(mov => mov.tipo === tipo);
}

const obtenerTotalPorTipo = (movimientos, tipo) => {
  let total =0
  let movements = []
  if(tipo == 'ingreso'){
    movements = obtenerIngresos(movimientos)
  } else {
    movements = obtenerGastos(movimientos)
  }

  movements.forEach((obj)=>{
    total += obj.valor
  })
  return total
}

console.log("Total por ingresos: ", obtenerTotalPorTipo(movimientos,'ingreso'))
console.log("Total por gastos: ", obtenerTotalPorTipo(movimientos,'gasto'))

function generarReporte(movimientos) {
  const ingresos = obtenerIngresos(movimientos);
  const gastos = obtenerGastos(movimientos);
  
  return {
    totalIngresos: calcularTotal(obtenerValores(ingresos)),
    totalGastos: calcularTotal(obtenerValores(gastos)),
    cantidad: movimientos.length
  };
}

function calcularBalance(movimientos) {
  const reporte = generarReporte(movimientos);
  return reporte.totalIngresos - reporte.totalGastos;
}

function obtenerPromedio(movimientos, tipo) {
  const filtrados = movimientos.filter(mov => mov.tipo === tipo);
  if (filtrados.length === 0) return 0;
  return calcularTotal(obtenerValores(filtrados)) / filtrados.length;
}

const validarPresupuesto = (movimientos, limite) =>{
  let gastos = 0
  movimientos.forEach((obj) => {
    if(obj.tipo == 'gastos'){
      gastos+=obj.valor
    }
  })
  if(gastos > limite){
   return "Se paso del limite" 
  }
  else {
    return "Es estable al presupuesto"
  }
}