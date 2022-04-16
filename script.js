const boton = document.querySelector('#calcular');
boton.addEventListener('click', calcular);

function calcular(){

const total_cuenta = document.getElementById('total_cuenta').value;
const porcentaje_propina = document.getElementById('porcentaje').value;

let porcentaje= (porcentaje_propina / 100) * total_cuenta;
let resultado = Number(total_cuenta) + porcentaje;

if (total_cuenta === "" || porcentaje_propina === ""){
   alert("NO INGRESO LOS DATOS COMPLETOS!");
}else{
   let contenedorpadre = document.querySelector('.resultado');
   let contenedor = document.querySelector('.content');

   contenedorpadre.style.display = "block";

   contenedor.innerHTML = `<span>Valor cuenta: $${total_cuenta}</span>
   <span>Porcentaje: $${porcentaje}</span>
   <span>Total a pagar: $${resultado}</span>`;

   document.querySelector('#limpiar').classList.add('limpiar_datos');
}


document.querySelector('.limpiar_datos').addEventListener('click', limpiarDatos);

function limpiarDatos(){
   document.getElementById('total_cuenta').value = "";
   document.getElementById('porcentaje').value = "";
   
   document.querySelector('.resultado').style.display= "none";
   document.querySelector('#limpiar').classList.remove('limpiar_datos');
}

}
