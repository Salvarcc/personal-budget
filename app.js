console.log("Registro de Gastos \n-----------------")
let movements = []
let count = 0
let balance =0
let expenses = 0
let incomes = 0


const registrarMovimiento = () => {
    count++
    let name = prompt("Ingrese el nombre del gasto")
    while(!(typeof name === 'string')){
        alert("Error: Coloque un nombre correcto")
        name = prompt("Ingrese el nombre del gasto")
    }
    let type = prompt("Ingrese tipo de gasto (Ingreso / Egreso)")
    while(!(type == 'Ingreso' || type == 'ingreso' || type == 'Egreso' || type == 'egreso')){
        alert("Error: Coloque un tipo de gasto correcto (Ingreso / Egreso)")
        type = prompt("Ingrese el tipo de gasto")
    }
    let amount = Number(prompt("Ingrese monto gastado"))
    while(isNaN(amount)|| amount<0){
        alert("Error: Coloque un monto adecuado")
        amount = Number(prompt("Ingrese el monto"))
    }
    type = type.toLowerCase()
    console.log(`Nombre del movimiento: ${name}\nTipo: ${type}\nMonto: ${amount}\n`)
    movement = {name: name, type: type, amount: amount}
    movements.push(movement)
    let repeat = prompt("Agregar otro movimiento? (si/no) (Cualquier otra respuesta sera considerada como no").toLowerCase()
    console.log(`¿Registrar otro movimiento? (si/no): ${repeat}`)
    while(repeat=='si' || repeat=='Si'){
        count++
        name = prompt("Ingrese el nombre del gasto")
        while(!(typeof name === 'string')){
            alert("Error: Coloque un nombre correcto")
            name = prompt("Ingrese el nombre del gasto")
        }
        type = prompt("Ingrese tipo de gasto (Ingreso / Egreso)")
        while(!(type == 'Ingreso' || type == 'ingreso' || type == 'Egreso' || type == 'egreso')){
            alert("Error: Coloque un tipo de gasto correcto (Ingreso / Egreso)")
            type = prompt("Ingrese el tipo de gasto")
        }
        amount = Number(prompt("Ingrese monto gastado"))
        while(isNaN(amount)|| amount<0){
            alert("Error: Coloque un monto adecuado")
            amount = Number(prompt("Ingrese el monto"))
        }
        type = type.toLowerCase()
        console.log(`Nombre del movimiento: ${name}\nTipo: ${type}\nMonto: ${amount}\n`)
        movement = {name: name, type: type.toLowerCase(), amount: amount}
        movements.push(movement)
        repeat = prompt("Agregar otro movimiento? (si/no) (Cualquier otra respuesta sera considerada como no").toLowerCase()
        console.log(`¿Registrar otro movimiento? (si/no): ${repeat}`)
    }
}

let highin = {name: "", type: "", amount:0}
let highex = {name: "", type: "", amount:0}

const eliminarMovimiento = () => {
    let s=0
    let eliminate = prompt("¿Desea eliminar algun movimiento? (si/no)")
    while(eliminate.toLowerCase() == 'si'){
        s++
        let eliminated = prompt("Ingrese el nombre del movimiento que desea eliminar:")
        for(let i=0;i<count;i++){
            let named = movements[i].name
            if(eliminated == named){
                for(let j=i; j<count-1;j++){
                movements[j].name = movements[j+1].name
                movements[j].type = movements[j+1].type
                movements[j].amount = movements[j+1].amount
                }
                movements.pop()
                count--
            }
        }
        eliminate = prompt("¿Desea eliminar otro movimiento? (si/no)")
    }
    if(s>0){
        movements.forEach((obj)=>{
            console.log(`Nombre del movimiento: ${obj.name}\nTipo: ${obj.type}\nMonto: ${obj.amount}\n`)
        })
    }
}

const resumenGeneral = () => {
    console.log("Resumen Final \n-----------------")
    movements.forEach((obj)=>{
        if(obj.type == 'egreso'){
            balance -= obj.amount
        }
        else{
            balance += obj.amount
        }
    })
    console.log(`Total de movimientos registrados: ${count}\nSaldo total: $${balance}`)
}

const resumenTipo = () => {
   movements.forEach((obj)=>{
        if(obj.type == 'egreso'){
            expenses += obj.amount
        }
        else{
            incomes += obj.amount
        }
    }) 
    console.log(`Desglose por tipo:\n- Egresos: $${expenses}\n- Ingresos: $${incomes}`)
}

const masAltos = () => {
    movements.forEach((obj) => {
        if(obj.amount > highex.amount && obj.type == 'egreso'){
            highex = obj
        }
        if(obj.amount > highin.amount && obj.type == 'ingreso'){
            highin = obj
        }
    })
    console.log(`Movimientos mas Altos:\n- Egreso "${highex.name}" con $${highex.amount} \n- Ingreso "${highin.name}" con $${highin.amount}`)
}


registrarMovimiento()
eliminarMovimiento()
resumenGeneral()
resumenTipo()
masAltos()